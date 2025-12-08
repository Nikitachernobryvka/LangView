import React from "react";
import CSSLogo from "../../assets/png/CSSLogo.png"
import "../../styles/global.css"
import NavigationBar from "../../components/layouts/NavigationBar/navigationBar";
import { TitlePage } from "../../components/ui/inscription/TitlePage";
import Panel from "../../components/layouts/Panel/Panel";
import { RhombusUl } from "../../components/ui/ul/RhombusUl/RhombusUl";
import { CommentsSection } from "../../components/layouts/CommentsSection/CommentsSection";
import { ExamplePanel } from "../../components/layouts/ExamplePanel";
import { Footer } from "../../components/layouts/Footer";
import { BoldHr } from "../../components/ui/hr/BoldHr";
export function CSSPage() {
    return (
        <>
            <title>CSS</title>
            <TitlePage logo={CSSLogo}>CSS</TitlePage>
            
            <div className="panel_container">
                <Panel title="Що таке CSS?" className="frame">
                    CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — спеціальна мова, яка використовується для опису зовнішнього вигляду сторінок, написаних мовами розмітки даних.<br/>
                    Найбільш часто CSS використовують для візуальної презентації сторінок, написаних на HTML та XHTML, але формат CSS може застосовуватись і до інших видів XML-документів.<br/>
                    Специфікації CSS були створені і розвиваються Консорціумом Всесвітньої павутини – W3C.<br/>
                    CSS має різні рівні та профілі. Наступний рівень CSS створюється на основі попередніх, додаючи нову функціональність або розширюючи функції, що вже існують.
                    Рівні позначаються як CSS1, CSS2 та CSS3. Профілі - сукупність правил CSS одного або більше рівнів, створені для окремих типів пристроїв або інтерфейсів.
                    Наприклад, існують профілі CSS для принтерів, мобільних пристроїв тощо.<br/>
                    CSS (каскадна або блокова верстка) прийшла на заміну табличній верстці вебсторінок. Головна перевага блокової верстки - розділення змісту сторінки (даних) та її візуальної презентації (оформлення).
                </Panel>

                <Panel title="Про CSS" className="frame">
                    Остання стабільна версія CSS — CSS3, яка продовжує розвиватися через модулі. CSS (Cascading Style Sheets) — мова стилів, що відповідає за зовнішній вигляд вебсторінок.<br/>
                    Основні можливості CSS:
                    <RhombusUl>
                        <li>Стилізація елементів HTML (кольори, шрифти, відступи, межі тощо).</li>
                        <li>Розташування елементів за допомогою Flexbox, Grid та позиціонування.</li>
                        <li>Анімації та переходи для створення інтерактивних ефектів.</li>
                        <li>Медіа-запити для адаптивного дизайну.</li>
                        <li>Псевдокласи та псевдоелементи для більш гнучкого стилювання.</li>
                    </RhombusUl>
                </Panel>

                <Panel title="Навіщо використовувати CSS?" className="frame">
                    CSS дозволяє зробити вебсторінки гарними, зручними та адаптивними.<br/>
                    Основні причини використовувати CSS:
                    <RhombusUl>
                        <li>Відокремлення стилю від структури: HTML відповідає за зміст, CSS — за вигляд.</li>
                        <li>Контроль над дизайном: можна змінювати стиль сторінки без зміни HTML.</li>
                        <li>Адаптивність: CSS робить сайти зручними на різних пристроях і екранах.</li>
                        <li>Анімації та ефекти: створення привабливих інтерфейсів.</li>
                        <li>Покращення користувацького досвіду: гарний дизайн підвищує зручність і довіру користувачів.</li>
                    </RhombusUl>
                    CSS — це мова стилю, яка робить інтернет красивим і зручним.
                </Panel>

                <Panel title="Цікаве про CSS" className="frame">
                    <RhombusUl>
                        <li>Походження: CSS був створений у 1996 році групою W3C для розділення змісту й стилю вебсторінок.</li>
                        <li>Модульна структура: CSS3 розділений на окремі модулі, що дозволяє поступово впроваджувати нові можливості.</li>
                        <li>Flexbox та Grid: сучасні системи розмітки CSS значно спростили створення складних макетів.</li>
                    </RhombusUl>
                </Panel>
            </div>

            <ExamplePanel name="CSS" text="Набір правил CSS складається із селектора та блоку об’яви (декларації). Блок об’яв містить одну або кілька об’яв, розділених крапкою з комою. Кожна об’ява включає назву CSS-властивості та значення, розділені двокрапкою. Об’ява CSS завжди закінчюється крапкою з комою, а блоки об’яв беруться у фігурні дужки.">
                {`p {
       color: red;
       text-align: center; 
}`}
            </ExamplePanel>
            
            <div>
                <h2>Пояснення прикладу</h2>
                <RhombusUl>
                    <li><span className="marker">p</span> – це селектор у CSS (він вказує на елемент HTML, який потрібно стилізувати: &lt;p&gt;)</li>
                    <li><span className="marker">color</span> – це властивість, а red (червоний колір) – це значення властивості</li>
                    <li><span className="marker">text-align</span> – це властивість, а center (по центру) – це значення властивості</li>
                </RhombusUl>
            </div>

            <BoldHr/>

            <CommentsSection page="CSSPage"/>

        </>
    )
}

export default CSSPage;