import { Component } from "../components/utils/component";

export class Header extends Component {

    private navItems: Component[] = [];
    private linkToGarage: Component;
    private linkToWinners: Component;

    constructor(perentNode: HTMLElement){
        super(perentNode, 'div', ['header']);

        this.linkToGarage = new Component(
            this.element,
            'a',
            ['nav_item'],
            'Garage',
        );
        const img = document.createElement('img');
        img.classList.add('header-logo');
        img.src='../assets/logo.svg';

        this.element.append(img);
        this.linkToWinners = new Component(
            this.element,
            'a',
            ['nav_item'],
            'Winners',
        );

        this.linkToGarage.element.setAttribute('href', '#/');
        this.linkToWinners.element.setAttribute('href', '#/winners');

        this.navItems = [this.linkToGarage, this.linkToWinners];

        window.addEventListener('hashchange', () =>
        this.updateActive(this.navItems),
        );
        window.addEventListener('load', () => this.updateActive(this.navItems));
    }

        private updateActive(navItems: Component[]):void{
            this.navItems = navItems.map((item) => {
                item.element.classList.remove('nav__item--active');
                if (item.element.getAttribute('href') === window.location.hash){
                    item.element.classList.add('nav__item--active');
                }
                return item;
            });
        }
}