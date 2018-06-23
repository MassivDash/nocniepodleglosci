import React from 'react'
import mfoot from '../../img/mfoot.svg'
import './fun.scss'


const Fun = (props) => {

    const style = (props.isVisible
        ? 'section asfaltbackground m100vh visible'
        : 'section asfaltbackground m100vh notVisable');

    return (
        <section className={style} id="zacznijzabawe">
            <div className="container">

                <div className="columns">
                    <div className="column">
                        <div className="fun content">
                            <h2>
                                Zapraszamy do wspólnej zabawy z okazji
                                <span>
                                    <br></br>Święta Niepodległości !</span>
                            </h2>

                        </div>
                        <div className="content funsubtitle">
                            <p>
                                Pragniemy aby w tę noc podobnie jak w Sylwestra, gdy zaczynamy świętować Nowy
                                Rok, rozpocząć obchodzenie Święta Niepodległości. Chcemy skorzystać z tego, że
                                możemy trochę mocniej zaimprezować gdyż 11 listopada jest dniem ustawowo wolnym
                                od pracy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="content fungrid list">

                            <div className="a box">
                                <ol>
                                    <li>
                                        <span>1.</span>
                                        <p>
                                            Nasze święto jest totalnie wyluzowane i dalekie od oficjalnej spiny. Chcemy
                                            odwoływać się do zupełnie naturalnego poczucia dumy i chęci okazania swojego
                                            przywiązania do naszego kraju.<br></br><u> Przy czym warto podkreślać, iż można to czynić w
                                            sposób radosny, otwarty, wolny od agresji, bazujący na naszych wspaniałych
                                            cechach; poczuciu humoru i słowiańskiej skłonności do uciech i zabaw.</u>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            
                            <div className="b box">
                                <ol>
                                    <li>
                                        <span>2.</span>
                                        <p>
                                        Nasza akcja nastawiona jest na wciągnięcie do wspólnej zabawy możliwie jak największej liczby Polaków i wszystkich, którzy wspólnie z nami chcieliby obchodzić Nasze Święto.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="c box">
                                <ol>
                                    <li>
                                        <span>3.</span>
                                        <p>Noc Niepodległości z 10 na 11 listopada ma być ogólnopolską, powszechną imprezą z okazji Święta Niepodległości.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="d box">
                                <ol>
                                    <li>
                                        <span>4.</span>
                                        <p>Chcemy pokazać, że ludzie pogodni, wyluzowani mogą być najzwyczajniej w świecie dumni z tego, że pochodzą z Kraju nad Wisłą, a imprezowanie może być jedną z narodowych cnót sprzyjających integracji i budowaniu wspólnoty.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="e box">
                                <ol>
                                    <li>
                                        <span>5.</span>
                                        <p>Pragniemy aby Święto Niepodległości kojarzyło się z dumą, aby patriotyzm nabrał nowego znaczenia, a młodzi Polacy chcieli świętować to, że żyją w wolnej, nowoczesnej Ojczyźnie</p>
                                    </li>
                                </ol>
                            </div>
                            <div className="f box">
                                <ol>
                                    <li>
                                        <span>6.</span>
                                        <p>Skłonność do zabaw jest jedną z naszych najfajniejszych cech narodowych, którą warto celebrować, pielęgnować i szukać sposobności dla jej utrwalenia
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Fun