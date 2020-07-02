//Soal Nomor 1
function antrian(line,string){
    line.push(string)
    return line
    }
console.log(antrian([1,2],'3'));
//Soal Nomor 2    
    function panggilAntrian(line2){
        line2.shift()
        return line2
    }
console.log(panggilAntrian([1,2,3,4]));
//Soal Nomor 3    
function tumpukkan(line3,title){
        line3.unshift(title)
        return line3
    }    
    console.log(tumpukkan([1,2,3,4], '100'));
    
//Soal Nomor 4
function ganjilGenap(plat) {
  // your code here
let temp = ''
let arr = []
let genap = 0
let ganjil = 0
var platGenap = ''
var platGanjil = ''

//Memisahkan Separator Semikolom dan push kedalam array
  if(plat){
    for(i=0; i < plat.length; i++){
        if(plat[i] == ';'){
            arr.push(temp)
            temp = ''
        } else {
            temp += plat[i]
        }
    }
    arr.push(temp)
//Mengecek tiap index arr dan memisah antar ganjil dan genap
    for(j=0; j<arr.length; j++){
        if(arr[j] % 2 == 0){
            genap ++
        } else {
            ganjil ++
        }
    }
//Perkondisian ternary untuk memastikan plat genap & ganjil dan memberikan output
    genap > 0 ? platGenap = `Sebanyak ${genap}` : platGenap = `tidak ditemukan`;
    ganjil > 0 ? platGanjil = `Sebanyak ${ganjil}` : platGanjil = `tidak ditemukan`;
    return `Plat Genap ${platGenap} dan Plat Ganjil ${platGanjil}`
  } else if (plat == ''){
      return `Plat tidak ditemukan`
  }
    else {
      return `invalid data`
  }
}


console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data