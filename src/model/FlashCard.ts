class FlashCard {
  #frontText: string = ""; // setting card fields private
  #backText: string = "";

  //   constructor(frontText: string, backText: string) {
  //     this.#frontText = frontText;
  //     this.#backText = backText;
  //   }

  get getFrontText(): string {
    return this.#frontText;
  }

  get getBackText(): string {
    return this.#backText;
  }

  set setFrontText(someText: string) {
    this.#frontText = someText;
  }

  set setBackText(someText: string) {
    this.#backText = someText;
  }
}
