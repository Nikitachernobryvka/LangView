import React from "react";
import NavigationBar from "../../components/layouts/NavigationBar/navigationBar";
import JSLogo from "../../assets/png/JavaScriptLogo.png"
import "../../styles/global.css"
import { TitlePage } from "../../components/ui/inscription/TitlePage";
import Panel from "../../components/layouts/Panel/Panel";
import { RhombusUl } from "../../components/ui/ul/RhombusUl/RhombusUl";
import { ExamplePanel } from "../../components/layouts/ExamplePanel";
import { CommentsSection } from "../../components/layouts/CommentsSection/CommentsSection";
import { Footer } from "../../components/layouts/Footer";


export function JavaScriptPage() {
    return (
        <>
            <title>JavaScript</title>
            <TitlePage logo={JSLogo}>JavaScript</TitlePage>
            <div className="panel_container" >
                <Panel title="Що таке JavaScript?" className="frame">
                    JavaScript (JS) — динамічна, об'єктно-орієнтована прототипна мова програмування.
                    Реалізація стандарту ECMAScript.
                    Найчастіше використовується для створення сценаріїв вебсторінок, що надає можливість на боці клієнта (пристрої кінцевого користувача) взаємодіяти з користувачем, керувати браузером, асинхронно обмінюватися даними з сервером, змінювати структуру та зовнішній вигляд вебсторінки.
                </Panel>

                <Panel title="Про JavaScript" className="frame">
                    Остання стабільна версія мови програмування JavaScript — ECMAScript 2024 (ES2024), яка продовжує вдосконалювати синтаксис і продуктивність мови.
                    JavaScript — це основна мова для створення інтерактивних вебсайтів і вебдодатків.<br/>
                    Основні нововведення ECMAScript 2024 включають:
                    <RhombusUl>
                        <li>Розширений синтаксис патернів (Pattern Matching) для більш чистого коду.</li>
                        <li>Нові оператори та функції для роботи з асинхронним кодом.</li>
                        <li>Покращення продуктивності та оптимізації роботи з пам’яттю.</li>
                        <li>Модулі з динамічним імпортом, що спрощує роботу з кодом.</li>
                        <li>Підвищена підтримка WebAssembly для швидших вебдодатків.</li>
                    </RhombusUl>
                </Panel>

                <Panel title="Навіщо використовувати JavaScript?" className="frame">
                    JavaScript — це основна мова веброзробки, що дозволяє створювати інтерактивні, динамічні та кросплатформенні вебдодатки.<br/>
                    Основні причини використовувати JavaScript:
                    <RhombusUl>
                        <li>Вбудований у браузери: JavaScript працює на будь-якому сучасному браузері без додаткових налаштувань.</li>
                        <li>Динамічний та інтерактивний веб: дозволяє створювати інтерфейси з анімаціями, формами та миттєвими оновленнями контенту.</li>
                        <li>Широке застосування: використовується у фронтенд-розробці, бекенді (Node.js), мобільних додатках та навіть іграх.</li>
                        <li>Велика екосистема: мільйони бібліотек і фреймворків (React, Angular, Vue) значно спрощують розробку.</li>
                        <li>Швидкість розвитку: спільнота постійно впроваджує нові стандарти та можливості мови.</li>
                    </RhombusUl>
                </Panel>

                <Panel title="Цікаве про JavaScript" className="frame">
                    <RhombusUl>
                        <li>Походження назви: JavaScript спочатку називався Mocha, потім LiveScript, і лише згодом отримав нинішню назву, щоб підвищити популярність мови.</li>
                        <li>Не тільки браузер: JavaScript працює не лише у браузерах, але й на сервері через Node.js, а також у мобільних та десктопних додатках.</li>
                        <li>Величезна екосистема: існує понад 2 мільйони пакетів у npm — найбільшій бібліотеці пакетів для розробників.</li>
                    </RhombusUl>
                </Panel>
            </div>

            <ExamplePanel name="JavaScript" text={`JavaScript може змінити зміст HTML. Одним із багатьох методів JavaScript HTML є getElementById(), що можна перекласти як "Отримати елемент по Id". В цьому прикладі використовується метод для "пошуку" HTML елемента (з id="demo") та зміни змісту елемента (innerHTML) на "Hello JavaScript":`}>
                document.getElementById("demo").innerHTML = "Hello JavaScript";
            </ExamplePanel>

            <CommentsSection page="JavaScriptPage"/>

        </>
    )
}

export default JavaScriptPage