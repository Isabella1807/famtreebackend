import { findAll, findById } from '../models/fruitModel';
import { Request, Response } from 'express';

export const findAllFruit = async (req: Request, res: Response) => {
    /*try {
        const fruits = await findAll;
        res.send(fruits)
    } catch (e) {
        res.sendStatus(404)
    }*/

    findAll.then((fruit) => {
        res.send(fruit);
    }).catch(() => {
        res.sendStatus(404);
    });
}

export const findFruitById = (req: Request, res: Response) =>{
    // get request param
    const fruitId = Number(req.params.fruitid);

    // stop if param is not a number
    if(isNaN(fruitId)){
        res.sendStatus(418)
        return
    }

    // fruitId is a number. Process request

    findById(fruitId).then((fruit) => {
        res.send(fruit);
    }).catch((err) => {
        res.sendStatus(404)
    });
}
