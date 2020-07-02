function antrian(line,string){
line.push(string)
return line
}

console.log(antrian([1,2],'3'));

function panggilAntrian(line2){
    line2.shift()
    return line2
}
console.log(panggilAntrian([1,2,3,4]));

function tumpukkan(line3,title){
    line3.unshift(title)
    return line3
}    
console.log(tumpukkan([1,2,3,4], '100'));
