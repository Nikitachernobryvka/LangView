import React from "react";
import CSharpLogo from "../../assets/png/CSharpLogo.png"
import "../../styles/global.css";
import NavigationBar from "../../components/layouts/NavigationBar/navigationBar";
import { TitlePage } from "../../components/ui/inscription/TitlePage";
import Panel from "../../components/layouts/Panel/Panel";
import { RhombusUl } from "../../components/ui/ul/RhombusUl/RhombusUl";
import { ExamplePanel } from "../../components/layouts/ExamplePanel";
import { CommentsSection } from "../../components/layouts/CommentsSection/CommentsSection";
import { Footer } from "../../components/layouts/Footer";

export function CSharpPage() {
    return (
        <>
            <title>C#</title>
            <TitlePage logo={CSharpLogo}>C#</TitlePage>
            <div className="panel_container">

                <Panel data-cy="panel" title="Що таке C#?" className="frame">
                    C# (C-Sharp) – це сучасна об’єктно-орієнтована мова програмування, розроблена компанією Microsoft.
                    Вона була створена Андерсом Хейлсбергом та його командою з Microsoft на початку 2000-х як частину .NET Framework.
                    C# походить від сімейства C, і ця мова близька до інших популярних мов, таких як C++ та Java.<br/>
                    C# використовується для:
                    <RhombusUl>
                        <li>Мобільні програми</li>
                        <li>Настільні програми</li>
                        <li>Веб-програми</li>
                        <li>Веб-служби</li>
                        <li>Веб-сайти</li>
                        <li>Ігри</li>
                        <li>VR</li>
                        <li>Програми баз даних</li>
                        <li>І багато, багато іншого!</li>
                    </RhombusUl>
                </Panel>

                <Panel data-cy="panel" title="Про C#" className="frame">
                    Остання версія мови програмування C# (C-Sharp) — C# 11.0.
                    Вона була випущена 8 листопада 2022 року разом із .NET 7.0. <br/>
                    C# 11.0 містить ряд нових функцій і вдосконалень, зокрема:
                    <RhombusUl>
                        <li>Необроблені рядкові літерали</li>
                        <li>Підтримка універсальної математики</li>
                        <li>Ініціалізатори для масивів stackalloc</li>
                        <li>Можливість використовувати фіксовані оператори з будь-яким типом, який підтримує шаблон Span</li>
                        <li>Доступ до полів фіксованої ширини без закріплення</li>
                        <li>Можливість перепризначати локальні посилальні змінні</li>
                    </RhombusUl>
                </Panel>

                <Panel data-cy="panel" title = "Навіщо використовувати C#?" className="frame">
                    <RhombusUl>
                        <li>Це одна з найпопулярніших мов програмування у світі</li>
                        <li>Її легко освоїти та використовувати</li>
                        <li>Вона має величезну підтримку спільноти</li>
                        <li>C# — це об’єктно-орієнтована мова, яка надає чітку структуру програмам і дозволяє повторно використовувати код, знижуючи витрати на розробку.</li>
                        <li>Оскільки C# близька до C, C++ та Java, вона полегшує програмістам перехід на C# або навпаки</li>
                    </RhombusUl>
                </Panel>

                <Panel data-cy="panel" title="Цікаве про С#" className="frame">
                    <RhombusUl>
                        <li>Універсальність та .NET: C# — це сучасна мова, що працює на Windows, Linux і macOS завдяки кросплатформенній платформі NET.</li>
                        <li>Мова Ігор (Unity): Це основна мова програмування для створення 2D та 3D ігор на популярному ігровому рушії Unity.</li>
                        <li>Інтегровані Запити (LINQ): Має потужну вбудовану функцію LINQ, яка дозволяє писати прості SQL-подібні запити для роботи з даними безпосередньо в коді.</li>
                    </RhombusUl>         
                </Panel>
            </div>
            
            <ExamplePanel data-cy="example-panel" name="C#" text= 'Нижче написано код для для виведення повідомлення "Hello World!" за допомогою мови програмування C#.'>
{`using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}`}
            </ExamplePanel>

            <CommentsSection data-cy="comments-section" page="CSharpPage"/>
            
        </>
    )
}

export default CSharpPage;