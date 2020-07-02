/**
 * ===========
 * groupComics
 * ===========
 * 
 * Terdapat function groupComics yang menerima parameter berupa array of object komik dan parameter * kedua berupa field / properti yang ingin di grouping (hanya bisa berupa author atau genre).
 * 
 * function akan mengembalikan output berupa object yang berisi komik yang di grouping seperti contoh pada bawah ini:
 * var comics1 = [
 *  { title: 'Ironman', author: 'Stan Lee', genre: 'sci-fi' },
 *  { title: 'Superman', author: 'Jerry Siegel', genre: 'action' }, 
 *  { title: 'Spiderman', author: 'Stan Lee', genre: 'action' },
 *  { title: 'Constantine', author: 'Stan Lee', genre: 'horror' },
 *  { title: 'Goosebumps', author: 'R. L. Stine', genre: 'horror' }
 * ]
 * 
 * CASE 1
 * console.log(groupComics(comics1, 'title'))
 * 
 * OUTPUT : 
 * Hanya bisa group by genre atau author !
 * 
 * CASE 2
 * console.log(groupComics(comics, 'genre'))
 * 
 * OUTPUT :
 * {
 *   'sci-fi': [ 'Ironman by Stan Lee' ],
 *    action: [ 'Superman by Jerry Siegel', 'Spiderman by Stan Lee' ],
 *    horror: [ 'Constantine by Stan Lee', 'Goosebumps by R. L. Stine' ]
 * }
 * 
 * NOTES: 
 * - built in function yang diperbolehkan hanya .push()
 * - tidak boleh menggunakan for of atau for in
 * - Perhatikan output jika parameter kedua bukan genre atau author !
 */

function groupComics(comics, field) {
  // put your code here
if(field == 'genre' || field == 'author'){
  let obj = {}
  if(field == 'author'){
    for(let i=0; i<comics.length; i++){
      if(obj[comics[i].author] == undefined){
        obj[comics[i].author] = []
      }
        obj[comics[i].author].push(`${comics[i].title} by ${comics[i].author}`)    
    }
  } else if(field == 'genre'){
    for(let i=0; i<comics.length; i++){
      if(obj[comics[i].genre] == undefined){
        obj[comics[i].genre] = []
      }
        obj[comics[i].genre].push(`${comics[i].title} by ${comics[i].author}`)    
    }
  }  
  return obj
} else {
  return `Hanya bisa group by genre atau author !`
}
}

const comics1 = [
  { title: 'Ironman', author: 'Stan Lee', genre: 'sci-fi' },
  { title: 'Superman', author: 'Jerry Siegel', genre: 'action' },
  { title: 'Spiderman', author: 'Stan Lee', genre: 'action' },
  { title: 'Constantine', author: 'Stan Lee', genre: 'horror' },
  { title: 'Goosebumps', author: 'R. L. Stine', genre: 'horror' }
]

console.log(groupComics(comics1, 'title')) // Hanya bisa group by genre atau author !
console.log(groupComics(comics1)) // Hanya bisa group by genre atau author !

console.log(groupComics(comics1, 'genre'))
/*
{
  'sci-fi': [ 'Ironman by Stan Lee' ],
  action: [ 'Superman by Jerry Siegel', 'Spiderman by Stan Lee' ],
  horror: [ 'Constantine by Stan Lee', 'Goosebumps by R. L. Stine' ]
}
*/

console.log(groupComics(comics1, 'author'))
/*
{
  'Stan Lee': [
    'Ironman by Stan Lee',
    'Spiderman by Stan Lee',
    'Constantine by Stan Lee'
  ],
  'Jerry Siegel': [ 'Superman by Jerry Siegel' ],
  'R. L. Stine': [ 'Goosebumps by R. L. Stine' ]
}
*/

const comics2 = [
  { title: 'Kungfu Komang', author: 'In Seo Park', genre: 'comedy' },
  { title: 'Naruto', author: 'Masashi Kishimoto', genre: 'action' },
  { title: 'One Piece', author: 'Eichiro Oda', genre: 'action' }
]

console.log(groupComics(comics2, 'genre'))
/*
{
  comedy: [ 'Kungfu Komang by In Seo Park' ],
  action: [ 'Naruto by Masashi Kishimoto', 'One Piece by Eichiro Oda' ]
}
*/
