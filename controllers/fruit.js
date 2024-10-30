import {getFruits} from "../models/FruitModel.js";

export const showFruits = (req, res) => {
    getFruits((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};