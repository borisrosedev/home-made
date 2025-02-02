import customEmphasis from "../../components/custom-emphasis/index.js";
import customParagraph from "../../components/custom-paragraph/index.js";

export default class CustomNotification {
  constructor() {}
  setNofitifcation(data, timeout = 5000) {
    const homemadeNotificator = document.getElementById("homemade-notificator");
    homemadeNotificator.innerHTML += customParagraph({
      id: "notification-paragraph",
      className: `custom-notification__paragraph animate__animated animate__slideInUp ${data.className ? data.className : ""}`,
      textContent:
        (data.emphasis ? customEmphasis({ textContent: data.emphasis }) : "") +
        data.content
    });
    this.timeoutId = setTimeout(() => {
      const notificationParagraph = document.getElementById(
        "notification-paragraph"
      );
      notificationParagraph.classList.remove("animate__slideInUp");
      notificationParagraph.classList.add("animate__slideOutDown");
      setTimeout(() => {
        homemadeNotificator.innerHTML = "";
      }, timeout - 4000);
    }, timeout);
  }
}
