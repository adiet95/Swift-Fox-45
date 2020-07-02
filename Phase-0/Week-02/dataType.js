//Input Disini
let kata = 'Adiet';

//Code Below !!
let temp = typeof(kata)

if(kata == 0 || kata == '' || kata === Number.isNaN(kata)){
    console.log(`Invalid Data`);    
} else {
    if(temp == 'string'){
        console.log(`Username ${kata}`);    
    } else if(temp == 'number'){
        console.log(`age ${kata}`);    
    } else if(kata == true){
        console.log(`thank you for agreeing`);    
    } else if(kata == false){
        console.log(`Cannot proceed without agreement`);
    } else{
        console.log(`Invalid Data`);    
    }
}

console.log(temp);
