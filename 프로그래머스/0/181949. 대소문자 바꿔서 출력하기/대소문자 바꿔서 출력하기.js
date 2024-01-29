const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let arr = []

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

   for (i=0; i<str.length; i++) {
       if(str[i].toUpperCase() === str[i]) {
             arr +=  str[i].toLowerCase();
       }
       else {
            arr  += str[i].toUpperCase();
       }                    
   }
        console.log(arr)
});  