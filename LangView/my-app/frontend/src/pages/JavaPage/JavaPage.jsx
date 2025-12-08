import React from "react";
import JavaLogo from "../../assets/png/JavaLogo.png"
import "../../styles/global.css";
import NavigationBar from "../../components/layouts/NavigationBar/navigationBar";
import { TitlePage } from "../../components/ui/inscription/TitlePage";
import Panel from "../../components/layouts/Panel/Panel";
import { RhombusUl } from "../../components/ui/ul/RhombusUl/RhombusUl";
import { ExamplePanel } from "../../components/layouts/ExamplePanel";
import { CommentsSection } from "../../components/layouts/CommentsSection/CommentsSection";
import { Footer } from "../../components/layouts/Footer";

export function JavaPage() {
    return (
        <>
        <title>Java</title>
        <TitlePage logo={JavaLogo}>Java</TitlePage>
        <div className="panel_container">
            <Panel title="Що таке Java?" className="frame">
            Java (вимовляється Джава) — об'єктно-орієнтована мова програмування, випущена 1995 року компанією «Sun Microsystems» як основний компонент платформи Java.
            З 2009 року мовою займається компанія «Oracle», яка того року придбала «Sun Microsystems».
            В офіційній реалізації Java-програми компілюються у байт-код, який при виконанні інтерпретується віртуальною машиною для конкретної платформи.
            </Panel>

            <Panel title="Про Java" className="frame">
                Остання стабільна версія мови програмування Java — Java 21, випущена 19 вересня 2023 року.
                Вона є довгостроковою (LTS) версією, що забезпечує стабільність і підтримку на багато років.<br/>
                Основні нововведення Java 21 включають:
                <RhombusUl>
                    <li>Покращену роботу з шаблонами (Pattern Matching) у виразах switch.</li>
                    <li>Розширені записи (Record Patterns) для зручнішої роботи зі структурами даних.</li>
                    <li>Покращену продуктивність завдяки новим механізмам JIT-компіляції.</li>
                    <li>Оновлену систему потоків (Virtual Threads) для спрощення конкурентного програмування.</li>
                    <li>Оптимізовану роботу з пам’яттю та зниження споживання ресурсів.</li>
                </RhombusUl>
            </Panel>

            <Panel title="Навіщо використовувати Java?" className="frame">
                Java — це потужна, стабільна та кросплатформенна мова програмування, яку використовують у різних галузях — від веброзробки до мобільних додатків.<br/>
                Основні причини використовувати Java:
                <RhombusUl>
                    <li>Кросплатформеність: Програми на Java працюють на будь-якій операційній системі завдяки віртуальній машині Java (JVM).</li>
                    <li>Надійність і безпека: Мова має вбудовані механізми захисту пам’яті та перевірки типів, що знижує кількість помилок.</li>
                    <li>Широке застосування: Java використовується у великих корпоративних системах, Android-додатках, фінансових сервісах і навіть наукових проєктах.</li>
                    <li>Активна спільнота: Мільйони розробників у всьому світі постійно вдосконалюють мову та створюють нові бібліотеки.</li>
                    <li>Висока продуктивність: Завдяки JIT-компіляції програми на Java працюють швидко та ефективно.</li>
                </RhombusUl>
                Java залишається однією з найпопулярніших мов програмування, поєднуючи надійність, масштабованість і гнучкість.
            </Panel>

            <Panel title="Цікаве про Java" className="frame">
                <RhombusUl>
                    <li>Походження назви: Мова Java отримала свою назву від сорту кави “Java Coffee”, тому її символом є кавова чашка.</li>
                    <li> Портативність: Гасло Java — “Write once, run anywhere”, що означає: написаний код можна запускати на будь-якій платформі без змін.</li>
                    <li>Android: Java є основною мовою для створення Android-додатків, і більшість мобільних застосунків базуються саме на ній.</li>
                </RhombusUl>
            </Panel>
        </div>

        <ExamplePanel name="Java" text='Нижче написано код для для виведення повідомлення "Hello World!" за допомогою мови програмування Java.'>
{`public class Main { 
       public static void main(String[] args) { 
              System.out.println("Hello World"); 
       }
}`}
        </ExamplePanel>

        <CommentsSection page="JavaPage"/>
        
        </>
    )
}