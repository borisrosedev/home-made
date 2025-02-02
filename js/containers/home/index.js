import BaseContainer from "../../models/BaseContainer.js";
import customFigure from "../../components/custom-figure/index.js";
import customParagraph from "../../components/custom-paragraph/index.js";
import customSection from "../../components/custom-section/index.js";
import customSlider from "../../components/custom-slider/index.js";
import customButton from "../../components/custom-button/index.js";
import ProductService from "../../services/product/index.js";

export default class HomeContainer extends BaseContainer {
  constructor(onNavigate) {
    super(onNavigate);
    this.productService = new ProductService();
    this.onInit();
  }

  async onInit() {
    const homeMain = document.getElementById("home-main");
    const data = {
      id: "home-hero-section-image",
      className: "",
      src: "/public/images/hero-section-image.webp",
      alt: "Image de l'intérieur du Loft de HomeMade, on peut voir les cuisiniers en train de travailler"
    };
    const homeHeroSection = document.getElementById("home-hero-section");
    homeHeroSection.innerHTML += customFigure(data);
    homeHeroSection.innerHTML += customSection({
      content: customParagraph({
        className: "unique-selling-proposition",
        textContent:
          "Venez découvrir des saveurs uniques dans des plats faits maison"
      })
    });

    let prods;
    const storedHomeMadeProducts = localStorage.getItem("homemade-products");
    if (storedHomeMadeProducts) {
      console.log("products are coming from localstorage");
      prods = JSON.parse(storedHomeMadeProducts);
      homeHeroSection.innerHTML += customSlider({ items: prods });
      homeHeroSection.innerHTML += customSection({
        content: customButton({
          id: "home-products-button",
          className: "is-primary self-centered",
          type: "button",
          content: "Voir la liste complète de nos produits"
        })
      });
      return;
    } else {
      const result = await this.productService.getAll();
      if (result.products && result.products.length) {
        localStorage.setItem(
          "homemade-products",
          JSON.stringify(result.products)
        );
        prods = result.products;
        homeHeroSection.innerHTML += customSlider({ items: prods });
        homeHeroSection.innerHTML += customSection({
          content: customButton({
            id: "home-products-button",
            className: "is-primary self-centered",
            type: "button",
            content: "Voir la liste complète de nos produits"
          })
        });
        return;
      }
    }

    homeHeroSection.innerHTML += customSection({
      className: "custom-info-accent",
      content: customParagraph({
        textContent: "Nous sommes en rupture de stock "
      })
    });
  }
}
