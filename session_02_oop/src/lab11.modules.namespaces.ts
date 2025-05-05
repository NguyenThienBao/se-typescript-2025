/**
 * * define main function using namespace modules
 */

/// <reference path="./lab11.modules.namespaces/lab11.modules.namespaces.ts" />
import { MyLibs } from "./lab11.modules.namespaces";

const fraction : MyLibs.Fraction = new MyLibs.Fraction(1, 2)
console.log(fraction.toString())
console.log(`PI = ${MyLibs.PI}`)
console.log(`Triple of 4 = ${MyLibs.triple(4)}`)