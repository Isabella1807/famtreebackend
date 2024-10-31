import { myDB } from '../DB/connection';

export const findAll = new Promise((resolve, reject) => {
    myDB.query("SELECT * FROM fruits", (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});

export const findById = (fruitId: number) => new Promise((resolve, reject) => {
    myDB.query(`SELECT * FROM fruits WHERE fruit_id=${fruitId}`, (err, results) => {
        if (err) {
            reject(err);
        } else {
            if (Array.isArray(results) && results.length > 0) {
                resolve(results[0]);
            } else {
                reject('no fruit found with that id')
            }
        }
    });
});
