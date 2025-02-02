import BusinessService from "../../models/BusinessService.js";
import UserService from "../user/index.js";

export default class CustomAuth extends BusinessService {
  constructor() {
    super();
    this.userService = new UserService();
  }

  async login(data) {
    const result = await this.userService.login(data);
    if (!result.token) {
      this.helperService.notificationService.setNofitifcation({
        className: "custom-error-accent",
        content: "Erreur lors de la connexion"
      });
    } else {
      this.helperService.notificationService.setNofitifcation({
        content: "Connexion réussie "
      });
    }
  }

  logout() {}
}
