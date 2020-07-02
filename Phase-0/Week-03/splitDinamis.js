function splitDinamis(string, opr){
let arr = []
let temp = ''
for(let i=0; i<string; i++){
    if(temp === opr){
        continue;
    } else {
        temp += string[i]
    }
}

}
console.log(splitDinamis(" ini kertas ini buku ini pulpen" , " ini ")) // [ "kertas", "buku", "puplpen"]
console.log(splitDinamis("inikertasinibukuinipulpen" , "nipul")) // [ "inikertasinibuku", "pen"]