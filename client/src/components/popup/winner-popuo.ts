import { ICarData } from '../../inteface/insdex';
import { Component } from '../../utils/component';

import './winner-popup.scss';

export class WinnerPopup extends Component {
  constructor(parentNode: HTMLElement, carData: ICarData) {
    super(parentNode, 'div', ['popup-winner']);

    const title = new Component(this.element, 'h2', ['popup-winnet-title']);
    title.element.style.color = `${carData.color}`;
    title.element.innerHTML = `
        Winner
        <span>${carData.name}</span>
        in
        <span>${carData.speed}</span>
        sec...
        `;
  }
}
