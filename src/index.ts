import FlashCard from "./model/FlashCard.js";
import Deck from "./model/Deck.js";

const newDeckBtn = document.querySelector("#newDeckBtn");
const modalForNewDeck = document.querySelector("#deck-dialog");
let modalDeckNameField = document.getElementById(
  "deck-name",
) as HTMLInputElement;
const cancelModal = document.querySelector("#cancelBtnModal");
let saveModal = document.querySelector("#saveBtnModal");

const newCardButton = document.querySelector("#newCardBtn");
// let flashCardDisplayDiv = document.querySelector("#flashcard");
let newCardDiv = document.querySelector("#card-dialog");

let cancelNewCardButton = document.querySelector("#cancelNewCardBtn");
let saveNewCardButton = document.querySelector("#saveNewCardBtn");

let newDeckNameByUser: string = "";

let cardsArray: FlashCard[] = [];
let decksArray: Deck[] = [];

////////////// functions and event listeners //////////////

newDeckBtn?.addEventListener("click", () => {
  modalForNewDeck?.setAttribute("openStatus", "open");
  (modalForNewDeck as HTMLDialogElement)?.showModal();
});

if (modalForNewDeck?.getAttribute("openStatus") === "open") {
  newDeckNameByUser = modalDeckNameField.value;
}

cancelModal?.addEventListener("click", () => {
  modalForNewDeck?.setAttribute("openStatus", "close");
  newDeckNameByUser = "";
  modalDeckNameField.value = "";
  (modalForNewDeck as HTMLDialogElement)?.close();
});

saveModal?.addEventListener("click", () => {
  modalForNewDeck?.setAttribute("openStatus", "close");
  newDeckNameByUser = "";
  modalDeckNameField.value = "";
  (modalForNewDeck as HTMLDialogElement)?.close();
});

newCardButton?.addEventListener("click", () => {
  newCardDiv?.setAttribute("openStatus", "open");
  (newCardDiv as HTMLDialogElement)?.showModal();
});

cancelNewCardButton?.addEventListener("click", () => {
  newCardDiv?.setAttribute("openStatus", "close");
  //  newDeckNameByUser = "";
  //  modalDeckNameField.value = "";
  (newCardDiv as HTMLDialogElement)?.close();
});

saveNewCardButton?.addEventListener("click", () => {
  newCardDiv?.setAttribute("openStatus", "close");
  //  newDeckNameByUser = "";
  //  modalDeckNameField.value = "";
  (newCardDiv as HTMLDialogElement)?.close();
});
