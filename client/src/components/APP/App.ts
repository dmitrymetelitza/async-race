import { Component } from "../utils/component";
import { Header } from "../header/header";

export class App{
    private main;

    constructor(private rootElement: HTMLAnchorElement){
        const header = new Header(this.rootElement);
        this.main = new Component(this.rootElement, 'main', ['main']);
    }
}