import type FlashCard from "../model/FlashCard.js";

// 1. Explicitly return a HTMLDivElement as your type signature requires
export function cardTemplate(
  newCard: FlashCard,
  currentNumber: number,
  totalCards: number,
  deckName: string,
): HTMLDivElement {
  // Wrap both articles in a single parent container div
  const currentDivTemplate = `
<div class="flashcard-container">
    <!-- Front Side -->
    <article class="flashcard" id="flashcard"
        aria-label="Flashcard. Front: ${newCard.getFrontText}">
        <div class="flashcard-topline">
            <span class="side-label">
                <span class="side-indicator" aria-hidden="true"></span>Front of card
            </span>
        </div>
        <div class="flashcard-content">
            <p class="card-prompt">${newCard.getFrontText}</p>
            <p class="flip-hint">Select “Flip card” to reveal the answer.</p>
        </div>
        <div class="flashcard-footer">
            <span>${deckName}</span>
            <span class="card-number">${String(currentNumber).padStart(2, "0")} <span aria-hidden="true">/</span> ${String(totalCards).padStart(2, "0")}</span>
        </div>
    </article>

    <!-- Back Side -->
    <article class="flashcard flashcard-back" id="flashcard-back"
        aria-label="Flashcard answer side: ${newCard.getBackText}">
        <div class="flashcard-topline">
            <span class="side-label">
                <span class="side-indicator answer-indicator" aria-hidden="true"></span>Back of card
            </span>
        </div>
        <div class="flashcard-content">
            <p class="card-answer">${newCard.getBackText}</p>
        </div>
        <div class="flashcard-footer">
            <span>${deckName}</span>
            <span class="card-number">${String(currentNumber).padStart(2, "0")} <span aria-hidden="true">/</span> ${String(totalCards).padStart(2, "0")}</span>
        </div>
    </article>
</div>
`;

  // 2. Parse using a simple wrapper div
  const wrapper = document.createElement("div");
  wrapper.innerHTML = currentDivTemplate.trim();

  // 3. Pluck out your single parent container node cleanly
  const cardElement = wrapper.firstElementChild as HTMLDivElement;

  return cardElement;
}
