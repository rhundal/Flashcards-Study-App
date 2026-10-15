import FlashCard from "./FlashCard.js";

export default class Deck {
  #deckOfCards: FlashCard[] = []; //deckOfCards = array of array of flash cards

  constructor(cards: FlashCard[]) {
    this.#deckOfCards = cards;
  }
}
