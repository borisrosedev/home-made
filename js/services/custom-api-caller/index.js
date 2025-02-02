export default class CustomApiCallerService {
  constructor(domain = "http://localhost:3000") {
    this.domain = domain;
  }

  async delete(endpoint, token) {
    try {
      const result = await fetch(this.domain + endpoint, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + (token ? token : "")
        }
      });
      const data = await result.json();
      return data;
    } catch (error) {
      return "error";
    }
  }

  async get(endpoint, token) {
    try {
      const result = await fetch(this.domain + endpoint);
      const data = await result.json();
      return data;
    } catch (error) {
      return "error";
    }
  }

  async send(endpoint, body, token, method = "POST") {
    try {
      const result = await fetch(this.domain + endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + (token ? token : "")
        },
        body: JSON.stringify(body)
      });
      const data = await result.json();
      return data;
    } catch (error) {
      return "error";
    }
  }
}
