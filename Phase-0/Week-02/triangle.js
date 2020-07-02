let num = 3

for(i=1;i <= num; i++){
    let temp = ''
    for(j=1; j <= (2*num) - 1; j++){
        if(j >= num-(i-1) && j <= num+(i-1)){
            if(num % 2 == 0){
                if(i % 2 != 0){
                    j % 2 != 0 ? temp += 'o' : temp += 'x';
                } else {
                    j % 2 == 0 ? temp += 'o' : temp += 'x';
                }
            } else {
                if(i % 2 == 0){
                    j % 2 != 0 ? temp += 'o' : temp += 'x';
                } else {
                    j % 2 == 0 ? temp += 'o' : temp += 'x';
                }
            }                        
        } else {
            temp += ' '            
        }
    }
    console.log(temp);  
}