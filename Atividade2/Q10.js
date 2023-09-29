const fs = require('fs');

function readdirPromise(caminho) {
    return new Promise((resolve, reject) => {
        fs.readdir(caminho, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}