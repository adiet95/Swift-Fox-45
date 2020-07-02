var kata = 'oxooxox'
let tempX = 0
let tempO = 0

for(i=0; i<kata.length; i++){
    if(kata[i] == 'x'){
        tempX += 1
    } else{
        tempO += 1
    }
}
if(tempX == tempO){
    console.log(true);    
} else {
    console.log(false);    
}
