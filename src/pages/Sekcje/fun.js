import React from 'react'
import mfoot from '../../img/mfoot.svg'
import './fun.scss'
import person from '../../img/person-walking.svg'
import group from '../../img/group.svg'
import noc from '../../img/Noc.svg'
import poland from '../../img/poland.svg'
import heart from '../../img/heart.svg'
import balloons from '../../img/balloons.svg'

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
                        <div className="content funsubtitle fun">
                            
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
                        <div className="content fungrid list fun">

                            <div className="a box">
                            <img style={{maxWidth: '140px', marginLeft: '20px' }} src={person} alt="noc niepodelgłsci" />
                                <ol>
                                    <li>
                                        <span></span>
                                        
                                        <p>
                                            <strong>Nasze święto jest totalnie wyluzowane i dalekie od oficjalnej spiny. Chcemy
                                            odwoływać się do zupełnie naturalnego poczucia dumy i chęci okazania swojego
                                            przywiązania do naszego kraju.</strong><br></br><u> Przy czym warto podkreślać, iż można to czynić w
                                            sposób radosny, otwarty, wolny od agresji, bazujący na naszych wspaniałych
                                            cechach; poczuciu humoru i słowiańskiej skłonności do uciech i zabaw.</u>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            
                            <div className="b box">
                                <img className="group" src={group} alt="noc niepodległości" />
                                <ol>
                                    <li>
                                        <span></span>
                                        <p>
                                        <strong>Nasza akcja nastawiona jest na wciągnięcie do wspólnej zabawy możliwie jak największej liczby Polaków i wszystkich, którzy wspólnie z nami chcieliby obchodzić Nasze Święto.</strong>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="c box">
                                <img className="noc_icon" src={noc} alt="noc ciepodległości" />
                                <ol>
                                    <li>
                                        <span></span>
                                        <p><strong>Noc Niepodległości z 10 na 11 listopada ma być ogólnopolską, powszechną imprezą z okazji Święta Niepodległości.</strong>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="d box">
                            <img style={{maxWidth: '140px', marginLeft: '30px' }} src={poland} alt="noc niepodelgłsci" />
                                <ol>
                                    <li>
                                        <span></span>
                                        <p><strong>Chcemy pokazać, że ludzie pogodni, wyluzowani mogą być najzwyczajniej w świecie dumni z tego, że pochodzą z Kraju nad Wisłą</strong>, a imprezowanie może być jedną z narodowych cnót sprzyjających integracji i budowaniu wspólnoty.
                                        </p>
                                    </li>
                                </ol>
                            </div>
                            <div className="e box">
                            <img style={{maxWidth: '140px', marginLeft: '30px' }} src={heart} alt="noc niepodelgłsci" />
                                <ol>
                                    <li>
                                        <span></span>
                                        <p><strong>Pragniemy aby Święto Niepodległości kojarzyło się z dumą, aby patriotyzm nabrał nowego znaczenia</strong>, a młodzi Polacy chcieli świętować to, że żyją w wolnej, nowoczesnej Ojczyźnie</p>
                                    </li>
                                </ol>
                            </div>
                            <div className="f box">
                            <img style={{maxWidth: '140px', marginLeft: '30px' }} src={balloons} alt="noc niepodelgłsci" />
                               
                                <ol>
                                    <li>
                                        <span></span>
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