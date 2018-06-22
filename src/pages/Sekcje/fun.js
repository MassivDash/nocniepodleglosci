import React from 'react'
import pil from '../../img/NNPilsudski.jpg'
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
                            <p>
                                Zapraszamy do wspólnej zabawy z okazji <span><br></br>Święta Niepodległości !</span>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="content fungrid">

                            <p className="a padding">
                                <u>Noc Niepodległości z 10 na 11 listopada</u>
                                ma być ogólnopolską, powszechną imprezą z okazji Święta Niepodległości.
                            </p>
                            <p className="b padding">
                                Chcemy pokazać, że ludzie pogodni, wyluzowani mogą być najzwyczajniej w świecie
                                dumni z tego, że pochodzą z Kraju nad Wisłą, a imprezowanie może być jedną z
                                narodowych cnót sprzyjających integracji i budowaniu wspólnoty.
                            </p>
                            <p className="c padding">
                                Pragniemy aby Święto Niepodległości kojarzyło się z dumą, aby patriotyzm nabrał
                                nowego znaczenia, a młodzi Polacy chcieli świętować to, że żyją w wolnej,
                                nowoczesnej Ojczyźnie.
                            </p>
                            <p className="d padding">
                                Skłonność do zabaw jest jedną z naszych najfajniejszych cech narodowych, którą
                                warto celebrować, pielęgnować i szukać sposobności dla jej utrwalenia.
                            </p>
                            <p className="e padding">
                                Nasze święto jest totalnie wyluzowane i dalekie od oficjalnej spiny. Chcemy
                                odwoływać się do zupełnie naturalnego poczucia dumy i chęci okazania swojego
                                przywiązania do naszego kraju. Przy czym warto podkreślać, iż można to czynić w
                                sposób radosny, otwarty, wolny od agresji, bazujący na naszych wspaniałych
                                cechach; poczuciu humoru i słowiańskiej skłonności do uciech i zabaw.
                            </p>
                            <p className="f padding">
                                Jesteśmy głęboko przekonani, że Noc Niepodległości stanie się jednym z
                                najważniejszych imprezowych świąt w kalendarzu, dorównującym popularnością
                                Andrzejkom czy Nocy Świętojańskiej. Sylwestra na razie chyba nie przebijemy, ale
                                mamy podobnie jak i on jeden mega atut: następny dzień jest ustawowo wolny od
                                pracy!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Fun