export default ({ id, type, className, content }) => {
    return `
        <button id="${id}" class="button ${className}" type="${type}">${content}</button>
    `
}