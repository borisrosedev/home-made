export default (
  { id, inputType, placeholder, iconClassName, textContent, className, type },
  isButton
) => {
  return `${
    isButton
      ? `
              <div class="field">
                    <p class="control">
                        <button type="${type}" id="${id}" class="button ${className ? className : `is-success`}">
                            ${textContent}
                        </button>
                    </p>
                </div>
            
            `
      : `
           <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input id="${id}" class="input" type="${inputType}" placeholder="${placeholder}">
                    <span class="icon is-small is-left">
                        <i class="fas ${iconClassName}"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i id="check-icon" class="fas fa-check"></i>
                    </span>
                </p>
            </div>
        
        `
  }`;
};
