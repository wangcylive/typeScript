export default function () {
  enum Days { Sun, Mon, Tue, Web, Thu, Fir, Sat }

  enum Colors { red, green, blue = <any>'blue' }

  const enum Colors1 { red, yellow }

  enum Color { Red,Green, Blue }

  let c = Color.Red
}

declare enum Directions { Up, Left }