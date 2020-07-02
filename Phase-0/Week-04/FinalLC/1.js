/**
 * ===============
 * DERET BERTAMBAH
 * ===============
 * Buatlah sebuah function yang akan mengembalikan array yang berisikan hasil pertambahan tiap dua angka sebelumnya.
 * 
 * Function ini menerima dua parameter: min (angka minimum) dan max (angka maksimum), yang harus dimasukkan ketika function dipanggil. Angka minimum tidak boleh lebih besar dari angka maksimum dan keduanya harus bertipe angka.
 * 
 * Contoh:
 * 
 * min = 9
 * max = 29
 * 
 * Output --> [9, 10, 19, 29]
 * 
 * Proses:
 * 
 * - Function akan memasukkan angka minimum dan angka minimum + 1 ke dalam array
 * 
 *  [9, 10]
 * 
 * - Setelah itu function akan menghitung pertambahan dari tiap dua angka terakhir di dalam array dan memasukkannya
 * 
 * [9, 10]
 * 
 * 9 + 10 = 19 --> [9, 10, 19]
 * 
 * [..., 10, 19]
 * 
 * 10 + 19 = 29 --> [9, 10, 19, 29]
 * 
 * - Function akan terus memasukkan pertambahan dua angka terakhir selama angka tersebut tidak lebih besar dari angka maksimal
 * 
 * 
 * NOTES:
 * - Wajib menuliskan PSEUDOCODE!!
 * - Hanya diperbolehkan menggunakan built in function .push()
*/

/*
 PSEUDOCODE
 ==========
*/


function deretBertambah(min, max) {
    // your code here
if(min > max){
    return `Angka min harus lebih kecil dari max!`
} else if(min < max){
    let count = 0
    let temp = 0
    for(let i=min; i<max; i++){
        if(i == min){
            count ++
        }  temp = max[i] + max[i-1]
    }
} else {
    
    return `Angka min/max harus diinput dan bertipe angka!`
    
}
}

console.log(deretBertambah(9, 29)) // [9, 10, 19, 29]

console.log(deretBertambah(1, 15)) // [ 1, 2, 3, 5, 8, 13 ]

console.log(deretBertambah(4, 20)) // [ 4, 5, 9, 14 ]

console.log(deretBertambah(10, 2)) // Angka min harus lebih kecil dari max! 

console.log(deretBertambah('9')) // Angka min/max harus diinput dan bertipe angka!
