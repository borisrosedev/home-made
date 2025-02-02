export default ({ className, textContent, ariaLabel }) => {
  return `
        <span aria-label="${ariaLabel}" class="custom-emphasis ${className}">${textContent}</span>
        `;
};
