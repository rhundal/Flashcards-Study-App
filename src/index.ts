import FlashCard from "./model/FlashCard.js";
import Deck from "./model/Deck.js";
import { deckTemplate } from "./resuableComponents/deckTemplate.js";
import { cardTemplate } from "./resuableComponents/cardTemplate.js";

const newDeckBtn = document.querySelector("#newDeckBtn");
const modalForNewDeck = document.querySelector("#deck-dialog");
let modalDeckNameField = document.getElementById(
  "deck-name",
) as HTMLInputElement;
let newCardFrontField = document.querySelector(
  "#card-front",
) as HTMLInputElement;
let newCardBackField = document.querySelector("#card-back") as HTMLInputElement;
const cancelModal = document.querySelector("#cancelBtnModal");
let saveModal = document.querySelector("#saveBtnModal");

const newCardButton = document.querySelector("#newCardBtn");
let flashCardDisplayDiv = document.querySelector("#flashcard");
let newCardDiv = document.querySelector("#card-dialog");

let cancelNewCardButton = document.querySelector("#cancelNewCardBtn");
let saveNewCardButton = document.querySelector("#saveNewCardBtn");

let newDeckNameByUser: string = "";
let currentDeck: Deck;

let decksArray: Deck[] = [];
let activeDeckId: string | null = "";
let currentDeckTitle = document.querySelector("#deckTtle");

let deckCountElem = document.querySelector("#deckCount");

const activeDeckItem = document.querySelector<HTMLLIElement>(
  "#leftMenu .deck-item.is-active",
); // handle to most current newly added deck

const deckList = document.querySelector<HTMLUListElement>(
  "#leftMenu .deck-list",
);
const cardArea = document.querySelector<HTMLDivElement>("#displayCardArea");

let prevCardBtn = document.querySelector("#previous-card-button");
let nextCardBtn = document.querySelector("#next-card-button");
let flipCardBtn = document.querySelector("#flip-card-button");

////////////// functions and event listeners //////////////

document.addEventListener("DOMContentLoaded", () => {
  if (currentDeckTitle) {
    currentDeckTitle.textContent = "Select a Deck to Begin";
  }
});

newDeckBtn?.addEventListener("click", () => {
  modalForNewDeck?.setAttribute("openStatus", "open");
  (modalForNewDeck as HTMLDialogElement)?.showModal();
});

cancelModal?.addEventListener("click", () => {
  modalForNewDeck?.setAttribute("openStatus", "close");
  newDeckNameByUser = "";
  modalDeckNameField.value = "";
  (modalForNewDeck as HTMLDialogElement)?.close();
});

saveModal?.addEventListener("click", () => {
  if (modalForNewDeck?.getAttribute("openStatus") === "open") {
    newDeckNameByUser = modalDeckNameField.value;
    currentDeck = new Deck(newDeckNameByUser);
    decksArray.push(currentDeck);
    activeDeckId = currentDeck.getDeckId;
  }

  modalForNewDeck?.setAttribute("openStatus", "close");
  newDeckNameByUser = "";
  modalDeckNameField.value = "";
  (modalForNewDeck as HTMLDialogElement)?.close();
  renderDeck(currentDeck);
});

newCardButton?.addEventListener("click", () => {
  newCardDiv?.setAttribute("openStatus", "open");
  (newCardDiv as HTMLDialogElement)?.showModal();
});

cancelNewCardButton?.addEventListener("click", () => {
  newCardDiv?.setAttribute("openStatus", "close");
  newDeckNameByUser = "";
  modalDeckNameField.value = "";
  (newCardDiv as HTMLDialogElement)?.close();
});

saveNewCardButton?.addEventListener("click", () => {
  let currentCard: FlashCard = new FlashCard(
    newCardFrontField.value,
    newCardBackField.value,
  );

  // save the array to a currently selected deck

  let targetDeck: Deck | undefined = decksArray?.find(
    (deck) => deck.id === activeDeckId,
  );
  targetDeck?.deckOfCards.push(currentCard);
  newCardFrontField.value = "";
  newCardBackField.value = "";
  const totalCards = targetDeck?.deckOfCards.length || 0;
  const currentNumber = totalCards;
  const deckName = targetDeck?.getDeckName || "Untitled";
  renderCard(currentCard, totalCards, currentNumber, deckName);
  newCardDiv?.setAttribute("openStatus", "close");
  (newCardDiv as HTMLDialogElement)?.close();
});

function renderDeck(newDeck: Deck) {
  let createdDeckLi = deckTemplate(newDeck);
  deckList?.insertAdjacentElement("afterbegin", createdDeckLi);
  if (deckList && deckCountElem) {
    deckCountElem.innerHTML = String(deckList.children.length);
  }
}

function renderCard(
  currentCard: FlashCard,
  currentNumber: number,
  totalCards: number,
  deckName: string,
) {
  let createdCardDiv = cardTemplate(
    currentCard,
    currentNumber,
    totalCards,
    deckName,
  );

  if (cardArea) {
    cardArea.innerHTML = "";
  }

  cardArea?.insertAdjacentElement("afterbegin", createdCardDiv);
  refreshDeck(deckName);
}

function renderCards(targetDeck: Deck | undefined) {
  // let createdCardDiv = cardTemplate()
}

// flashCardDisplayDiv

function refreshDeck(deckName: string) {
  let deckToRefresh = decksArray.find((deck) => deck.name === deckName);
  // 2. Locate all rendered deck list items in the DOM
  const domDecks = document.querySelectorAll<HTMLLIElement>(
    "#leftMenu .deck-item",
  );

  // 3. Find the specific DOM node that contains your deck name string
  const targetElement = Array.from(domDecks).find((li) => {
    const nameSpan = li.querySelector(".deck-name");
    return nameSpan?.textContent?.trim() === deckName;
  });
  if (targetElement && deckToRefresh) {
    const metaSpan = targetElement.querySelector(".deck-meta");
    if (metaSpan) {
      metaSpan.textContent = `${deckToRefresh.deckOfCards.length} cards`;
    }
  }
}

flipCardBtn?.addEventListener("click", () => {
  const cardContainer = cardArea?.querySelector<HTMLElement>(
    ".flashcard-container",
  );

  cardContainer?.classList.toggle("is-flipped");
});

deckList?.addEventListener("click", (e) => {
  const currentDeckLi = (e.target as HTMLElement).closest<HTMLLIElement>(
    ".deck-item",
  );

  if (!currentDeckLi) return;

  // Clear out the 'is-active' styles from all other decks
  const allDecks = deckList.querySelectorAll(".deck-item");
  allDecks.forEach((li) => li.classList.remove("is-active"));

  currentDeckLi?.classList.add("is-active");
  activeDeckId = currentDeckLi.id;

  const selectedDeckName =
    currentDeckLi?.querySelector<HTMLSpanElement>(".deck-name")?.textContent ||
    "";

  if (currentDeckTitle) {
    currentDeckTitle.textContent = selectedDeckName;
  }
});
