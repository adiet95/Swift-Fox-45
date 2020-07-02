function targetTerdekat(arr) {
  // you can only write your code here!
let target = 0
let temp = []

for (i = 0; i < arr.length; i++) {
    if (arr[i] == 'o') {
      for (j = i; j < arr.length; j++) {
        if (arr[j] == 'x') {
          target = j - i;
          temp.push(target);
        }
      }
    }

    for (j = arr.length - 1; j > 0; j--) {
      if (arr[j] == 'o') {
        for (k = j; k >= 0; k--) {
          if (arr[k] == 'x') {
            target = j - k;
            temp.push(target);
          }
        }
      }
    }
}

let result = temp[0];
for (l = 0; l < temp.length; l++) {
    if (temp[l] < result) {
      result = temp[l];
    }
  }
    if (result == undefined) {
    return 0;
  }
return result;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat(['','','','x','x','o','x','x'])); //1 
console.log(targetTerdekat(['','','','x','','o','','x'])); //2 