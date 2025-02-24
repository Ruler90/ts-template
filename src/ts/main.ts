import '../styles/main.scss';

const greeting = 'TypeScript + Vite app running!';
const header = document.createElement('h1');
header.textContent = greeting;
const app = document.querySelector('#app');
if (app) {
    app.appendChild(header);
}