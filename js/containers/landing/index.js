import customFigure from "../../components/custom-figure/index.js";
import BaseContainer from "../../models/BaseContainer.js";
import customButton from "../../components/custom-button/index.js";

export default class LandingContainer extends BaseContainer {
  constructor(onNavigate) {
    super(onNavigate);
    this.onInit();
  }

  // méthode

  onInit() {
    const landingMain = document.getElementById("landing-main");
    const logo = {
      className: "homemade-logo homemade-logo--big show-up ",
      src: "/public/images/logo.webp",
      alt: "Image du logo de HomeMade",
      id: "landing-logo"
    };
    landingMain.innerHTML += customFigure(logo);
    const self = this;
    setTimeout(() => {
      const logo = document.getElementById("landing-logo");
      logo.classList.remove("show-up");
      logo.classList.add("show-down");

      setTimeout(() => {
        landingMain.removeChild(landingMain.lastChild);
        const button = {
          id: "landing-button",
          className: "is-primary animate__animated animate__fadeInDown",
          type: "button",
          content: "Découvrir HomeMade"
        };

        landingMain.innerHTML = customButton(button);

        const landingButton = document.getElementById("landing-button");
        landingButton.onclick = () => {
          self.onNavigate("#home");
        };
      }, 2000);
    }, 2000);
  }
}
