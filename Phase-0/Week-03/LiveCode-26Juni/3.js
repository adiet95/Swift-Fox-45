/**
 * ======
 * RUBIQ
 * ======
 * 
 * Disediakan inputan berisi array 2 dimensi dengan elemen berupa number dan string.
 * Tugas kalian adalah menyusun kembali array 2 dimensi dengan ketentuan:
 * 1. Ubahlah posisi element pada array menjadi kebalikan dari posisi awal (lihat contoh)
 * 2. Jika menemukan elemen kelipatan 7 maka ganti elemen dengan '$'
 * Contoh:
 * input
 * [
 *  [1,2,3],
 *  [4,5,6],
 *  [7,'A','B']
 * ]
 * proses
 * [
 *  ['B','A',7],
 *  [6,5,4],
 *  [3,2,1]
 * ]
 * output
 * [
 *  ['B','A','$'],
 *  [4,5,6],
 *  [3,2,1]
 * ]
 * 
 * RULES:
 * -Dilarang menggunakan built-in function kecuali .push()
*/

function rubiq(arr) {
  // your code here
let temp = []
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    temp.push(arr[i][j])
  }
}

//balik kata Palindrome
let palin = []

for(let i=temp.length-1; i>=0; i--){
  if(temp[i] % 7 == 0){
    palin.push('$')
  } else {
    palin.push(temp[i])
  }
}
// console.log(palin);

let count = 0
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    arr[i][j] = palin[count]
    count ++
  }
}
return arr
}

console.log(rubiq([
  ['X', 21],
  ['Y', 'Z']
]))
// [ [ 'Z', 'Y' ], [ '$', 'X' ] ]

console.log(rubiq([
  ['A', 'B', 'C'],
  [4, 5, 6],
  [7, 8, 9]
]))
// [ [ 9, 8, '$' ], [ 6, 5, 4 ], [ 'C', 'B', 'A' ] ]

console.log(rubiq([
  [10, 23, 'B'],
  [49, 'Z', 60],
  ['A', 81, 90],
  [21, 'Y', 77]
]))
  /*
[
  [ '$', 'Y', '$' ],
  [ 90, 81, 'A' ],
  [ 60, 'Z', '$' ],
  [ 'B', 23, 10 ]
]
*/
