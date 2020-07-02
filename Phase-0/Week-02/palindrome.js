//input kata Disini
let kata = 'katak'

//Code Below
let temp = ''
let hasil = true

for(i=kata.length-1; i>=0; i--){
    temp += kata[i]
}  
if (temp == kata){
    hasil = true
} else {
    hasil = false
}
console.log(hasil);

