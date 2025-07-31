const db = require("../Configurations/db");
const queries = require("../Helpers/QueryHelper");


exports.findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {

        db.query(queries.getUserByEmail, [email], (err, results) => {
            if(err) return reject(err);
            resolve(results[0]); // to only return the first user who is matched
        });

    });
};