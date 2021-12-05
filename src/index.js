import React from "react";
import ReactDOM from "react-dom";
/* eslint-disable import/no-extraneous-dependencies */
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import welcomeSrc from './image/welcome.svg'
import manSrc from './image/man.svg'

import "./styles.scss";

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
        sectionsColor={["purple","orange",  "green", "lightblue"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div id="section1" className="section">
                <div className="container text-light">
                  <h3 className="display-1 fw-bold">Hi, I'm <span className="text-success">Samuele Bertocco </span><span className="wave-emoji">👋</span></h3>
                  <h3>I will code everything</h3>
                  <img id="welcomeSrc" src={welcomeSrc} alt="welcome" />
                </div>
              </div>
              <div className="section">
                <div className="container">
                    <img id="manSrc" src={manSrc} alt="man" />
                      <h3 className="display-2 fw-bold">Who damn am i?</h3>
                      <p className="h3">Sono uno sviluppatore autodidatta che ha focalizzato i propri studi sulle tecnologie che riguardano lo <span className="text-primary">sviluppo web</span> grazie all'esperienza sul campo ho potuto aggiungere molte altre competenze che non riguardano solo l'aspetto grafico.</p>
                      <div className="hstack gap-3 mt-5">
                          <div><button onClick={() => fullpageApi.moveTo(3,0)} className="btn btn-primary btn-lg">Project</button></div>
                          <div><button onClick={() => fullpageApi.moveTo(3,1)} className="btn btn-outline-primary btn-lg">Skills</button></div>
                      </div>  
                  </div>
              </div>
              <div id="section2" className="section">
                <div className="slide">
                  <div className="container">
                        <h3 className="display-2 text-white fw-bold">What can i do for you?</h3>
                        <p className="text-light">Posso aiutarti a trovare un modo per migliorare il tuo processo di lavoro, costruedo un software su misura per le tue esigeze, co l' oiettivo di far risparimiare tempo e guadagare più soldi.</p>
                        
                  </div>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div id="section3" className="section">
                <h3>Section 3</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button> 
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
