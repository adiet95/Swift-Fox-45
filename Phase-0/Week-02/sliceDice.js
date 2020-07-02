function slice(data, start, end) {
  // Write your code here
let temp = []

if(!start && !end){
  return data
} else {
  for(i=start; i<data.length; i++){
    if(i < end){
      temp.push(data[i])
    } else if(!end){
      temp.push(data[i])
    }
  }
  return temp
  }
}

//DRIVER CODE

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]