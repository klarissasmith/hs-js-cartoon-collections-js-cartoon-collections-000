function dwarfRollCall(dwarves) {
  var newdwarves = [];
  for (let i = dwarves.length/2; i < dwarves.length; i++){
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

function findTheCheese (foods) { // ["grapes", "apple", "camembert"]
  for (let i = 0; i < foods.length; i++){ // i = 0, foods[i] == grapes
    if (foods[i] == ("cheddar") || foods == ("gouda") || foods[i] == ("camembert")){
    return foods[i]
    }
return "no cheese!"
}
}

function findTheCheese(foods){
  let cheeses = [ "cheddar", "gouda"]
  for(){
    if(cheeses.includes(foods[i])){
      return foods[i]
    }
  }
}

function wordsWithB(words){
  let newWords = [];
  for (i = 0; i < words.length; i++){
    if (words[i].startsWith("B")){
      newWords.push(words[i])
}
}
return newWords
}