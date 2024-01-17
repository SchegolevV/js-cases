const fs = require("fs");
const path = require('path');


function getChildrenFrom(src) {

    return promise = new Promise(function(resovle) {
        fs.readdir(src, (err, files) => {
            let arr = [];
            let count = 0;
            files.forEach((file) => {
                count++
                arr.push(file)
                if (count === files.length) {
                    resovle(arr)
                }
            })
        })
    })
}

let gamePath = path.join(__dirname, 'games')
let pagePath = path.join(__dirname, 'pages')

let newArr = [];
getChildrenFrom(gamePath).then((arr) => {
    arr
})


// let gameFolders = getChildrenFrom(gamePath)
// let pageFolders = getChildrenFrom(pagePath)
// let error = getChildrenFrom('')

// console.log(gameFolders) // [a, b]
// console.log(pageFolders) // [p1, p2]
// console.log(error) // []
