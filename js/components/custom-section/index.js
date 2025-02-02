export default ({ className, content }) => {
  return `
            <section class="custom-section ${className}">${content}</section>
        `;
};
