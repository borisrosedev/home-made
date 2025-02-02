export default (
  { className, src, alt, id, url, name, title },
  version,
  styleName
) => {
  if (version && version == "v2") {
    return `
            <figure id="${id}" class="slider-figure ${styleName}">
                <img src="${url}" alt="${name ? name : title}" />
            </figure>
        
        `;
  } else {
    return `
        <figure id="${id}" class="${className}">
            <img src="${src}" alt="${alt}" />
        </figure>
    
        `;
  }
};
