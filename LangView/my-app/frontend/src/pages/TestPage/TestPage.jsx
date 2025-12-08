import React, { useState, useEffect, useContext } from "react";
import styles from "./TestPage.module.css"
import { TestHeader } from "../../components/layouts/TestHeader";
import { QuestionArea } from "../../components/layouts/QuestionArea";
import { EndAttemptButton } from "../../components/ui/button/EndAttemptButton";
import { NextQuestionButton } from "../../components/ui/button/NextQuestionButton";
import { PrevQuestionButton } from "../../components/ui/button/PrevQuestionButton";
import { QuestionNavigation } from "../../components/layouts/QuestionNavigation";
import { EndTestWindow } from "../../components/EndTestWindow";
import { useFetch } from "../../hooks/useFetch.js"
import { AuthContext } from "../../context/AuthContext.jsx";


export function TestPage() {
    const [showEndWindow, setEndShowWindow] = useState(false);
    const [currentQuestionId, setCurrentQuestionId] = useState(1);
    const [answers, setAnswers] = useState({});
    const [elapsedTime, setElapsedTime] = useState(0);

    const currentTestId = 2

    const {user} = useContext(AuthContext);

    const {data: question, loading: questionLoading, error} = useFetch(`/api/question/${currentQuestionId}`);
    const {data: testInfo, loading: infoLoading, infoError} = useFetch(`/api/test/info?user_name=${user.username}`)

    const questionCount = testInfo && testInfo.questions_count ? testInfo.questions_count : 0;
    const user_attempts = testInfo && testInfo.user_attempts ? testInfo.user_attempts : 0;

    const isLastQuestion = currentQuestionId === questionCount;

    useEffect(() => {
        if (testInfo?.time_seconds) {
            setElapsedTime(testInfo.time_seconds);
        }
    }, [testInfo]);


    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    const handleShowWindow = () => {
        setEndShowWindow(true)
    }

    const handleHideWindow = () => {
        setEndShowWindow(false)
    }

    const handleNextQuestion = () => {
        setCurrentQuestionId(prev => prev + 1);
    }

    const handlePreviousQuestion = () => {
        setCurrentQuestionId(prev => prev > 1 ? prev - 1 : 1);
    }

    const handleSelectAnswer = (optionIndex) => {
        setAnswers(prev => ({...prev, [currentQuestionId]: optionIndex}));
    }

    const handleSubmitTest = async () => {
        if (infoLoading) {
            return;
        }

        try {
            const answersArray = Object.entries(answers).map(([qId, selected]) => ({
                question_id: Number(qId),
                selected_option: selected
            }))

            const attempts = user_attempts + 1;

            const res = await fetch("/api/test/submit", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    user_name: user.username,
                    test_id: currentTestId,
                    answers: answersArray,
                    attempts: attempts,
                    time_seconds: elapsedTime
                })
            })
            if (!res.ok) {
                throw new Error("Помилка при відправці тесту")
            }

            const data = await res.json();

            setLastResult({
                score: data.score,
                time_seconds: data.time_seconds,
                attempt: data.attempts,
                savedResultId: data.savedResultId,
            });

            return data;
        }

        catch (error) {
            console.error(error);
        }
    }

    
    if (infoLoading) {
        return <p>Завантаження</p>
    }
    
    return (
        <>

            <div className={styles.test_frame}>

                <div className={styles.test_external}>
                    <TestHeader testInfo={testInfo} elapsedTime={elapsedTime} currentQuestion={currentQuestionId} totalQuestion={questionCount}/>
                    <div className={styles.main_container}>
                        <QuestionNavigation totalQuestions={questionCount} currentQuestion={currentQuestionId} onSelectQuestion={setCurrentQuestionId} selectedOption={answers}/>
                        <div className={styles.right_side}>

                            {(questionLoading || infoLoading) && <p>Завантаження</p>}
                            {error && <p>Помилка: {error.message}</p>}
                            {question && <QuestionArea question={question} onSelectAnswer={handleSelectAnswer} selectedOption={answers[currentQuestionId]}/>}
                            <div className={styles.button_container}>
                                {!isLastQuestion && (
                                    <>
                                        <EndAttemptButton onClick={handleShowWindow} />
                                        <PrevQuestionButton onClick={handlePreviousQuestion}/>
                                        <NextQuestionButton onClick={handleNextQuestion}/>

                                    </>
                                )}

                                {isLastQuestion && (
                                    <>
                                        <PrevQuestionButton onClick={handlePreviousQuestion}/>
                                        <EndAttemptButton onClick={handleShowWindow} />

                                    </>
                                )}

                                {showEndWindow && (
                                    <EndTestWindow cancel={handleHideWindow} onSubmit={handleSubmitTest}/>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestPage