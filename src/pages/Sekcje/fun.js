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
                    <div className="column is-one-third">
                        <div className="content">
                            <span className="image-wrap">
                            <img className="pilusdckiImage" src={pil} alt="non niepodleglosci"/>
                            </span>
                        </div>
                    </div>
                    <div className="column">
                        <div className="fun content">
                            <p>
                                Pragniemy, aby w tę noc, podobnie jak w Sylwestra, gdy zaczynamy świętować Nowy
                                Rok, rozpocząć obchodzenie Święta Niepodległości. Chcemy skorzystać z tego, że
                                możemy trochę mocniej zaimprezować, gdyż 11 listopada jest dniem ustawowo wolnym
                                od pracy.
                            </p>
                            <p>Nasze święto jest totalnie wyluzowane i dalekie od oficjalnej spiny. Chcemy
                                odwoływać się do zupełnie naturalnego poczucia dumy i chęci okazania swojego
                                przywiązania do naszego kraju. <u>Przy czym warto podkreślać, iż można to czynić w
                                sposób radosny, otwarty, wolny od agresji, bazujący na naszych wspaniałych
                                cechach - poczuciu humoru i słowiańskiej skłonności do uciech i zabaw.</u>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="content fungrid">

                            <p className="a padding" >
                                Noc Niepodległości z 10 na 11 listopada ma być ogólnopolską, powszechną imprezą
                                z okazji Święta Niepodległości.
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
                            Jednym z najpopularniejszych i najbardziej naturalnych sposobów świętowania jest
                            zabawa, a jak się bawić to nie indywidualnie tylko, parafrazując słowa piosenki
                            Jeremiego Przybory, wespół w zespół! Dlatego zachęcamy polskie zespoły i
                            wykonawców, żeby w tę noc rozkręcali ogólnopolską imprezę. W klubach,
                            restauracjach, mieszkaniach zorganizujmy imprezy, spotkania, domówki z okazji
                            Nocy Niepodległości. Do akcji wciągamy kina, opery, filharmonie (polski
                            repertuar) muzea i inne ośrodki kulturalne. Wspólnym elementem ubioru
                            uczestników niech będzie biało-czerwony detal; wstążka, kotylion, itp. W trakcie
                            imprez podstawę diety stanowi patriotka – biało-czerwone ciastko i pijemy biało-czerwone napoje.
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