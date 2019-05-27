export default function () {
  const s = $('#sss')
  
  class Animal {
    public name: string;
    constructor (name: string) {
      this.name = name
    }
    
    public sayHi (): string {
      return 'hi'
    }
  }

  const a = new Animal('sfs')
  a.sayHi()
  a.name

  enum Directions {
    Up,
    Left,
    Bottom,
    Right
  }
}