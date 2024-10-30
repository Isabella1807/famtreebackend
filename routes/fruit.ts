import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
    res.send('Here are fruits!')
});

route.post('/', (req, res) => {
    res.send('Fruit should be created here')
});

export = route;
