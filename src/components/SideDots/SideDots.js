import React from 'react';
import './SideDots.scss';

const SideDots = (props) => {

    const dot1 = (props.dot1
        ? 'current'
        : ' ');
    const dot2 = (props.dot2
        ? 'current'
        : ' ');
    const dot3 = (props.dot3
        ? 'current'
        : ' ');
    const dot4 = (props.dot4
        ? 'current'
        : ' ');

    return (
        <div className="SideDots dotstyle dotstyle-fillup">
            <ul>
                <li className={dot1}>
                    <a href="#start">Start</a>
                </li>
                <li className={dot2}>
                    <a href="#zacznijzabawe">Zacznij zabawe</a>
                </li>
                <li className={dot3}>
                    <a href="#imprezy">Imprezy</a>
                </li>
                <li className={dot4}>
                    <a href="#kontakt">Zgłoś się</a>
                </li>

            </ul>
        </div>
    );
};

export default SideDots;