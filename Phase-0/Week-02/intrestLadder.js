function ladder(word) {
    //your code here
let temp = []
let temp2 = []

for(i=word.length-1; i >= 0; i--){
    temp = []
    for(j=0; j <= i; j++){
        temp.push(word[j])
    }
    temp2.push(temp)    
  }
return temp2
}
  
  // DRIVER CODE
  console.log(ladder('hacktiv8'));
  /*
  [
    [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
    [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
    [ 'h', 'a', 'c', 'k', 't', 'i' ],
    [ 'h', 'a', 'c', 'k', 't' ],
    [ 'h', 'a', 'c', 'k' ],
    [ 'h', 'a', 'c' ],
    [ 'h', 'a' ],
    [ 'h' ]
  ]
  */