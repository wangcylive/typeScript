export default function () {
  enum Days { Sun, Mon, Tue, Web, Thu, Fir, Sat }

  enum Colors { red, green, blue = <any>'blue' }

  const enum Colors1 { red, yellow }

  enum Color { Red,Green, Blue }

  let c = Color.Red
}

declare enum Directions { Up, Left }

enum S {
  NO = 0,
  YES = 'yes'
}

enum E {
  X
}

enum E1 {
  X,
  Y,
  Z
}

enum E2 {
  A = 1,
  B,
  D,
  C = S.YES,
  F = 4,
  H,
  Read = 1 << 1
}