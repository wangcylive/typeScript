export default function () {
  let arr1: number[] = [1, 2, 3, NaN]

  arr1.push(Infinity)

  let arr2: Array<number> = [3, 4, 5]

  interface NumberArray {
    [index: number]: number
  }

  let arr3: NumberArray = [5, 6]

  let arr4: any[] = [1, 'ss', {}, function () {}, [], this, window]

  function sum () {
    let args: Array<number | string> = [3, 'sss']

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

  function a () {
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


  const tuple1: [string, number, object] = ['', 2, {}]
  let tuple2: [number, number, string]
  tuple2[0] = 3
  tuple2[1] = NaN
  tuple2[2] = ''
  tuple2.push(3)
  tuple2.push('')
}