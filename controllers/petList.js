const pets = {
  dogs: [
    {
      name: "Spot",
      age: 2,
      breed: "Dalmatian",
      description: "Spot is an energetic puppy who seeks fun and adventure!",
      url: "https://placedog.net/500/280",
      id: 1,
    },
    {
      name: "Shadow",
      age: 4,
      breed: "Border Collie",
      description:
        "Eager and curious, Shadow enjoys company and can always be found tagging along at your heels!",
      url: "https://placedog.net/540/205",
      id: 2,
    },
  ],
  cats: [
    {
      name: "Snowflake",
      age: 1,
      breed: "Tabby",
      description:
        "Snowflake is a playful kitten who loves roaming the house and exploring.",
      url: "http://placekitten.com/500/500",
      id: 3,
    },
  ],
  rabbits: [
    {
      name: "Easter",
      age: 4,
      breed: "Mini Rex",
      description:
        "Easter is a sweet, gentle rabbit who likes spending most of the day sleeping.",
      url: "https://loremflickr.com/320/240/rabbit?lock=7",
      id: 4,
    },
  ],
};

export const getPets = (req, res) => {
  res.send(
    `<h1>Adopt a Pet</h1><p>Browse through the links below to find your new furry friend:</p>
      <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
      </ul>`
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
