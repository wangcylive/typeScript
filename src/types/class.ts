export default function () {
  class Animal {
    public name: string

    constructor(name: string) {
      this.name = name
    }

    sayHello (): string {
      return 'hello' + this.name
    }
  }

  class Cat extends Animal {
    public type: string = 'Cat'
    private hart: string = 'RED'
    public size: number = 20

    constructor(name: string) {
      super(name)
      this.name = name
    }

    getHart (): string {
      return this.hart
    }

    eat (): string {
      return this.name + this.type
    }
  }

  class BlueCat extends Cat {
    public color: string = 'blue'

    constructor(name: string) {
      super('blurCat')
      this.name = name
      this.size = 50
    }

    getHart (): string {
      return super.sayHello()
    }
  }

  const cat1 = new Cat('cat1')
  cat1.eat()
  cat1.sayHello()
  cat1.getHart()
  cat1.size
}
