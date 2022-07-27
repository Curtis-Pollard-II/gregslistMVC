import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HouseService{

    createHouse(newHouse){
      console.log('creating a house in the service', newHouse);

      // ProxyState.cars.push(new Car(newCar))
      // NOTE the assignment method below breaks down the cars array, tacks one to the end and groups them back together
      // NOTE the = here is what triggers our 'listeners'
      ProxyState.houses = [...ProxyState.houses, new House(newHouse)]
      console.log('current houses',ProxyState.houses);
    }
}

export const housesService = new HouseService()
    // deleteCar(id){
    //   // let carIndex = ProxyState.cars.findIndex(c => c.id == id)
    //   // console.log('deleting', carIndex);
    //   // ProxyState.cars.splice(carIndex, 1)
    //   // console.log('car deleted', ProxyState.cars);
    //   // ProxyState.cars = ProxyState.cars
    //   ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    
  