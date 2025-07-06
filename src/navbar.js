import "./navbar.css"

let nav, home_button;

nav = document.createElement('nav');

home_button = document.createElement('button');
home_button.innerHTML = "Tasks..."

nav.appendChild(home_button)

export { nav }