interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  tick() {}
  currentTime: Date
  setTime (d: Date) {
    this.currentTime = d
  }
  constructor (h: number, m: number) {}
}

const clock1 = new Clock(1, 2)
clock1.setTime(new Date(2019, 7, 10))

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
  tick(): void
}

interface ComputedInterFace {
  memory: number,
  cpu: string
}

interface MobilePhone extends ComputedInterFace, ClockInterface {
  size: number
}

const iphone: MobilePhone = {
  size: 2,
  cpu: 'A10',
  memory: 1e4 * 2,
  tick (): void {
  },
  currentTime: new Date()
}

interface Counter {
  (start: number): string,
  interval: number,
  reset(): any
}

function getCounter (): Counter {
  let counter = <Counter>function (start: number) {}
  counter.interval = 13
  counter.reset = () => {}
  return counter
}

const c = getCounter()
c.interval = 5.01

class Control {
  private state: any

  getState (): any {
    return this.state
  }
}

interface SelectableControl extends Control {
  select (): any
}

class Button extends Control implements SelectableControl {
  select (): string {
    return 'button'
  }
}

const btn1 = new Button()
btn1.select()
