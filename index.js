// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name); 
}
destructivelyAppendCat(Zoya)

function destructivelyPrependCat(name) {
  cats.unshift(name); 
}
destructivelyPrependCat(Maya)


function destructivelyRemoveLastCat() {
  cats.pop(); 
}


function destructivelyRemoveFirstCat() {
  cats.shift(); 
}

function appendCat(name) {
  return [...cats, name]; // Correctly using 'name' parameter, no undeclared 'Zoya'
}
appendCat(Lara)


function prependCat(name) {
  return [name, ...cats]; 
}
prependCat(Jimmy)


function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1); 
}
