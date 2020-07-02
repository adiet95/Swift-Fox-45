function splitting(str) {
  //your code here
let temp = ''
let melee = []
let range = []
let hero = []

for(let i=0; i<str.length; i++){
  if(str[i] === '-' && str[i+1] === 'R'){
    range.push(temp)
    temp = ''
  } else if(str[i] === '-' && str[i+1] === 'M'){
    melee.push(temp)
    temp = ''
  } else if(str[i] === ','){
    continue;
  } else {
    temp += str[i]
    if(temp === 'Ranged'){
      range.push(temp)
      hero.push(range)
      range = []
      temp = ''
    } else if(temp === 'Melee'){
      melee.push(temp)
      hero.push(melee)
      melee = []
      temp = ''
    }
  }
}

return hero
}

function meleeRangedGrouping (str) {
  //your code here
var split = splitting(str)
let range = []
let melee = []
let hero = []

if(!str.length){
  return []
} else {
  for(let i=0; i<split.length; i++){
    if(split[i][1] == 'Ranged'){
      range.push(split[i][0])
    } else if(split[i][1] == 'Melee'){
      melee.push(split[i][0])
    }
  }
  hero.push(range, melee)
  return hero
}
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
