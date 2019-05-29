export default function () {
  enum Days { Sun, Mon, Tue, Web, Thu, Fir, Sat }

  enum Colors { red, green, blue = <any>'blue' }

  const enum Colors1 { red, yellow }
}

declare enum Directions { Up, Left }