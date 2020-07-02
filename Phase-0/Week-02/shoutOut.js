//Soal Nomor 1
//Code Here
function shoutOut(){
    return `Halo Function!`
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console

//Soal Nomor 2
//Code Here
function calculateMultiply(){
    let temp = 1
    temp = num1 * num2
    return temp
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

/* Soal Nomor 3
 BUATLAH KODE FUNCTION DISINI
*/

function processSentence(name, age, address, hobby){
    let bio = `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hoby yaitu ${hobby} !!`
    return bio
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"

