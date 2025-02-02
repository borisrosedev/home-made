import customEmphasis from "../../components/custom-emphasis/index.js";
import BusinessService from "../../models/BusinessService.js";
import ProductService from "../product/index.js";

export default class CustomWebsocketService extends BusinessService {
  static instance = null;
  domain = "ws://localhost:8081";
  ws;

  constructor() {
    super();
    if (CustomWebsocketService.instance) {
      return CustomWebsocketService.instance;
    }

    this.productService = new ProductService();

    this.ws = new WebSocket(this.domain);

    this.ws.onmessage = (event) => {
      console.log("Message reçu de ZeroMQ:", event.data);
      if (event.data === "Nouveau produit disponible") {
        this.helperService.notificationService.setNofitifcation({
          emphasis: " +1 ",
          content: event.data
        });
        this.productService.getAll().then((result) => {
          this.helperService.storageService.setSpecificItem(
            "homemade-products",
            result.products
          );
        });
      }
    };

    this.ws.onopen = () => console.log("Connecté au serveur WebSocket");
    this.ws.onerror = (error) => console.error("Erreur WebSocket:", error);
    this.ws.onclose = () => console.log("WebSocket fermé");

    CustomWebsocketService.instance = this;
  }

  static getInstance() {
    if (!CustomWebsocketService.instance) {
      CustomWebsocketService.instance = new CustomWebsocketService();
    }
    return CustomWebsocketService.instance;
  }
}
