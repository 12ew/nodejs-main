// const useless = require('nodejs-class-package');
// const _ = require('lodash');

// useless();

// const newArr = _.compact([1,0,false, '', 2]);

// console.log(newArr);


const fs = require('fs');

let content = fs.readFile('./read.js', "utf8", (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('after');


//delete functionality
// try {
//     fs.unlinkSync('./tobedeleted.txt');
// } catch (e){
//     console.log(e)
// } finally {
//     console.log('done sync delete');
// }

// fs.unlink("./tobedeleted.txt", err => {
//     if(err){
//     console.log(err);
//     } else {
//     console.log('done sync');
//     }
// })

// console.log('do next step after delete');
