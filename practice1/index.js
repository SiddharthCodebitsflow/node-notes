// =======  We can require funtion from other file by two way one is as a object and second is as a destructreing  ===========

// const sum=require('./math');
// console.log(sum.sum(1,2));

//  ************** Second method *******************

// const {sum}=require('./math');
// console.log(sum(1,2));

// -------------------------------------------------------------------------------------------------


//========== we can not use import method in node js due to node js use old javascript;

// import sum from "./math";


//========== Filter use for filter the data of array base on the condition and it return also array;

// const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 10];

// let result = arr.filter((item) => {
//     return item == 7;
// });
// console.log(result);


// ---------------------------------------------------------------------------------

//  ================== core modules ===========================

// const fs=require('fs');
// fs.writeFileSync('simple.text','simple.txt');

// we can directly import one single function. 

// const fs=require('fs').writeFileSync;
// fs('one.text','This is imple text file');


//------------------------------------------------------------------


//=============== Basic api (Created server by node js) ===================

// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify({ name: "siddharth" }));
//     res.end();
// }).listen(5000);


//---------------------------------------


//==================== Input from command line  =============


// Task :If we write in the command line "node index.js implementing 'Hello how are you This is testing file for learning purpose'" Then create one text file by simpleTesting.txt and show text in the file Hello how are you this is testing file for learning purpose 

// const fs = require('fs');

// const argumentData = process.argv;

// switch (argumentData[2]) {
//     case 'add':
//         fs.writeFileSync(argumentData[3], argumentData[4]);
//         break;
//     case 'remove':
//         fs.unlinkSync(argumentData[3]);
//         break;
//     default:
//         console.log("invalid agruments");
// }


//-----------------------------------


// ============ Showing files using file systems =============

// const path = require('path');
// const fs = require('fs');
// const filePath = path.join(__dirname, 'file');
// console.log(filePath);
// fs.writeFileSync(filePath + "/simple.txt", "Hello how are you");
// fs.writeFileSync(filePath + "/simple0.txt", "Hello how are you");

// let fileData = fs.readFileSync(filePath + '/simple.txt', 'utf8');
// console.log(fileData);

// let fileDir = fs.readdir(filePath, (err, files) => {
//     console.log(files);
//     files.forEach((item)=>{
// console.log(item);
//     })
// })

// console.log(filePath);

//------------------------------------------------------------------


//================ Testing callback ============


console.log("start execution");  // First execute

setTimeout(() => {
    console.log("time 2 sec"); // four execute
}, 2000);
setTimeout(() => {
    console.log("time 0 sec"); // third execute
}, 0);

console.log("finish execution"); // second execute