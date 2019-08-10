class Greeter {
  greeting: string

  constructor (message: string) {
    this.greeting = message
  }

  greet (): string {
    return `hello, ${this.greeting}`
  }
}

const greeter = new Greeter('zxf')

class Animal {
  private color: string
  protected age: number
  name: string
  constructor (name: string) {
    this.name = name
  }
  public move (distanceInMeters: number = 0) {
    console.log('move')
  }
  static showClassName (): string {
    return Animal.name
  }
}

class Dog extends Animal {
  readonly weight: number = 500
  constructor () {
    super('Dog')
    this.age = 30
  }
  move (): string {
    return this.name + 'Move Method.'
  }
  parentMove () {
    super.move(5)
  }
  public bark () {
    console.log('woof')
  }
}

const dog1 = new Dog()
dog1.move()
dog1.bark()

class Employee {
  private _fullName: string

  constructor (name: string = 'www') {
    this._fullName = name
  }

  get fullName (): string {
    return this._fullName
  }

  set fullName (newName: string) {
    this._fullName = newName
  }
}

const employee1 = new Employee('SF')
employee1.fullName
employee1.fullName = 'SSS'
