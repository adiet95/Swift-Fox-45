function groupAnimals(animals) {
  // you can only write your code here!
  let kamus = 'abcdefghijklmnopqrstuvwxyz'
  let arr = []
  
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals.length - 1; j++) {
      if (animals[j] > animals[j + 1]) {
        let temp = animals[j + 1];
        animals[j + 1] = animals[i];
        animals[i] = temp;
      }
    }
  }

  for (let k = 0; k < kamus.length; k++) {
    let tempArr = []
    for (let l = 0; l < animals.length; l++) {
      if (kamus[k] == animals[l][0]) {
        tempArr.push(animals[l]);
      }
    } 
    if (tempArr.length) {
      arr.push(tempArr);
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length - 1; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       let temp2 = arr[j + 1];
  //       arr[j + 1] = arr[i];
  //       arr[i] = temp2;
  //     }
  //   }
  // }

  return arr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]