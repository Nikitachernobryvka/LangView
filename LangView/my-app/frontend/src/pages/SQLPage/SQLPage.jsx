import React from "react";
import SQLLogo from "../../assets/png/SQLLogo.png"
import "../../styles/global.css"
import NavigationBar from "../../components/layouts/NavigationBar/navigationBar";
import { TitlePage } from "../../components/ui/inscription/TitlePage";
import Panel from "../../components/layouts/Panel/Panel";
import { RhombusUl } from "../../components/ui/ul/RhombusUl/RhombusUl";
import { ExamplePanel } from "../../components/layouts/ExamplePanel";
import { CommentsSection } from "../../components/layouts/CommentsSection/CommentsSection";
import { Footer } from "../../components/layouts/Footer";

export function SQLPage() {
    return (
        <>
        <title>SQL</title>
        <TitlePage logo={SQLLogo}>SQL</TitlePage>

        <div className="panel_container">
            <Panel title="Що таке SQL?" className="frame">
                SQL (англ. Structured query language – мова структурованих запитів) – декларативна мова програмування для взаємодії користувача з базами даних, що застосовується для формування запитів, оновлення і керування реляційними базами даних, створення схеми бази даних та її модифікації, системи контролю за доступом до бази даних.<br/>
                Сама по собі SQL не є ані системою керування базами даних, ані окремим програмним продуктом. На відміну від дійсних мов програмування (C або Pascal), SQL може формувати інтерактивні запити або, бувши вбудованою в прикладні програми, виступати як інструкції для керування даними.<br/>
                Окрім цього, стандарт SQL містить функції для визначення зміни, перевірки та захисту даних.
            </Panel>

            <Panel title="Про SQL" className="frame">
                SQL (Structured Query Language) — стандартна мова для роботи з реляційними базами даних. Вона використовується для створення, модифікації та запитів до баз даних.<br/>
                Основні можливості SQL:
                <RhombusUl>
                    <li>Створення і модифікація баз даних та таблиць.</li>
                    <li>Додавання, видалення та оновлення даних.</li>
                    <li>Виконання складних запитів до даних.</li>
                    <li>Управління доступом і безпекою даних.</li>
                    <li>Оптимізація запитів для підвищення продуктивності.</li>
                </RhombusUl>
            </Panel>

            <Panel title="Навіщо використовувати SQL?" className="frame">
                SQL — це потужний інструмент для роботи з даними в будь-якій сфері — від бізнесу до науки.<br/>
                Основні причини використовувати SQL:
                <RhombusUl>
                    <li>Універсальність: SQL підтримується майже всіма СУБД (MySQL, PostgreSQL, Oracle, SQL Server тощо).</li>
                    <li>Простота: має зрозумілий синтаксис для створення запитів.</li>
                    <li>Масштабованість: ефективно працює з великими обсягами даних.</li>
                    <li>Аналітика: дозволяє швидко отримувати потрібну інформацію з баз даних.</li>
                    <li>Автоматизація: SQL-запити можна використовувати у скриптах і програмах.</li>
                </RhombusUl>
                SQL — основа роботи з даними у сучасному IT.
            </Panel>

            <Panel title="Цікаве про SQL" className="frame">
                <RhombusUl>
                    <li>Походження: SQL створено в 1970-х роках компанією IBM і стандартизовано ANSI у 1986 році.</li>
                    <li>Поширеність: SQL — одна з найпопулярніших мов програмування для роботи з даними.</li>
                    <li>Різноманіття СУБД: існує багато систем управління базами даних, які підтримують SQL, кожна з яких має свої розширення.</li>
                </RhombusUl>
            </Panel>
        </div>

        <ExamplePanel name="SQL" text="Нижче наведено приклад SQL-запиту для отримання даних із таблиці Customers">
            SELECT * FROM Customers;
        </ExamplePanel>

        <CommentsSection page="SQLPage"/>

        </>
    )
}

export default SQLPage