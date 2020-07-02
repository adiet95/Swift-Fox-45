function changeMe(arr) {
  // you can only write your code here!
let obj= {}

for(let i=0; i<arr.length; i++){
    obj = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2]
    }
    if(arr[i][3] > 2020 || !arr[i][3]){
        obj.age = `Invalid Year`
    } else {
        obj.age = 2020 - arr[i][3]
    }
console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}:`+'\n',obj)    
}
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""