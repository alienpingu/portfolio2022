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

import seasonSrc from './image/project/season.png'
import e23Src from './image/project/e23.png'
import almadentalSrc from './image/project/almadental.png'
import privnoteSrc from './image/project/privnote.png'
import giftifySrc from './image/project/giftify.png'
import matailSrc from './image/project/matail.png'
import smartcvSrc from './image/project/smartcv.png'
import dotgameSrc from './image/project/dotgame.png'
import zeerconiaSrc from './image/project/zeerconia.png'
import metaGallerySrc from './image/project/meta-gallery.png'
import portfolio23Src from './image/project/portfolio23-beta.png'
import cyberpunkSrc from './image/project/cyberpunk.png'

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
                            <a href="https://seasoncycles.com/"  target="_blank" rel="noreferrer"><img src={seasonSrc} alt="season" /></a>
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
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>E23 Milano</h1>
                            <p>Siluppo di sito vetrina per spazio coworking a milano, moderno veloce ed ottimizzato per i motori di ricerca</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://e23-milano.com/"  target="_blank" rel="noreferrer"><img src={e23Src} alt="e23" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>NextJS</li>
                              <li>JSS</li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>Almadental Lab</h1>
                            <p>Siluppo di sito vetrina per spazio laboratorio odontotecnico, sito tecnologico per comunicare la modernità del laboratorio</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="http://almadentallab.com/"  target="_blank" rel="noreferrer"><img src={almadentalSrc} alt="almadental" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>NextJS</li>
                              <li>JSS</li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>Private-Note</h1>
                            <p>Sviluppo completo di Front End e Backend per webapp, genera una nota, condividila tramite link, appena verrà visualizzato il messaggio si autodistruggerà, grafica in stile NES con colori di un terminale vecchio stile</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://private-note22.herokuapp.com/#/"  target="_blank" rel="noreferrer"><img src={privnoteSrc} alt="privnote" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                              <li>SCSS</li>
                              <li>NES.css</li>
                              <li>NodeJS</li>
                              <li>Postgresql</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>Giftify</h1>
                            <p>Sviluppo completo di Front End e Backend per webapp, abbellisci le tuoi gift card con temi e animazioni accattivanti e genera un link per condividerle, app a tema natalizio</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://giftify.vercel.app/"  target="_blank" rel="noreferrer"><img src={giftifySrc} alt="giftify" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                              <li>SCSS</li>
                              <li>NodeJS</li>
                              <li>Postgresql</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>Matail</h1>
                            <p>Sviluppo completo di Front End, ricerca tramite un intelligente motore di ricerca qualsiasi cocktail e aggiugilo ai preferiti, webapp con prestazioni altamente ottimizzate</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://cocktail-master-react.vercel.app/"  target="_blank" rel="noreferrer"><img src={matailSrc} alt="matail" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                              <li>JSS</li>
                              <li>API: <a href="https://www.thecocktaildb.com/">https://www.thecocktaildb.com/</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>SmartCV</h1>
                            <p>Sviluppo completo di Front End, crea il tuo curriculum vitae semplicemente ed esportalo in PDF, webapp senza backend e senza necessità di connessione a internet</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://alienpingu.github.io/demo/3/"  target="_blank" rel="noreferrer"><img src={smartcvSrc} alt="smartcv" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                              <li>Sass</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>12 dot</h1>
                            <p>Sviluppo di gioco di logica, cerca di mettere in sequeza tutti i numeri per vincere, molto difficile.</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://alienpingu.github.io/demo/5/"  target="_blank" rel="noreferrer"><img src={dotgameSrc} alt="dotgame" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>Zeerconia</h1>
                            <p>Sviluppo frontend e backend per sito vetrina, futuro ecommerce. Nel sito è desktop presente un modello 3D renderizzato con cui si può interagire</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://zeerconia-nodejs.herokuapp.com/"  target="_blank" rel="noreferrer"><img src={zeerconiaSrc} alt="zeerconia" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JS</li>
                              <li>ThreeJS</li>
                              <li>NodeJS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>MetaGallery</h1>
                            <p>Sviluppo di galleria digitale, visuale in prima persona e possibilità di navigare all'interno dello spazio</p>
                            <p>Comandi desktop: WASD + Mouse</p>
                            <p>Comandi mobile: Giroscopio + click sullo schermo per "camminare" dritto</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://brtsml-meta-gallery.vercel.app/"  target="_blank" rel="noreferrer"><img src={metaGallerySrc} alt="meta-gallery" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                              <li>ThreeJS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>Portfolio 2023 [beta]</h1>
                            <p>Sito web personale per l'anno venturo, versione preliminare di uno spazio 3D navigabile</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://threejs-portfolio23.herokuapp.com/"  target="_blank" rel="noreferrer"><img src={portfolio23Src} alt="portfolio23" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                              <li>ThreeJS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <h1>Portfolio 2021 </h1>
                            <p>Sito web personale per in 2021, sito web con stile cyberpunk, stile grafico completamente creato da me per impressionare</p>
                          </div>
                          <div className="col-12 col-md-4">
                            <a href="https://cyberpunk-portfolio.vercel.app/"  target="_blank" rel="noreferrer"><img src={cyberpunkSrc} alt="portfolio23" /></a>
                          </div>
                          <div className="col-12 col-md-6">
                            <h4>Teconlogie utilizzate</h4>
                            <ul>
                              <li>ReactJS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div id="section3" className="section">
                  <div className="container">
                      <h1>Curioso? Scrivimi una email!</h1>
                      <a href="mailto:samuele.bertocco@gmail.com">samuele.bertocco@gmail.com</a>
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
