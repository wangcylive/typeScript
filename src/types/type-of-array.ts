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
}