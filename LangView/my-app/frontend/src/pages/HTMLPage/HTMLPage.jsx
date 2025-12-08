import React from "react";
import HTMLLogo from "../../assets/png/HTMLLogo.png"
import "../../styles/global.css";
import NavigationBar from "../../components/layouts/NavigationBar/navigationBar";
import { TitlePage } from "../../components/ui/inscription/TitlePage";
import Panel from "../../components/layouts/Panel/Panel";
import { RhombusUl } from "../../components/ui/ul/RhombusUl/RhombusUl";
import { ExamplePanel } from "../../components/layouts/ExamplePanel";
import { CommentsSection } from "../../components/layouts/CommentsSection/CommentsSection";
import { Footer } from "../../components/layouts/Footer";
import { BoldHr } from "../../components/ui/hr/BoldHr";

export function HTMLPage() {
    return (
        <>
            <title>HTML</title>
            <TitlePage logo={HTMLLogo}>HTML</TitlePage>

            <div className="panel_container">
                <Panel title="Що таке HTML?" className="frame">
                    Що таке HTML? Як створюють сайти?<br />
                    HTML (від англ. HyperText Markup Language — 'мова гіпертекстової розмітки') — стандартизована мова розмітки документів у Всесвітній павутині.
                    Більшість вебсторінок мають зміст розмітки мовою HTML (або XHTML). Мова HTML інтерпретується браузерами; отриманий в результаті інтерпретації форматований текст відображається на екрані монітора комп’ютера або мобільного пристрою.<br />
                    Мова HTML до 5-ї версії визначалась як додаток SGML (стандартної узагальненої мови розмітки за стандартом ISO 8879).
                    Специфікації HTML5 формулюються в термінах DOM (об’єктній моделі документа).<br />
                    Мова XHTML є більш суворим варіантом HTML, вона слідує синтаксису XML і є додатком мови XML в області розмітки гіпертексту.<br />
                    У всесвітній мережі HTML-сторінки, як правило, передаються браузерам від сервера по протоколам HTTP або HTTPS, у вигляді простого тексту або з використанням шифрування.
                </Panel>

                <Panel title="Про HTML" className="frame">
                    Остання стабільна версія HTML — HTML Living Standard, яка постійно оновлюється під керівництвом WHATWG.
                    HTML (HyperText Markup Language) — основна мова розмітки вебсторінок, яка визначає структуру та зміст вебсайтів.<br />
                    Основні можливості HTML:
                    <RhombusUl>
                        <li>Створення структури вебсторінок за допомогою тегів.</li>
                        <li>Підтримка мультимедіа (аудіо, відео, зображень).</li>
                        <li>Формування інтерактивних форм для збору даних.</li>
                        <li>Підключення CSS і JavaScript для стилізації та динаміки.</li>
                        <li>Семантичні теги для покращення доступності та SEO.</li>
                    </RhombusUl>
                </Panel>

                <Panel title="Навіщо використовувати HTML?" className="frame">
                    HTML — це основа будь-якого вебпроєкту, без якої неможлива робота інтернету.<br />
                    Основні причини використовувати HTML:
                    <RhombusUl>
                        <li>Структура вебсторінки: визначає каркас і зміст сайту.</li>
                        <li>Сумісність: HTML підтримується всіма браузерами без додаткових налаштувань.</li>
                        <li>Інтеграція з іншими технологіями: легко поєднується з CSS та JavaScript.</li>
                        <li>Доступність: дозволяє створювати сайти, зручні для користувачів та пошукових систем.</li>
                        <li>Семантика: правильне використання тегів покращує SEO і доступність сайту.</li>
                    </RhombusUl>
                    HTML — це фундамент веброзробки, без якого неможливий жоден сайт.
                </Panel>

                <Panel title="Цікаве про HTML" className="frame">
                    <RhombusUl>
                        <li>Походження: HTML створений Тімом Бернерс-Лі у 1991 році, і саме з нього почався веб.</li>
                        <li>"Жива" мова: HTML постійно оновлюється та розвивається, щоб відповідати потребам сучасного інтернету.</li>
                        <li>{`Семантичні теги: HTML5 ввів теги <header>, <footer>, <article>, <section> для полегшення структурування коду.`}</li>
                    </RhombusUl>
                </Panel>
            </div>

            <ExamplePanel name="HTML" text="Нижче наведено приклад використання HTML для створення структури сторінки">
                {`<!DOCTYPE html>
<html>
<head>
<title>Назва сторінки</title>
</head> 

<body>
<h1>Мій перший заголовок</h1>
<p>Мій перший параграф.</p>
</body>
</html>`}
            </ExamplePanel>

            <div>
                <h2>Пояснення прикладу</h2>
                <RhombusUl>
                    <li>{`Оголошення <!DOCTYPE html> визначає цей документ як HTML5`}</li>
                    <li>{`Елемент <html> є кореневим елементом HTML сторінки`}</li>
                    <li>{`Елемент <head> містить метаінформацію про HTML документ`}</li>
                    <li>{`Елемент <title> визначає назву HTML документу`}</li>
                    <li>{`Елемент <body> відображає видимий зміст HTML сторінки`}</li>
                    <li>{`Елемент <h1> визначає великий заголовок на HTML сторінці`}</li>
                    <li>{`Елемент <p> визначає абзац (параграф) в HTML документі`}</li>
                </RhombusUl>
            </div>        
            
            <div>
                <h2>Що таке HTML-елемент?</h2>
                <p>Елемент HTML визначається початковим тегом, деяким вмістом і кінцевим тегом:</p>
                <p><span className="marker">&lt;tagname&gt;</span> Контент йде тут...<span className="marker">&lt;tagname&gt;</span></p>
                <p>HTML Елемент — це все, від початкового до кінцевого тегу:</p>
                <p><span className="marker">&lt;h1&gt;</span>Мій перший заголовок<span className="marker">&lt;/h1&gt;</span></p>
                <p><span className="marker">&lt;p&gt;</span>Мій перший параграф<span className="marker">&lt;/p&gt;</span></p>
                <p className="note">Примітка: Початковий тег також називається – відкриваючим тегом, а кінцевий тег – закриваючим тегом.</p>
            </div>

            <BoldHr/>

            <CommentsSection page="HTMLPage"/>

        </>
    )
}

export default HTMLPage;