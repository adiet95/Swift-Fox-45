function sittingArrangement(person, column) {

  // Write your code here
let arr = []
let temp = []


if(column == 0){
  return  `Invalid Number`
} else {
   for(let i=0; i<person.length; i += column){
    temp = []
    for(let j=i; j<i + column; j++){
       if(person[j] == undefined){
        temp.push('Kursi Kosong')
       } else {
        temp.push(person[j])
       }        
     }
     arr.push(temp)
   }
   return arr
  }
  
}


//DRIVER CODE

console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]