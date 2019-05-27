export default function () {
  function sum (x: number, y: number): number {
    return x + y
  }

  sum(1, 2)

  sum(3, 4)

  let mySum: (x: number, y:number) => number = (x: number, y: number): number => {
    return x + y
  }

  mySum(0.1, 3.2)

  let getSum = function (x: number, y?: number): number {
    if (y) {
      return x + y
    } else {
      return x
    }
  }

  getSum(3)
  getSum(3, 0.001)

  interface SearchFunc {
    (source: string, subString: string): boolean
  }

  let mySearch: SearchFunc

  mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
  }

  function buildName(firstName: string, lastName: string = 'sss'): string {
    if (lastName) {
      return firstName + ' ' + lastName
    } else {
      return firstName
    }
  }

  buildName('w', 'cy')

  function push(arr: any[], ...item: any[]) {
    arr.push(...item)
  }

  push([], 3, 4, 5)

  function reverse(x: number): number
  function reverse(x: string): string
  function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('')
    }
  }

  reverse(33)
  reverse('3232')
}