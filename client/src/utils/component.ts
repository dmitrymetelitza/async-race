export class Component {
    element: HTMLElement;

    constructor(
        perentNode: HTMLElement,
        tagName: keyof HTMLElementTagNameMap = 'div',
        styles: string[] = [],
        content = '',
    ){
        this.element = document.createElement(tagName);
        this.element.classList.add(...styles);
        this.element.textContent = content;

        if(perentNode){
            perentNode.append(this.element);
        }
    }
    
    destroy(): void{
        this.element.remove();
    }
}
