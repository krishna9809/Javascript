let array = [1,3,4,5]


array.push(4);

console.log(array)

array.pop()

console.log(array)

let superHero = ["hero", "zero"];

console.log(superHero)

array.shift()

console.log(array)

array.unshift(3)

console.log(array);


let marvel = ["ironman", "Hulk", "Thor"];
let DC = ["superman", "batman"];

// marvel.push(DC);

let MarvelDC = marvel.concat(DC)

console.log(marvel);

console.log(MarvelDC)

// spread 

let allHeros = [...marvel,...DC];

console.log(allHeros)

// flat

let complexArray = [1,2,3,4,[3,4,5,6,[4,5,6,7]],4,5,5];

let simpleArray = complexArray.flat(Infinity);

console.log(simpleArray);

// isArray and from

console.log(Array.isArray("Krishna"))
console.log(Array.from("Krishna"))

// Array.of()

let room1 = 304;
let room2 = 305;
let room3 = 306;

console.log(Array.of(room1,room2,room3));
