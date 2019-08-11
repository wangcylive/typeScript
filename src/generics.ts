function identity<T> (arg: T): T {
  return arg
}

let output1 = identity<number>(2)

function loggingIdentify<T> (arg: Array<T>): Array<T> {
  return arg
}

let loggingIdentify1 = loggingIdentify([[], {}, null, new Date()])

let myIdentity: <T>(arg: T) => T = identity

const myIdentify1 = myIdentity(2)

interface GenericsIdentify {
  <T>(arg: T): T
}

interface GenericsIdentifyArr {
  <T>(arg: Array<T>): Array<T>
}

let a1: GenericsIdentify = identity
let a2: GenericsIdentifyArr = loggingIdentify

class GenericsNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenerics = new GenericsNumber<number>()
myGenerics.zeroValue = 3
myGenerics.add = function (x, y) {
  return x + y
}

interface LengthWise {
  length: number
}

function genericsLength<T extends LengthWise>(arg: T): T {
  return arg
}

function test1 () {}
test1.length = 5

genericsLength({length: 5})
genericsLength([])
genericsLength(test1)