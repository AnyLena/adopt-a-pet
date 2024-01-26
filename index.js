import express from "express";
import { pets } from "./controllers/petList.js";

const app = express();
const port = 8000;

// console.log(pets.dogs)

app.get("/", (req, res) => {
  res.send(
    `<h1>Adopt a Pet</h1><p>Browse through the links below to find your new furry friend:</p>
    <ul>
      <li><a href="/animals/dogs">Dogs</a></li>
      <li><a href="/animals/cats">Cats</a></li>
      <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>`
  );
});

app.get("/animals/:pet_type", (req, res) => {
  let { pet_type } = req.params;

  if (pets[pet_type]) {
    const list = pets[pet_type].map((pet) => `<li><a href="/animals/${pet_type}/${pet.id}">${pet.name}</a></li>`);
    res.send(
        `<h1>List of ${pet_type}</h1>
        <ul>${list.join("")}</ul>`);
  } else {
    res.status(404).send("Pet type not found");
  }
});

app.get("/animals/:pet_type/:pet_id", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
