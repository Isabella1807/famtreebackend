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
