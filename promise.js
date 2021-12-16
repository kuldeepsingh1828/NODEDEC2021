// 3 states
//1 declare       --- pending
// result postive --  resolved
// result negative -- rejected

const { resolve } = require("path/posix");

var promise = new Promise((resolve, reject) => {
    const person = { "name": "Kuldeep singh", "age": 26 }
    setTimeout(() => {
        resolve(person);
    }, 1000)
}).then((result) => {
    console.log(["resolved: ", result])
    return result;
}).catch((catched) => {
    console.log(['FROM CATCH : ', catched])
}).then((result) => {
    console.log(["resolved: ", result])
}).catch((catched) => {
    console.log(['FROM CATCH : ', catched])
})
console.log(promise);
console.log('end of the code 1');
