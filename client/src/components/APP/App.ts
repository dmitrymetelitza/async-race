import { Component } from "../utils/component";
import { Header } from "../header/header";
import { Router } from "../router";

export class App{
    private main;
    private router;

    constructor(private rootElement: HTMLAnchorElement){
        const header = new Header(this.rootElement);
        this.main = new Component(this.rootElement, 'main', ['main']);

        this.router = new Router(this.main.element)
    }
    init(): void { 
        this.router.initRouter()
    }
}