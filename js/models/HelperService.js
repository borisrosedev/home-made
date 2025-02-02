import CustomApiCallerService from "../services/custom-api-caller/index.js";
import CustomNotificationService from "../services/custom-notification/index.js";
import CustomStorageService from "../services/custom-storage/index.js";

export default class HelperService {
  constructor() {
    this.notificationService = new CustomNotificationService();
    this.storageService = new CustomStorageService();
    this.apiCallerService = new CustomApiCallerService();
  }
}
