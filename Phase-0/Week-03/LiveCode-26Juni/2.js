/**
 * DUELIST DATA SUMMARY
 * ======================
 *
 * Terdapat function getDuelistSummary yang menerima parameter berupa object duelist. 
 * Function akan menghasilkan output berupa string yang berisi kesimpulan dari duelist tersebut (lihat contoh). 
 * Huruf W pada property duelData merepresentasikan menang(Win)
 * Huruf D pada property duelData merepresentasikan imbang(Draw)
 * Huruf L pada property duelData merepresentasikan kalah(Lose)
 * Win rate pada string output didapat dari jumlah kemenangan dibagi total duel. 
 * Duelist akan mendapat kategori : 
 *  - `King of Games` jika win rate 100%
 *  - `Prince of Games` jika win rate berada di 90% sampai kurang dari 100%
 *  - `Elite Duelist` jika win rate berada di 70% sampai kurang dari 90%
 *  - `Average Duelist` jika win rate berada dibawah 70% 
 * 
 * contoh:
 * ========
 * 
 * console.log(getDuelistSummary({
 *  firstName: 'Seto',
 *  lastName: 'Kaiba',
 *  duelData: 'WWWWWWWWWW',
 *  deck: 'Return of Blue Eyes'
 * }))
 * 
 * output:
 * `Duelist Seto Kaiba (King of Games), using Return of Blue Eyes deck. Win: 10, Draw: 0, Lose: 0, Total Duel: 10. Winrate: 100%`
 * 
 * console.log(getDuelistSummary({
    firstName: 'Joey',
    lastName: 'Wheeler',
    duelData: '',
    deck: 'Red Eyes Black Dragon'
  }))

  output :
  Duelist Joey Wheeler (Average Duelist), using Red Eyes Black Dragon deck. This duelist never duel until now
 * 
 * notes: 
 * - win rate didapat dari total kemenangan dibagi total duel dikali 100
 * - jika duelist belum memiliki duelData maka string akan terdapat tulisan `This duelist never duel until now`
 * 
 * RULES:
 * -Dilarang menggunakan built-in function kecuali .push()
 */

function getDuelistSummary(duelist) {
  // Please write your code here
let temp = duelist.duelData
let count = 0
let winrate = 0
let result = ''
let win = 0
let draw = 0
let lose = 0
for(let i=0; i<temp.length; i++){
  if(temp[i]==='W'){
    win ++
  } else if(temp[i] == 'L'){
    lose ++
  } else if(temp[i] == 'D'){
    draw ++
  }
}
//HITUNG Winrate
if(win == 0){
  winrate = `This duelist never duel until now`
} else {
winrate = (win / duelist.duelData.length) * 100
}
//Tentukan Rank
let rank = ''
if(winrate == 100){
  rank = `King of Games`
} else if(winrate >= 90 && winrate <= 100){
  rank = `Prince of Games`
} else if(winrate >= 70 && winrate <= 90){
  rank = `Elite Duelist`
} else if(winrate < 70){
  rank = `Average Duelist`
}

result = `${duelist.firstName} ${duelist.lastName} (${rank}), using ${duelist.deck}. Win: ${win}, Draw: ${draw}, Lose: ${lose}, Total duel ${temp.length}. Winrate: ${winrate}%`

return result
}

var duelist3 = {
  firstName: 'Joey',
  lastName: 'Wheeler',
  duelData: '',
  deck: 'Red Eyes Black Dragon'
}

console.log(getDuelistSummary(duelist3))

// output :
// Duelist Joey Wheeler (Average Duelist), using Red Eyes Black Dragon deck. This duelist never duel until now


var duelist1 = {
  firstName: 'Seto',
  lastName: 'Kaiba',
  duelData: 'WWWWWWWWWW',
  deck: 'Return of Blue Eyes'
}
console.log(getDuelistSummary(duelist1))

// output :
// Duelist Seto Kaiba (King of Games), using Return of Blue Eyes deck. Win: 10, Draw: 0, Lose: 0, Total Duel: 10. Winrate: 100%

var duelist2 = {
  firstName: 'Yugi',
  lastName: 'Mutou',
  duelData: 'WWWWWWWL',
  deck: 'Dark Magician'
}
console.log(getDuelistSummary(duelist2))

// output :
// Duelist Yugi Mutou (Elite Duelist), using Dark Magician deck. Win: 7, Draw: 0, Lose: 1, Total Duel: 8. Winrate: 87.5%

var duelist4 = {
  firstName: 'Pururung',
  lastName: 'Aquarius',
  duelData: 'WWWWWWWWWL',
  deck: 'Dark Magician'
}
console.log(getDuelistSummary(duelist4))

// output :
// Duelist Pururung Aquarius (Prince of Games), using Dark Magician deck. Win: 9, Draw: 0, Lose: 1, Total Duel: 10. Winrate: 90%

var duelist5 = {
  firstName: 'Pururung2',
  lastName: 'Citihub',
  duelData: 'WLLLL',
  deck: 'Kuriboh'
}
console.log(getDuelistSummary(duelist5))

// output :
// Duelist Pururung2 Citihub (Average Duelist), using Kuriboh deck. Win: 1, Draw: 0, Lose: 4, Total Duel: 5. Winrate: 20%

var duelist6 = {
  firstName: 'Dora',
  lastName: 'The Explorer',
  duelData: 'LLDDW',
  deck: 'Map Gumush',
}
console.log(getDuelistSummary(duelist6))
// output :
// Duelist Dora The Explorer (Average Duelist), using Map Gumush deck. Win: 1, Draw: 2, Lose: 2, Total Duel: 6. Winrate: 20%