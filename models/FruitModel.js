import mysqlDB from "../config/database.js";

export const getFruits = (result) => {
    mysqlDB.query("SELECT * FROM fruits", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};