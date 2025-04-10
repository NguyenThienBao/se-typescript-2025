/**
 * * Base type of TypeScript
 */

//? boolean
let isDone : boolean = false
console.log(`isDone = ${isDone} - ${typeof(isDone)}`)

//! try assign number to boolean
//! isDone = 1; => error TS2322: Type 'number' is not assignable to type 'boolean'.

//? number 
let decimal : number = 6          // integer
let hex     : number = 0xf0000d   // hex      => is converted to decimal
let bin     : number = 0b101010   // binary   => is converted to decimal
let octal   : number = 0o744      // octal    => is converted to decimal

console.log(`Decimal = ${decimal} - ${typeof(decimal)}`)
console.log(`Hex     = ${hex} - ${typeof(hex)}`)
console.log(`Bin     = ${bin} - ${typeof(bin)}`)
console.log(`Octal   = ${octal} - ${typeof(octal)}`)

let big     : bigint = 100n
console.log(`Big int = ${big} - ${typeof(big)}`)

//? Double
let double : number = 0.1 + 0.2
console.log(`double = ${double} - ${typeof(double)}`)

//? string 
let color   : string = 'light blue'
color                = 'dark red'
console.log(`Color   = ${color} - ${typeof(color)}`)

