/**
 * * define main function for module with libs
 */

//import * from './lab10.oop.modules/lab10.oop.modules.lib'
import sayHello, { PI, double, Shape as ShapeType } from "./lab10.oop.modules/lab10.oop.modules.lib"

sayHello()
console.log(`PI = ${PI}`)
console.log(`Double value of 4 = ${double(4)}`)

const shape : ShapeType = new ShapeType('Green')
console.log(shape.color)