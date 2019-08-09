export default function () {
  let bool: Boolean = new Boolean(1)
  let err: Error = new Error('Error')
  let date: Date = new Date()
  let reg: RegExp = new RegExp('\w', 'g')
  let set: Set<any> = new Set([1, 2, '4'])
  let map: Map<any, any> = new Map([[1, 2]])

  function create(args: object | string): void {
    console.log(arguments)
  }

  create('3')
  create({ name: '3' })

  let s: any = { length: 5 }
  const sl: number = (s as string).length

  document.documentElement.addEventListener('click', event => {
    const target = event.target as HTMLElement
    const is = target.contains(document.body)
    console.log((event.target as HTMLElement).nodeName)
  }, false)

  const a = {
    params: {}
  }

  interface Params {
    id: string
  }

  const b = (a.params as Params).id

  function fn1 (name: { label: number }): { name: string } {
    return {
      name: name.label + ''
    }
  }

  const bbb = fn1({ label: 3 })

  interface SearchFun {
    (arg1: string, arg2: string): boolean
  }

  let search1: SearchFun
  search1 = (name1: string, name2: string): boolean => {
    return name1.includes(name2)
  }
}
