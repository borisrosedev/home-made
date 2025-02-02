import customField from "../custom-field/index.js";

export default (fields, form, buttons) => {
  return `
              <form id="${form.id}" class="custom-form">
                ${fields.map((el, index) => customField(el)).join("")}
                ${buttons.map((el, index) => customField(el, true)).join("")}
              </form>
               
        
        `;
};
