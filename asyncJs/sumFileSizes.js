let fileSizes = {
  testFile1: 65,
  testFile2: 48,
  testFile3: 148,
};

function getFileSize(filename, callback) {
  setTimeout(() => {
    callback(fileSizes[filename]);
  }, Math.random() * 1000);
}

function sumFileSizes(list, callback) {
    list.map((filename) => {
        getFileSize(filename, callback)
    }) 
}

let arg1 = "testFile1";
let arg2 = "testFile2";
let arg3 = "testFile3";
let arg4 = (result) => {
  console.log(result); //? [1,2, 4]
};

sumFileSizes([arg1, arg2, arg3], arg4);
