function dwarfRollCall(dwarves) {
  var newdwarves = [];
  for (let i = 0; i < dwarves.length; i++){
    newdwarves.push(`${i + 1}. ${dwarves[i]} `)
    }
return newdwarves.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var newplaneteerCalls = []
  for (let i = 0; i < planeteerCalls.length; i++){
    newplaneteerCalls.push(`${planeteerCalls[i].toUpperCase()}!`)
    }
return newplaneteerCalls
}

function longPlaneteerCalls(words) {
  for (let i = 0; words[i].toString().length > 4; i++){
    return true
    }
    return false
} 

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods.includes("cheddar") || foods.includes("gouda") || foods.includes("camembert")      ){
    return "cheddar'"
    }
return "no cheese!"
}
}