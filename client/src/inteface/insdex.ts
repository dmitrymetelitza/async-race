export interface ICar {
  id: number;
  name: string;
  color: string;
}

export interface ICreateCar {
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  time: number;
  wins: number;
}

export interface ICarData {
  id: number;
  name: string;
  color: string;
  time?: number;
  wins: number;
  speed: number;
}

export interface ICarDriveMode {
  success: boolean;
}

export interface IUpdateCar {
  id?: number;
  color: string;
  name: string;
}

export interface IRoute {
  name: string;
  component: () => void;
}

export interface ICarEngine {
  velocity: number;
  distance: number;
}

export interface IWinnerCar extends ICar, IWinner {}
