const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let test = `!@#$%^&*(\\'"<>?:;`



rl.on('close', function () {
    
   console.log(test)
});
