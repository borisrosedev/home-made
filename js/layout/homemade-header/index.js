import customFigure from "../../components/custom-figure/index.js";

export default () => {
  return `
            <header class="homemade-header"> 
                <a href="/">
                    ${customFigure({
                      className: "homemade-header__logo",
                      id: "homemade-header-logo",
                      src: "/public/images/logo.webp",
                      alt: "Image du logo de l'application HomeMade"
                    })}
                </a>
                <nav>
                    <ul>
                        <li tabindex="0" id="header-login-button" role="button">Connexion</li>
                    </ul>
                </na>
            </header>
        `;
};
