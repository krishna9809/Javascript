// Day 03 In Datatype Conversion

let Num = 2;

console.log(typeof Num); // number

let NumToString = String(Num);

console.log(NumToString) // 2

console.log(typeof NumToString) // string


// NUm To Boolean

let num = 1;

let Bool = Boolean(num)

console.log(Bool); // true

let hum = 9;

let HumBool = Boolean(hum);

console.log(HumBool); // true

// String to Num

let str = "hi";

let StrToNum = Number(str);

console.log(typeof StrToNum) // number

console.log(StrToNum) // NaN


console.table([Num, NumToString, typeof NumToString, Bool, HumBool, typeof StrToNum, StrToNum])
