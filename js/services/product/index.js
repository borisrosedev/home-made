import BusinessService from "../../models/BusinessService.js";

export default class ProductService extends BusinessService {
  endpoint = "/products";
  constructor() {
    super();
  }
  async getAll() {
    return await this.helperService.apiCallerService.get(this.endpoint);
  }
  async getOneById(id) {
    return await this.helperService.apiCallerService.get(
      this.endpoint + `/${id}`
    );
  }
  async removeOneById(id) {
    return await this.helperService.apiCallerService.delete(
      this.endpoint + `/${id}`
    );
  }
  async updateOneById(id) {
    return await this.helperService.apiCallerService.send(
      this.endpoint + `/${id}`
    );
  }
}
