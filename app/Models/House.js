import { generateId } from "../Utils/generateId.js"

export class House {
    constructor({ id, img, footage, rooms, bathrooms, price }) {
        this.id = generateId()
        this.img = img,
        this.footage = footage,
        this.rooms = rooms,
        this.bathrooms = bathrooms,
        this.price = price
    }

    get Template() {
        return `
        <div class="col-4 p-3">
          <div class="bg-white elevation-2">
            <img class="img-fluid" src="${this.img}" alt="">
            <div class="p-2">
              <h4 class="text-center">Square Feet:${this.footage} | Rooms:${this.rooms} | Bathrooms:${this.bathrooms}</h4>
              <p class="text-end text-success m-0">$<b>${this.price}</b></p>
              <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
            </div>
          </div>
        </div>
        `
    }
}









