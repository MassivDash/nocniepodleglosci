import React from 'react'; 
import Noc from '../../img/Noc.svg'
import Numbers from '../../img/numbers.svg'
import facebook from '../../img/fb.svg'
import './start.sass'


const Start = (props) => {
    
    const style = (
         props.isVisible ? 'hero is-fullheight asfaltbackground visible' : 'hero is-fullheight asfaltbackground start notVisable'
    );
    
   

    return (
    <section className={style} id="start">
    <div className="hero-body">
        <div className="container has-text-centered intro">
            
            <div className="fbicon"><a href="https://facebook.com/nocniepodleglosci/" target="_blanc"><img src={facebook} alt="noc niepodległości"/>/nocniepodleglosci/</a></div>
            <div className="Noc">
                <img className="Noclogo" src={Noc} alt="Noc Niepodległsości"/><img className="NocNum" src={Numbers} alt="Noc Niepodległości"/>
                <div className="NocTitle"><h1>
                    Noc Niepodległości</h1></div>
            </div>
        </div>

    </div>

    <div className="startfun">
    <a href="#zacznijzabawe"><button>Zacznij Zabawę</button></a>
    </div>
</section>
)}

export default Start 

