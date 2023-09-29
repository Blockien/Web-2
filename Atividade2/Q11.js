const fs = require('fs');

function getSubdirectories(caminho) {
    return readdirPromise(caminho)
        .then((files) => {
            const promises = files.map((file) => {
                const filePath = `${caminho}/${file}`;
                return fs.promises.stat(filePath)
                    .then((stats) => {
                        if (stats.isDirectory()) {
                            return filePath;
                        }
                    });
            });

            return Promise.all(promises)
                .then((results) => results.filter((result) => result !== undefined));
        });
}
