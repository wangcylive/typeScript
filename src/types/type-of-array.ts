export default function () {
  let arr1: number[] = [ 1, 2, 3, NaN ]

  arr1.push(Infinity)

  let arr2: Array<number> = [ 3, 4, 5 ]

  interface NumberArray {
    [index: number]: number
  }

  let arr3: NumberArray = [ 5, 6 ]

  let arr4: any[] = [ 1, 'ss', {}, function () {
  }, [], this, window ]

  function sum() {
    let args: Array<number | string> = [ 3, 'sss' ]

    let args1: IArguments = arguments

    console.log(args, args1)
  }

  type Name = string
  type NameResolve = () => string
  type NameOrResolve = Name | NameResolve

  function getName(name: NameOrResolve): Name {
    if (typeof name === 'string') {
      return name
    } else {
      return name()
    }
  }

  function a() {
    return 2 + ''
  }

  getName(a)

  type EventNames = 'click' | 'scroll' | 'mousemove'

  function handleEvent(ele: Element, event: EventNames) {
    const top = ele.getBoundingClientRect().top
    console.log(top, event)
  }

  handleEvent(document.body, 'click')
  handleEvent(document.querySelector('div:first-child'), 'scroll')


  const tuple1: [ string, number, object ] = [ '', 2, {} ]
  let tuple2: [ number, number, string ]
  tuple2[0] = 3
  tuple2[1] = NaN
  tuple2[2] = ''
  tuple2.push(3)
  tuple2.push('')

  const arr5: Array<string | number> = [ '', 5 ]

  const s1: number[][] = [ [ 1, 2, 3 ], [ Infinity ] ]

  interface Obj1 {
    a: number,
    b: string,
    [ key: string ]: any
  }

  const obj1: Obj1 = {
    a: 1,
    b: 'b',
    c: [],
    d: {}
  }

  function sss () {
    const { a: objA, b: objB } = obj1
    console.log(objA, objB)
  }

  function fn1 (name: any = '333'): any {
    console.log(name)
  }

  const fn1v = fn1(5)

  let readArr1: ReadonlyArray<number> = [1, 2, 3]
  let readMap1: ReadonlyMap<string, number> = new Map([['', 2]])
  let readSet2: Readonly<any> = new Set([1, 2, 'null'])
}
