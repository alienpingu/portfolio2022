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
import webfilesSrc from './image/webfiles.svg'
import appSrc from './image/app.svg'
import computerSrc from './image/computer.svg'
import seoSrc from './image/seo.svg'
import seasonSrc from './image/season.png'


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
                      <div className="row pt-3">
                        <div className="col-2">
                          <button onClick={() => fullpageApi.moveTo(4, 0)}>Servizi</button>
                        </div>
                        <div className="col-2">
                          <button onClick={() => fullpageApi.moveTo(5, 0)}>Project</button>
                        </div>
                      </div> 
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
                    <img id="catSrc" className="d-none d-md-flex" src={catSrc} alt="cat" />

                    <h3 className="display-3 fw-bold">What can i do<br/> for you?</h3>
                    <p className="h3">Posso aiutarti a trovare un modo per migliorare il tuo processo di lavoro, costruedo un software su misura per le tue esigeze, co l' oiettivo di far risparimiare tempo e guadagare più soldi.</p>
                    <div className="row mt-5">
                      <div className="col col-6 col-md-3 services-image">
                        <img src={webfilesSrc} alt="webfiles"/>
                        <h2>Sviluppo Web</h2>
                        <p className="d-none d-md-block">Sviluppare un sito web cucito sulle esigenze del tuo brand, informa i tuoi attuali clienti e acquisiscine di nuovi grazie all'ottimizzazione</p>
                      </div>
                      <div className="col col-6 col-md-3 services-image">
                        <img src={appSrc} alt="app"/>
                        <h2>Sviluppo App</h2>
                        <p className="d-none d-md-block">Grazie alle ultime tecnologie è possibile realizzare applicazioni progressive per: Web, Android e iOS </p>
                      </div>
                      <div className="col col-6 col-md-3 services-image">
                        <img src={computerSrc} alt="computer"/>
                        <h2>CMS ibrido</h2>
                        <p className="d-none d-md-block">Se proprio non si può abbandonare il proprio CMS preferito si può usare come CMS headless (senza testa), un sito rapido e leggero mantenendo le tue comodità</p>
                      </div>
                      <div className="col col-6 col-md-3 services-image">
                        <img src={seoSrc} alt="seo"/>
                        <h2>SEO & SAM</h2>
                        <p className="d-none d-md-block">Ottimizza il tuo nuovo sito per i motori di ricerca, una campagna perfetta per le tue esigenze, ottieni nuovi clienti attivi.</p>
                      </div>
                    </div>
                </div>
              </div>
              <div id="section5" className="section">
                <div className="container">
                    <h3 className="display-3 fw-bold pt-5">My latest works</h3>
                    <div className="slider">
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>SeasonCycles</h1>
                            <p>Sviluppo e progettazione del FrontEnd di webapp per analizzare e confrontare i mercati azionari, presente anche una parte blog, un aggregatore di notizie e un social. </p>
                          </div>
                          <div className="col-12 col-md-4">
                            <img src={seasonSrc} alt="season" />
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                              <li>Sass</li>
                              <li>react-router</li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">2</div>
                      <div className="slide">3</div>
                    </div>
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
