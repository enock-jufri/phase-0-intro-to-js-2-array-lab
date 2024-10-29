// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    return [...cats,name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    let x = [...cats]
    x.pop()
    return x
}

function removeFirstCat(){
    let x = [...cats]
    x.shift()
    return x
}