import FlashCard from "./FlashCard.js";

export default class Deck {
  deckOfCards: FlashCard[] = [];
  id: string = crypto.randomUUID();
  name: string;
  constructor(name: string) {
    // Access via the class name instead of 'this'
    this.name = name;
  }

  get getDeckId() {
    return this.id;
  }
  get getDeckName() {
    return this.name;
  }
}
