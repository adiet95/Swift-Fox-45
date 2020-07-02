function attack (damage) {
  // Code disini
damage -= 2
return damage
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
var attackCalculation = attack(damagePerAttack)
let total = numberOfAttacks * attackCalculation

if(total < 0){
    return `Gak Berasa Pukulanmu Cuk..`
} else {
    return total
}
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90
console.log(damageCalculation(5, 0));