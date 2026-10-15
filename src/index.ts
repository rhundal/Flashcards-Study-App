const newDeckBtn = document.querySelector("#newDeckBtn");
const modalForNewDeck = document.querySelector("#deck-dialog");
let modalDeckNameField = document.getElementById(
  "deck-name",
) as HTMLInputElement;
const cancelModal = document.querySelector("#cancelBtnModal");
let saveModal = document.querySelector("#saveBtnModal");

let newDeckNameByUser: string = "";

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
