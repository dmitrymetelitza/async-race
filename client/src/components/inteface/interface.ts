interface ICar {
    id: number;
    name: string;
    color: string;
  }
interface ICreateCar {
    name: string;
    color: string;
}
interface IWinner {
    id: number;
    time: number;
    wins: number;
}
interface ICarData {
    id: number;
    name: string;
    color: string;
    time?: number;
    wins: number;
    speed: number;
}