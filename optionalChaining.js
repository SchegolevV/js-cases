function partition(array, callback = Boolean) {
    let newArray = Array.of([], []);
  
    const filter = {
      [true]: newArray[0],
      [false]: newArray[1],
    };
  
    for (let element of array) {
      if (callback(element) === element) {
        filter[!!element].push(element);
      } else {
        filter[!!callback(element)].push(element);
      }
    }
    return newArray;
  }
  
  let arr = [0, NaN, {}, "", 5, "0"];
  
  console.log(partition(arr, (elem) => elem));