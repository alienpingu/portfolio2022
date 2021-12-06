import React from "react";
import ReactDOM from "react-dom";
/* eslint-disable import/no-extraneous-dependencies */
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import ParticlesBg from "particles-bg";

import welcomeSrc from './image/welcome.svg'
import manSrc from './image/man.svg'
import planetSrc from './image/planet.svg'
import catSrc from './image/cat.svg'

import Particles from 'react-particles-js';

import CircleIcons from './Components/CircleIcons'

import "./styles/styles.scss";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div id="section1" className="section">
                <div className="container ">
                  <h3 className="display-1 fw-bold">Hi, I'm <span className="c-primary">Samuele Bertocco </span><span className="wave-emoji">👋</span></h3>
                  <h3>I will code everything</h3>
                  <img id="welcomeSrc" src={welcomeSrc} alt="welcome" />
                  <ParticlesBg  type="circle" bg={true}/>

                </div>

              </div>
              <div id="section2" className="section">
                <div className="container ">
                      <img id="manSrc" src={manSrc} alt="man" />
                      <h3 className="display-2 fw-bold">Who damn am i?</h3>
                      <p className="h3">Sono uno sviluppatore autodidatta che ha focalizzato i propri studi sulle tecnologie che riguardano lo <span className="text-primary">sviluppo web</span> grazie all'esperienza sul campo ho potuto aggiungere molte altre competenze che non riguardano solo l'aspetto grafico.</p>
                  </div>
              </div>
              <div id="section3" className="section">
                  <div className="container">
                      <img id="planetSrc" src={planetSrc} alt="planet" />
                      <h2 className="display-1">I hate this things...</h2>
                      <CircleIcons />
                  </div>

              </div>
              <div id="section4" className="section">
                <div className="container">
                      <img id="catSrc" src={catSrc} alt="cat" />

                    <h3 className="display-3 fw-bold">What can i do<br/> for you?</h3>
                    <p className="h3">Posso aiutarti a trovare un modo per migliorare il tuo processo di lavoro, costruedo un software su misura per le tue esigeze, co l' oiettivo di far risparimiare tempo e guadagare più soldi.</p>
                    <button onClick={() => fullpageApi.moveTo(1, 0)}>
                      Move top
                    </button> 
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default FullpageWrapper;
