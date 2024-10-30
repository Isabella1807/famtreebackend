import { findAll } from '../models/fruitModel';
import { Request, Response } from 'express';

export const findAllFruit = (req: Request, res: Response) => {
    findAll.then((fruit) => {
        res.send(fruit);
    }).catch(() => {
        res.sendStatus(404);
    });
}
