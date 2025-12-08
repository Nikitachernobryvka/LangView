import React from "react";
import styles from "./MainPage.module.css";
import creative from "../../assets/png/creative.png";
import explore from "../../assets/png/explore.png";
import learning from "../../assets/png/learning.png"
import { AboutProg } from "../../components/AboutProg/AboutProg";
import { Relevance } from "../../components/RelevancePanel";
import { VerticalPanel } from "../../components/VerticalPanel";

export function MainPage() {
    return (
        <>
            <title>MainPage</title>
            <h1 className={styles.title}>Основне про мови програмування</h1>
            <AboutProg />
            <Relevance className={styles.indent} />
            <p className={styles.slogan}>Твори майбутнє з кодом</p>
            <div className={styles.vertical_panels}>
                <VerticalPanel src={creative} title="Втілюй ідеї" text="Програмування дає змогу реалізувати навіть найскладніші ідеї, перетворюючи їх на робочі рішення." />
                <VerticalPanel src={explore} title="Відкривай нові можливості" text="Програмування допомагає знайти нові шляхи вирішення проблем, змінюючи звичні підходи та процеси" />
                <VerticalPanel src={learning} title="Вивчай без меж" text="У світі програмування немає кінця навчання, ти завжди можеш освоїти нові інструменти та технології, щоб рухатися вперед" />
            </div>

        </>
    )
}

export default MainPage;
