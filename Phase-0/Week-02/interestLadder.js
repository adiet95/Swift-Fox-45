$$//Input Disini
let kata = 'Foxie'

//Code Here
let balik = ''
let jumlah = kata.length

for(let a = kata.length-1; a >= 0; a--){
    balik += kata[a]
}

for(let i = 0; i <= balik.length; i++){
    let temp = ''
    for(let j = balik.length-1; j >= i ; j--){
        temp += ' '
    } if(jumlah % 2 == 0){
        if(i % 2 != 0){
            for(let k = 0; k < i; k++){
                temp += balik[k]
            }
        } else {
            for(let l = i-1; l >= 0; l--){
                temp += balik[l]
            }
        }
    } else {
        if(i % 2 == 0){
            for(let k = 0; k < i; k++){
                temp += balik[k]
            }
        } else {
            for(let l = i-1; l >= 0; l--){
                temp += balik[l]
            }
        }
    }        
    console.log(temp); 
}