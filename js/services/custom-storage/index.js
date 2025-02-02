export default class CustomStorage {
  constructor() {}
  getSpecificItem(key) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return null;
    }
  }

  setSpecificItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return "done";
  }

  updateSpecificItem(key, { propName, newValue }) {
    const existingItem = this.getSpecificItem("key");
    if (existingItem) {
      existingItem[propName] = newValue;
      this.setSpecificItem(key, existingItem);
    }
  }

  removeSpecificItem(key) {
    localStorage.removeItem(key);
    return "done";
  }
}
