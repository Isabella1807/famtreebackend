import express from 'express';
import { findAllFruit, findFruitById } from '../controllers/fruitController';

const route = express.Router();

route.get('/', findAllFruit);

route.get('/:fruitid', findFruitById)

/*route.post('/', (req, res) => {
    res.send('Fruit should be created here')
});*/

export = route;
