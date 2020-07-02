function changeVocals (str) {
  //code di sini
let temp = ''

for(let i=0; i<str.length; i++){
    if(str[i] == 'a'){
        temp += 'b'
    }else if(str[i] == 'i'){
        temp += 'j'
    }else if(str[i] == 'u'){
        temp += 'v'
    }else if(str[i] == 'e'){
        temp += 'f'
    }else if(str[i] == 'o'){
        temp += 'p'
    }else if(str[i] == 'A'){
        temp += 'B'
    }else if(str[i] == 'I'){
        temp += 'J'
    }else if(str[i] == 'E'){
        temp += 'F'
    }else if(str[i] == 'O'){
        temp += 'P'
    }else if(str[i] == 'U'){
        temp += 'V'
    } else{
        temp += str[i]
    }
       
}
return temp
}

function reverseWord (str) {
  //code di sini
let temp = ''

for(let i=str.length-1; i>=0; i--){
    temp += str[i]
}
return temp
}

function setLowerUpperCase (str) {
  //code di sini
let temp = ''

for(let i=0; i<str.length; i++){
    if(str[i] === str[i].toLowerCase()){
        temp += str[i].toUpperCase()
    } else if(str[i] === str[i].toUpperCase()){
        temp += str[i].toLowerCase()
    } else {
        temp += str[i]
    }
}
return temp
}

function removeSpaces (str) {
  //code di sini
let temp = ''

for(let i=0; i<str.length; i++){
    if(str[i] === ' '){
        continue;
    } else {
        temp += str[i]
    }
}
return temp
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
    return `Minimal karakter yang di input adalah 5 karakter`
  } else {
    return (removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name)))))
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'