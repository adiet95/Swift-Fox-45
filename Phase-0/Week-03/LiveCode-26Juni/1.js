/**
 * ===============
 * HACKFLIX PLAYLIST
 * ===============
 * 
 * [Description]
 * Foxy mempunyai sebuah movie playlist di HACKFLIX nya yang terdiri dari 3 movie
 * yaitu : "Avengers", "Dilan", dan "Fast Furios"
 * 
 * Foxy ingin membuat sebuah function untuk mengetahui film apa yang sering ia putar
 * Setiap kali Foxy mainkan HACKFLIX PLAYLIST nya , hanya ada SATU film yang di paling sering di mainkan oleh Foxy
 * 
 * [Example]
 * 1. ["Avengers", "Avengers", "Dilan", "Fast Furios"] -> film yang paling sering di putar yaitu Avengers
 *     output: "film Avengers diputar sebanyak 2 kali"
 *
 * 2. ["Avengers", "Avengers", "Dilan", "Dilan", "Dilan", "Fast Furios"] -> film yang paling sering di putar yaitu Dilan
 *     output: "film Dilan di putar sebanyak 3 kali"
 *
 * [Restrictions]
 * Jika tidak ada film yang di putar oleh Foxy maka
 * output yang di harapkan adalah : -> "tidak ada film yang di putar"
 *
 * Jika input parameter function bukan sebuah array maka
 * output yang di harapkan adalah -> "ini bukan sebuah playlist"
 *
 * [RULES] !!
 * - WAJIB MEMBUAT PSEUDOCODE
 * - Dilarang menggunakan Regex (.test, .match dan sebagainya)
 * - Dilarang menggunakan .filter .reduce
*/

/**
 * PSEUDOCODE 
 * ===========
 * 
 * 
 */

function hackflixPlaylist(arr) {
  //Write Your Code Here !!!
let film = []
let count = 0
let hasil = ''

for(let i=0; i<arr.length; i++){
  film = []
  for(let j=arr.length; j>0; j--){
    if(arr[i] === arr[j]){
      film.push(arr[i])
    }
  }
}

console.log(film);

if(arr.length == 1){
  count += 1
  film = arr
} else if(arr.length == 0){
  hasil = "ini bukan sebuah playlist"
} else {
  count ++
  hasil = `${film} diputar sebanyak ${count}`
}
// return hasil
}
  
console.log(hackflixPlaylist(["Avengers", "Dilan", "Fast Furious", "Avengers", "Avengers",]));
//output: "film Avengers diputar sebanyak 3 kali"
console.log(hackflixPlaylist(["Fast Furious", "Fast Furious", "Dilan", "Avengers"]));
//output: "film Fast Furious diputar sebanyak 2 kali"
console.log(hackflixPlaylist(["Dilan"]));
//output: "film Dilan diputar sebanyak 1 kali"
console.log(hackflixPlaylist([]));
//output: "tidak ada film yang di dalam playlist"
console.log(hackflixPlaylist(""));
//output: "ini bukan sebuah playlist"
console.log(hackflixPlaylist(50));
//output: "ini bukan sebuah playlist"
