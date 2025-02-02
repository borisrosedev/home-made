export default ({ hNumber, textContent, className }) => {
  return `
            <h${hNumber ? hNumber : "1"} class="${className ? className : "title"}">${textContent}</h${hNumber ? hNumber : "1"}> 
        `;
};
