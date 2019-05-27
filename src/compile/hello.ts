function sayHello(person: string) {
  return `hello, ${person}.`
}

const user = ''

sayHello(user)

const isDone: boolean = true
const isFail: boolean = false

const userAges: number = 20
const decLiteral: number = 0xf00d

const myName: string = 'wangcy'

function alertName (): void {
  console.log('alertName')
}

alertName()

const unusable: void = null

let u: undefined = undefined
let n: null = null

let num: number = n

let myFav: any = 'string'
myFav = 20

let something
something = true
something = 40