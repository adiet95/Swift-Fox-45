/**
 * OBJECTIFY
 * ============
 * Sebuah mechine scanning berhasil mengambil value tulisan dari halaman biodata berupa String.
 * namun mechine scanning belum terlalu pintar untuk mengubah output String menjadi type data Object sesuai keinginan client dengan function objectify. 
 * Input (String): 
 *  "Nama:Ayu Sudi;Umur:22;Hobi:Bermain bersama kucing;Motivasi:One step makes a difference. Two steps make it better. More steps make power."
 * 
 * Output (Object) : 
 * {
 *  Nama : "Ayu Sudi",
 *  Umur : "22",
 *  Hobi : "Bermain bersama kuncing", 
 *  Motivasi : "One step makes a difference.  Two steps make it better.  More steps make power."
 * }
 *
 * Rules :  
 * Dilarang menggunakan built-in function selain push
 */
function objectify(string) {
  // your code here

let arr = []
let arrT = []
let temp = ''

for(let i=0; i<string.length; i++){
  if(string[i] == ':'){
    arr.push(temp)
    // arrT.push(arr)
    temp = ''
  } else if(string[i] == ';'){
    arr.push(temp)
    arrT.push(arr)
    arr = []
    temp = ''
  } else if(i == string.length-1){
    arr.push(temp)
    arrT.push(arr)
    // arr = []
  } else {
    temp += string[i]
  }
}

let obj = {}

for(let i=0; i<arrT.length; i++){
  if(arrT[i][1] === ''){
  obj[`${arrT[i][0]}`] = '0' 
  }  
  obj[`${arrT[i][0]}`] = arrT[i][1] 
}  
return obj

}

let scanner0 = "Nama:Mya;Role:Bot;Phase:0"
console.log(objectify(scanner0))
// { Nama: 'Mya', Role: 'Bot', Phase: '0'}

let scanner1 = "Nama:Ayu Sudi;Umur:22;Hobi:Bermain bersama kucing;Motivasi:One step makes a difference. Two steps make it better. More steps make power."
console.log(objectify(scanner1))
/*
{
 Nama: 'Ayu Sudi',
 Umur: '22',
 Hobi: 'Bermain bersama kucing',
 Motivasi: 'One step makes a difference. Two steps make it better. More steps make power.'
}
*/

let scanner2 = "Nama:Mumahammad Yusuf;Nama Panggilan:Yusuf;Perkerjaan:Instruktur;Tinggi:173 cm"
console.log(objectify(scanner2))
  /*
{
  Nama: 'Mumahammad Yusuf',
  'Nama Panggilan': 'Yusuf',
  Perkerjaan: 'Instruktur',
  Tinggi: '173 cm'
}
*/