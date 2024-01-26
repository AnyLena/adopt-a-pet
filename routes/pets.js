import express from 'express';
import { getPets, getPet, getPetList } from "../controllers/petList.js"


const petsRouter = express.Router();


petsRouter.get('/', getPets);
petsRouter.get('/:pet_type', getPetList);
petsRouter.get('/:pet_type/:pet_id', getPet);





export default petsRouter;