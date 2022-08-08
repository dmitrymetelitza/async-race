import { App } from "./components/APP/App";

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.body;
    const app = new App(rootElement);
  
    app.init();
  });