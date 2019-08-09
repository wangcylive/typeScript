declare function jQuery(selector: any): any
declare function jQuery(callback: () => any): any;

declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
}

declare function create (args: object): void