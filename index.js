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
    const list = pets[pet_type].map((pet) => `<li>${pet.name}</li>`);
    res.send(`<h1>List of ${pet_type}</h1><ul>${list.join("")}</ul>`);
  } else {
    res.status(404).send("Pet type not found");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
