const fs = require("fs");
const path = require('path');


function getChildrenFrom(src) {

    let array = [];

    fs.readdir(src, (err, files) => {
    
        if (err) {
            console.log('ошибочка')
        }
    
        files.forEach((file) => array.push(`${file}`))
    })

    return array //?
}

let gamePath = path.join(__dirname, 'games')
let pagePath = path.join(__dirname, 'pages')


getChildrenFrom(gamePath)
getChildrenFrom(pagePath)


// let gameFolders = getChildrenFrom(gamePath)
// let pageFolders = getChildrenFrom(pagePath)
// let error = getChildrenFrom('')

// console.log(gameFolders) // [a, b]
// console.log(pageFolders) // [p1, p2]
// console.log(error) // []
