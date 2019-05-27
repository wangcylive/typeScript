export default function () {
  interface Person {
    readonly id: number,
    name: string,
    age?: number,
    [propName: string]: any
  }

  let tom: Person = {
    id: 1,
    name: 'tom',
    age: 21,
    gender: 'male',
    child: [1, 2, 3]
  }
  tom.name = 'tom1'
}