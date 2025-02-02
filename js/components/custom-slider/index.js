import customFigure from "../custom-figure/index.js";

export default ({ id, items, className }) => {
  return `
            <section id="${id}" class="custom-slider ${className}">
                ${items.map((el) => customFigure(el, "v2")).join("")}
            </section>
        
        `;
};
