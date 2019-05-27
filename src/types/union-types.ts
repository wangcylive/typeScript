export default function () {
  let myFav: string | number = 'hehe'

  myFav = 30

  function getLength (value: string | number): string {
    value = 'www'
    console.log(value.length)
    value = 20
    console.log(value > 40)
    return value.toString()
  }
}