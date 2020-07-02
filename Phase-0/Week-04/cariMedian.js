function sorting(arr){

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        }
    }
}
return arr
}

function cariMedian(arr) {
  // you can only write your code here!
  let sort = sorting(arr)
  median = 0;
  if(sort.length % 2 == 0){
      for(i=0; i<sort.length/2; i++){
          median = (sort[i] + sort[i+1])/2 
      }
  } else {
      for(j=0; j<(sort.length/2) + 0.5; j++){
          median = sort[j]
      }
  }
  return median
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5