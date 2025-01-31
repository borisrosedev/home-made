export default ({ className, src, alt, id }) => {

    return `
        <figure id="${id}" class="${className}">
            <img src="${src}" alt="${alt}" />
        </figure>
    
    `
}