const fs = require('fs');

////////////SYNC////////

let rawdata = fs.readFileSync('07.json');
let file = JSON.parse(rawdata);
console.log(file);

////////ASYNC///////////


fs.readFile('07.json', (err, data) => {
    if (err) throw err;
    let file = JSON.parse(data);
    console.log(file);
});

console.log('This is after the read call');