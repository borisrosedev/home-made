export default ({ className, textContent, id }) => {
  return `
            <p id="${id ? id : ""}" class="custom-paragraph ${className}">${textContent}</p>
        `;
};
