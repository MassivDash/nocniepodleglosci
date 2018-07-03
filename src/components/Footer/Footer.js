import React from 'react';
import Link from 'gatsby-link';
import logo from '../../img/logosmall.png';
import mail from '../../img/sent-mail.svg';
import fb from '../../img/fb.svg';
import './Footer.sass';

const Footer = () => (
    <footer>
        <div className="asfaltbackground">
            <div className="container">
                <div className="columns">

                    <div className="column">
                        <div className="logofoot">
                            <Link to="/">
                                <figure
                                    className="image is-64x64"
                                    style={{ filter: 'invert(100%)' }}>
                                    <img src={logo} alt="Fundacja Idea Nowa"/>
                                </figure>
                            </Link>

                            <p>NOWA IDEA<br/>
                                ul. Jesionowa 11/7<br/>
                                80-261 Gdańsk
                            </p>

                        </div>
                    </div>
                    <div className="column">
                        <div className="flexbox">

                            <p>
                                <a href="tel:583418894">
                                    <b>tel:</b>
                                    583 418 894
                                </a>
                                <br/>
                                <a href="tel:501761361">
                                    <b>kom:</b>
                                    501 761 361</a><br/>
                                <a href="mailto:fundacja@nowaidea.org.pl">
                                    <b>e-mail:</b>
                                    fundacja@nowaidea.org.pl</a>
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="flexbox">

                            <a href="https://facebook.com/nocniepodleglosci" className="navbar-item">
                                <figure className="image is-24x24">
                                    <img src={fb} alt="Fundacja Nowa Idea"/>
                                </figure>
                            </a>
                            <a href="mailto:fundacja@nowaidea.org.pl" className="navbar-item">
                                <figure className="image is-24x24">
                                    <img src={mail} alt="Fundacja Nowa Idea"/>
                                </figure>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="container">
                        <div className="menu">
                            <Link to="/">
                                Strona Głowna
                            </Link>
                            <a href="/#zacznijzabawe">
                                Zacznij zabawę
                            </a>
                            <a href="/#imprezy">
                                Inicjatwy
                            </a>
                            <a href="/#kontakt">
                                Zgłoś się
                            </a>
                            <Link to="/ofundacji">
                                O fundacji
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <p
                        style={{ TextAlign: 'center', color: 'whitesmoke' }}>
                        <small>Designed by spaceout.pl</small>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;