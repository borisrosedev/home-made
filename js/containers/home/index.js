import BaseContainer from "../../models/BaseContainer.js";
import customFigure from "../../components/custom-figure/index.js";

export default class HomeContainer extends BaseContainer {
    constructor(onNavigate){
        super(onNavigate)
        this.onInit()
    }

    onInit(){
        const homeMain = document.getElementById("home-main");
        const data = {
            id: "home-hero-section-image",
            className: "",
            src: "/public/images/hero-section-image.webp",
            alt: "Image de l'intérieur du Loft de HomeMade, on peut voir les cuisiniers en train de travailler"
        }
        const homeHeroSection = document.getElementById('home-hero-section') 
        homeHeroSection.innerHTML += customFigure(data)
    }


}