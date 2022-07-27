import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HouseService.js"


function _drawHouses(){
  // GET THE HOUES TEMPLATE
  let housetemplate = ''
  let houses = ProxyState.houses
  houses.forEach(h => housetemplate += h.Template)
  console.log('drawing cars', housetemplate);
  document.getElementById('listings').innerHTML = housetemplate
}


function _drawHouseFrom(){
  let DrawHouseFromTemplate = `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="app.housesController.createHouse()">
      <h3 class="text-primary">List Your House</h3>
      <div class="row">
        <div class="col-4">
          <label class="form-label" for="footage">Square Footage</label>
          <input class="form-control" type="text" minlength="2" id="footage" name="footage">
        </div>
        <div class="col-4">
          <label class="form-label" for="rooms">Rooms</label>
          <input class="form-control" type="text" id="rooms" name="rooms">
        </div>
        <div class="col-4">
          <label class="form-label" for="bathrooms">Bathrooms</label>
          <input class="form-control" type="number" id="bathrooms" name="bathrooms">
        </div>
        <label class="form-label" for="price">Price</label>
        <input class="form-control" type="number" min="1" id="price" name="price">
        <label class="form-label" for="img">Image</label>
        <input class="form-control" type="text" id="img" name="img">
        <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
      </div>
    </form>
  `
let drawHouseFormELM = document.getElementById('form')
drawHouseFormELM.innerHTML = DrawHouseFromTemplate
}




export class HousesController{
  constructor(){
    ProxyState.on('houses', _drawHouses)
    // ProxyState.on('houses', _drawHouses)
    // ProxyState.on('houses', _drawHouses)
  }

  viewHouses(){
    _drawHouses()
    _drawHouseFrom()
    // swap out car form with house form
  }

  createHouse(){
    console.log('house form submitted');
    // NOTE window.event.preventDefault grabs the submit event from the form submit and keeps the page from refreshing
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

   let newHouse ={
    footage: form.footage.value,
    rooms: form.rooms.value,
    bathrooms: form.bathrooms.value,
    price: form.price.value,
    img: form.img.value,

   }
    housesService.createHouse(newHouse)
    form.reset()
  }





}