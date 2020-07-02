/* Modus = Data yang paling Banyak Muncul
1. Cek data arr
2. 
*/
function cariModus(arr) {
    // you can only write your code here!
let temp = {}
let hasil = ''
let modus = ''

for (i = 0; i < arr.length; i++) {
    if (temp[arr[i]] == undefined) {
        temp[arr[i]] = 0
    }
    temp[arr[i]]++
}

let tempkey = Object.keys(temp);
for (let i = 0; i < tempkey.length; i++) {
    if (temp[tempkey[i]]>hasil){
        hasil = temp[tempkey[i]]
        modus = tempkey[i]
        if(temp[tempkey[i]]==1){
            modus = -1
        } else if (tempkey[i+1]==undefined){
            modus = -1
        }
    }  
}        
return modus
}

//  console.log(`Object key: ${key}, Object Value: ${temp[key]}`);
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([10, 4, 5, 2, 4, 4, 4, 4, 4, 4, 4, 4])); // 4)