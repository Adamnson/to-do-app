import "./navbar.css"

let nav = document.createElement('nav');

let home_button = document.createElement('button');
home_button.innerHTML = "Tasks..."

nav.appendChild(home_button)
export { nav }