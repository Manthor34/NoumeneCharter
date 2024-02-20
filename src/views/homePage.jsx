import React from "react";
import "../style/homePage.scss"
import imageAccueil from "../assets/images/vueDrone.jpg"
import imageLagon from "../assets/images/imageLagon.jpg"
import imageFlore from "../assets/images/imageFlore.jpg"
import pont from "../assets/images/pont.jpg"
import famille from "../assets/images/famille.jpg"
import avant from "../assets/images/vueAvant.jpg"
import cockpit from "../assets/images/cockpit2.jpg"
import cabine from "../assets/images/cabineDouble.jpg"
import cabineDuo from "../assets/images/cabineDuo.jpg"
import carte from "../assets/images/carte-polynesie.png"

function HomePage() {

    return(
        <>
        <div className="homeContainer">
            <img src={imageAccueil} className="imageAccueil"/>
            <h1>Voile Polynésienne: L'Aventure "Noumène"</h1>
            <div className="charterContainer">
                <h2 className="titleCharter">Nos croisières</h2>
                <div className="charterContained">
                    <div className="charterContainedText">
                        <h3>Les Iles au vent</h3>
                        <p>Tahiti/Moorea</p>
                        <h3>Les Iles sous le vent</h3>
                        <p>Huahine/Raiatea/Taha/Bora-Bora</p>
                        <h3>Les Tuamotu</h3>
                        <p>Tahiti/Moorea</p>
                        <h3>Les Marquises</h3>
                        <p>Nuku Hiva/Hiva Oa</p>
                    </div>
                    <div className="imgCharterContainer">
                        <img src={carte} />
                    </div>  
                </div>
            </div>
            <img src={imageLagon} className="imageLagon"/>
            <div className="bateauContainer">
                <h2 className="titleBateau">Le bateau</h2>
                <div className="bateauContained">
                    <div className="imgBateauContainer">
                        <img src={pont} />
                        <img src={famille} />
                        <img src={avant} />
                        <img src={cabine} />
                        <img src={cockpit} />
                        <img src={cabineDuo} />
                    </div>  
                    <div className="bateauContainedText">
                        <p>"Noumène" est le catamaran idéal pour explorer les lagons paradisiaques de Polynésie,
                            spacieux, comfortable et sécurisant.18 mètres de long pour 9 mètres de large.
                        </p>
                        <ul>
                            <li>4 grandes cabines doubles</li>
                            <li>4 salles de bains</li>
                            <li>1 canapé convertible</li>
                            <li>2 cabines avant, separées, pour le skipper et l'hôtesse</li>
                            <li>1 zodiac</li>
                            <li>1 paddle</li>
                            <li>2 kayaks</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={imageFlore} className="imageFlore"/>
            <div className="tarifContainer">
                <h2 className="titleBateau">Tarifs</h2>
                <div className="tarifContainedText">
                    <table>
                        <tr>
                            <th>Période</th>
                            <th>Prix</th>
                        </tr>
                        <tr>
                            <th>1 semaine</th>
                            <th>12 000€</th>
                        </tr>
                        <tr>
                            <th>10 jours</th>
                            <th>15 000€</th>
                        </tr>
                        <tr>
                            <th>2 semaines</th>
                            <th>20 000€</th>
                        </tr>
                        <tr>
                            <th>3 semaines</th>
                            <th>28 000€</th>
                        </tr>
                        <tr>
                            <th>1 mois</th>
                            <th>35 000€</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="contactContainer">
                <h2 className="titleBateau">Contact</h2>
                <div className="contactContained">
                    <p>Mail : elohim.carrau@gmail.com <br />
                        Téléphone : +33 6 87 84 75 26
                    </p>
                </div>
            </div>
        </div>
        </>
        
    );

}

export default HomePage;