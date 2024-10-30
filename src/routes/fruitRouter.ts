import express from 'express';
import { findAllFruit } from '../controllers/fruitController';

const route = express.Router();

route.get('/', findAllFruit);

route.post('/', (req, res) => {
    res.send('Fruit should be created here')
});

export = route;
