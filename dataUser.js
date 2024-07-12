import { readFile } from 'node:fs';

export const dataUser = (callback) => {
    readFile('pessoas.json', 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            try {
                const pessoas = JSON.parse(data);
                callback(null, pessoas);
            } catch (error) {
                callback(error);
            }
        }
    });
};

export default dataUser;
