const myAdd: (a: number, b: number) => number = function (a: number, b: number): number {
  return a + b
}

myAdd(1, 2)

function buildName (firstName: string, lastName = 'Smith'): string {
  return `${firstName} ${lastName}`
}

buildName('Alice')

function buildName2 (firstName: string, ...rest: string[]) {
  return firstName + rest.join(' ')
}

buildName2('Tom', 'A', 'B')

interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[],
  cards: number[],
  createCardPicker (this: Deck): () => Card
}

const deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

interface UIElement {
  addClickListener (onClick: (this: void) => void): void
}
class Handler {
  info: string
  onClickGood (this: void, e: Event) {
    console.log('clicked')
  }
}

const h = new Handler()

function message ({ message: string, title: string }): string
function message (message: string): string
function message (): string {

}
