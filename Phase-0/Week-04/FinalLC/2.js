/*
==============
GENERATE BOARD
==============

Diberikan sebuah function generateBoard yang menerima 2 parameter:
- players: bertipe array 1 dimensi yang memiliki 2 data:
   * index 0 adalah nama player
   * index 1 adalah posisi player
- panjangLintasan: bertipe number

Function ini akan menghasilkan output berupa array multidimensi players x panjangLintasan

Requirement:
- Jika jumlah player kurang dari 2 atau lebih dari 7 maka tampilkan pesan error `Requirement total players min: 2 and max: 7`
- Jika panjangLintasan kurang dari 5 maka tampilkan pesan error `Requirement length of lane min: 5`
- Jika panjangLintasan bukan merupakan tipe number maka tampilkan pesan error `Invalid parameter`
- Jika value posisi player melebihi panjangLintasan, maka player ditempatkan di index paling terakhir
- Jika value posisi player kurang dari 0, maka player ditempatkan di index paling awal


CONTOH 1:
---------
input:
players = [ ['Ayu', 5], ['Risan', 2], ['Semmi', 6], ['Icha', 0], ['Alun', 2] ]
panjangLintasan = 7

output
[
  [ '', '', '', '', '', 'Ayu', '' ],
  [ '', '', 'Risan', '', '', '', '' ],
  [ '', '', '', '', '', '', 'Semmi' ],
  [ 'Icha', '', '', '', '', '', '' ],
  [ '', '', 'Alun', '', '', '', '' ]
]

CONTOH 2:
---------
players = [ ['Foxie', 44], ['Wolvie', 2], ['Chipmunk', -3 ] ]
panjangLintasan = 5

output:
[
  [ '', '', '', '', 'Foxie' ],
  [ '', '', 'Wolvie', '', '' ],
  [ 'Chipmunk', '', '', '', '' ]
]

Rule:
- Hanya diperbolehkan menggunakan built in function .push()
 
 */

function generateBoard(players, panjangLintasan) {
  //your code here

if(players.length < 2 || players.length > 7){
  return `Requirement total players min: 2 and max: 7`
} else if(panjangLintasan < 5){
  return `Requirement length of lane min: 5`
} else{
  let arr = []
  let temp = []
  
  for(let j=0; j<players.length; j++){
    temp = []
    for(let i=0; i<panjangLintasan; i++){
      if(players[j][1] == i){
        temp.push(players[j][0])          
      } else {
        temp.push('')
      }        
    }
      arr.push(temp)    
  }
  return arr
} 
}

console.log(generateBoard([ ['Foxie', 10] ], 15)); //Requirement total players min: 2 and max: 7

console.log(generateBoard([ ['Foxie', 1], ['Wolvie', 0] ], 3)); //Requirement length of lane min: 5

// console.log(generateBoard([ ['Foxie', 44], ['Wolvie', 2], ['Chipmunk', -3 ] ], 5 ));
//[
//   [ '', '', '', '', 'Foxie' ],
//   [ '', '', 'Wolvie', '', '' ],
//   [ 'Chipmunk', '', '', '', '' ]
// ]

console.log(generateBoard([ ['Ayu', 5], ['Risan', 2], ['Semmi', 6], ['Icha', 0], ['Alun', 2] ], 7));
// [
//   [ '', '', '', '', '', 'Ayu', '' ],
//   [ '', '', 'Risan', '', '', '', '' ],
//   [ '', '', '', '', '', '', 'Semmi' ],
//   [ 'Icha', '', '', '', '', '', '' ],
//   [ '', '', 'Alun', '', '', '', '' ]
// ]
