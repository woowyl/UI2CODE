const fs = require('fs');

let resultCompos;
try {
    resultCompos = JSON.parse(fs.readFileSync('../feedstock/compo.json', 'utf8')).compos;
} catch (error) {
    console.log(error);
}

module.exports = resultCompos;
