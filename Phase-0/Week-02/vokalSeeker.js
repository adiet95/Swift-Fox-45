function vocalSeeker(board) {
  // Write your code here
let kamus = 'aiueoAIUEO'
let temp = ''

for(i=0; i<board.length; i++){
  for(j=0; j<board[i].length; j++){
    for(k=0; k<kamus.length; k++){
      if(board[i][j] === kamus[k]){
        temp += board[i][j]
      }
    }
  }
}
let panjang = temp.length

return `Vokal ditemukan ${panjang} dan kumpulan vokal adalah ${temp}`
}
//DRIVER CODE

let board = [
  ['*', '*', '*', 10],
  ['*', '*', -5, -10, '*', 100],
  ['a', 'A', 'o', 'b']
]

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo
