import { pets } from "../petList.js";
  
  export const getPets = (req, res) => {

    let animals = Object.keys(pets);

    let list = animals.map( animal => (
        `<li><a href="animals/${animal}">${animal}</a></li>`
    ))

    res.send(
      `<h1>Adopt a Pet</h1><p>Browse through the links below to find your new furry friend:</p>
      <ul>${list.join("")}</ul>`
    );
  };
  
  export const getPetList = (req, res) => {
    let { pet_type } = req.params;
  
    if (pets[pet_type]) {
      const list = pets[pet_type].map(
        (pet) =>
          `<li><a href="/animals/${pet_type}/${pet.id}">${pet.name}</a></li>`
      );
      res.send(
        `<h1>List of ${pet_type}</h1>
          <ul>${list.join("")}</ul>`
      );
    } else {
      res.status(404).send("Pet type not found");
    }
  };
  
  export const getPet = (req, res) => {
    let { pet_type } = req.params;
    let { pet_id } = req.params;
  
    if (pets[pet_type]) {
      const pet = pets[pet_type].find((pet) => pet.id == pet_id);
  
      res.send(
        `<h1>${pet.name}</h1>
          <img src=${pet.url}/>
          <p>${pet.description}</p>
          <ul> 
            <li>Breed: ${pet.breed}</li>
            <li>Age: ${pet.age}</li>
          </ul>  
          `
      );
    } else {
      res.status(404).send("Pet type not found");
    }
  };
  