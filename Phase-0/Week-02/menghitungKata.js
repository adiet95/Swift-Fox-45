//Input Kalimat disini
// let kalimat = 'I have a dream' //4
let kalimat = 'I believe I can code' //5
// let kalimat = 'I' //1

//Code Below !!

let kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var temp = 1

for(i=0; i < kalimat.length; i++){    
    for(j=0; j < kamus.length; j++){
        if(kalimat[i] == ' ' && kalimat[i+1] == kamus[j]){
            temp += 1
        }
    }     
}
console.log(temp);

