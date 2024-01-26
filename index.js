import express from "express";
// import { pets } from "./controllers/petList.js";
import petsRouter from "./routes/pets.js";

const app = express();
const port = 8000;

app.use("/animals", petsRouter);

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Adopt-A-Pet</h1><a href="/animals">Find you new furry Friend</a>`)
})

app.post('/', (req, res) => {
    res.send('POST request to the root')
})

app.put('/', (req, res) => {
    res.send('PUT request to the root')
})

app.delete('/', (req, res) => {
    res.send('DELETE request to the root')
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
