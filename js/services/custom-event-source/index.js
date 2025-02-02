import BusinessService from "../../models/BusinessService.js";

export default class CustomEventSourceService extends BusinessService {
  static instance = null;
  domain = "http://localhost:3000/events";
  eventSource;

  constructor() {
    super();
    if (CustomEventSourceService.instance) {
      return CustomEventSourceService.instance;
    }

    this.eventSource = new EventSource(this.domain);

    this.eventSource.onmessage = (event) => {
      console.log("Message reçu de ZeroMQ:", event.data);
    };

    this.eventSource.onerror = (error) => console.error("Erreur SSE:", error);

    CustomEventSourceService.instance = this;
  }

  static getInstance() {
    if (!CustomEventSourceService.instance) {
      CustomEventSourceService.instance = new CustomEventSourceService();
    }
    return CustomEventSourceService.instance;
  }
}
