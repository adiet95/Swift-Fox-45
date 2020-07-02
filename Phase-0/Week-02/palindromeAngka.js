//Input Disini
var angka = 8

//Code Here
var temp;
var tempStr = ''
var tempNum;
var flag = false

while(flag === false){
    if(angka < 9){
        angka ++
        flag = true     
    } else {
        angka ++
        temp = angka.toString()
        for(let i = temp.length-1; i >= 0; i--){
            tempStr += temp[i]
        }
        tempNum = Number(tempStr)
        if(angka === tempNum){
            flag = true;
                        
        } else {
            tempStr = ''
            flag = false;
        }
    }
}
console.log(angka);
