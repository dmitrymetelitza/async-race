import { Component } from "../../utils/component";
import { OptionsButtons } from "./garage-options";
import { OptionsInputs } from "./options-inputs";
import { ICar, ICreateCar, IUpdateCar} from "../../inteface/insdex";

import './garage-options-style.scss'

export class GarageOptions extends Component {
    startRaceAllCars: () => void = () => {};
    resetAllCars: () => void = () => {};
    generateCars: () => void = () => {};
    createCar: (state: ICreateCar) => void = () => {};
    updateCar: (car: IUpdateCar) => void = () => {};
    updateInputs: OptionsInputs;
    optionsButtons: OptionsButtons;

    constructor(parentNode: HTMLElement) {
      super(parentNode, 'div', ['garage-options']);

      const createInputs = new OptionsInputs(this.element, 'create', [
        'garage-create-inputs',
      ]);
      createInputs.createCar = (state) => this.createCar(state);

      this.updateInputs = new OptionsInputs(this.element, 'update', [
        'garage-update-inputs',
      ]);
      this.updateInputs.createCar = () => {
        this.updateCar(this.updateInputs.state);
      };

      this.optionsButtons = new OptionsButtons(this.element);
      this.optionsButtons.startRaceAllCars = () => this.startRaceAllCars();
      this.optionsButtons.resetAllCars = () => this.resetAllCars();
      this.optionsButtons.generateCars = () => this.generateCars();
    }

    updateState(car: ICar): void {
      this.updateInputs.state = car;
      this.updateInputs.updateInputs();
    }
  }
