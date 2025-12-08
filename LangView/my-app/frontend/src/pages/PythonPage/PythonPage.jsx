import React from "react";
import PythonLogo from "../../assets/png/PythonLogo.png"
import "../../styles/global.css";
import NavigationBar from "../../components/layouts/NavigationBar/navigationBar";
import { TitlePage } from "../../components/ui/inscription/TitlePage";
import Panel from "../../components/layouts/Panel/Panel";
import { RhombusUl } from "../../components/ui/ul/RhombusUl/RhombusUl";
import { ExamplePanel } from "../../components/layouts/ExamplePanel";
import { BoldHr } from "../../components/ui/hr/BoldHr";
import { CommentsSection } from "../../components/layouts/CommentsSection/CommentsSection";
import { Footer } from "../../components/layouts/Footer";

export function PythonPage() {
    return (
        <>
            <title>Python</title>
            <TitlePage logo={PythonLogo}>Python</TitlePage>
            <div className="panel_container">
                <Panel title="Що таке Python?" className="frame">
                    Python (найчастіше вживане прочитання — Пайтон (іноді називають Пітон), запозичено назву з британського шоу Монті Пайтон) — інтерпретована об’єктно-орієнтована мова програмування високого рівня зі строгою динамічною типізацією.
                    Розроблена в 1990 році Гвідо ван Россумом. Структури даних високого рівня разом із динамічною семантикою та динамічним зв'язуванням роблять її привабливою для швидкої розробки програм, а також як засіб поєднування наявних компонентів.
                    Python підтримує модулі та пакети модулів, що сприяє модульності та повторному використанню коду. Інтерпретатор Python та стандартні бібліотеки доступні як у скомпільованій, так і у вихідній формі на всіх основних платформах.
                    В мові програмування Python підтримується кілька парадигм програмування, зокрема: об’єктно-орієнтована, процедурна, функціональна та аспектно-орієнтована.
                </Panel>

                <Panel title="Про Python" className="frame">
                    Остання стабільна версія мови програмування Python — Python 3.12, випущена 2 жовтня 2023 року.
                    Вона містить низку нових можливостей та вдосконалень продуктивності.<br />
                    Основні нововведення Python 3.12 включають:
                    <RhombusUl>
                        <li>Покращену продуктивність завдяки оптимізованому інтерпретатору.</li>
                        <li>Нові можливості анотацій типів (Type Hints).</li>
                        <li>Розширені інструменти профілювання та дебагінгу.</li>
                        <li>Більш зручну роботу з винятками завдяки уточненим повідомленням про помилки.</li>
                        <li>Оптимізацію роботи зі словниками та об’єктами.</li>
                    </RhombusUl>
                </Panel>

                <Panel title="Навіщо використовувати Python?" className="frame">
                    Python є однією з найпопулярніших мов програмування завдяки своїй простоті, універсальності та великій спільноті розробників.
                    Вона підходить як для початківців, так і для професіоналів.<br />
                    Основні причини використовувати Python:
                    <RhombusUl>
                        <li>Простий і зрозумілий синтаксис, що прискорює навчання.</li>
                        <li>Велика кількість бібліотек і фреймворків для веброзробки, аналізу даних, машинного навчання та автоматизації.</li>
                        <li>Кросплатформеність — програми можна запускати на Windows, Linux та macOS.</li>
                        <li>Активна спільнота, яка постійно оновлює й розвиває мову.</li>
                        <li>Висока продуктивність розробки завдяки швидкому прототипуванню.</li>
                    </RhombusUl>
                    Python — це мова, яка поєднує потужність і простоту, дозволяючи створювати проєкти будь-якої складності.
                </Panel>
                
                <BoldHr />
                <ExamplePanel name="Python" text='Нижче написано код для для виведення повідомлення "Hello World!" за допомогою мови програмування Python.'>
                    print(“Hello World”)
                </ExamplePanel>

                <CommentsSection page="PythonPage"/>

            </div>
        </>
    )
}

export default PythonPage;