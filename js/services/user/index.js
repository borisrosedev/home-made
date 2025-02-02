import BusinessService from "../../models/BusinessService.js";

export default class UserService extends BusinessService {
  endpoint = "/users";
  constructor() {
    super();
  }

  login(data) {
    return this.helperService.apiCallerService.send(
      this.endpoint + "/login",
      data
    );
  }

  getAll() {
    return this.helperService.apiCallerService.get(this.endpoint);
  }
  getOneById(id) {
    return this.helperService.apiCallerService.get(this.endpoint + `/${id}`);
  }
  removeOneById(id) {
    return this.helperService.apiCallerService.delete(this.endpoint + `/${id}`);
  }
  updateOneById(id, data) {
    return this.helperService.apiCallerService.send(
      this.endpoint + `/${id}`,
      data
    );
  }
}
