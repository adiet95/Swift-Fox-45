//Input Disini
let num = 4

//Code Here
if(num < 4 || num > 10){
    console.log(`Invalid Number`);    
} else {
for(i=1; i <= num; i++){
    let temp = ''
    for(j=1; j <= num; j++){
        if(i == 1 || i == num){
            temp += '#'
        } else {
            if(num % 2 == 0){
                if(j == num/2 || j == (num/2) + 1 ){
                    temp += '|'
                } else {
                    temp += ' '
                }
            } else {
                if(j == (num/2) + 0.5){
                    temp += '|'
                } else {
                    temp += ' '
                }
            }
        }
    }
    console.log(temp);    
}
}