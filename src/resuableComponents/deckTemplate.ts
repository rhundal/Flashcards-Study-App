import type Deck from "../model/Deck.js";

export function deckTemplate(newDeck: Deck): HTMLLIElement {
  const currentDivTemplate = `
<li class="deck-item is-active">
    <a class="deck-link" href="#selected-deck" aria-current="page">
        <span class="deck-color deck-color-violet" aria-hidden="true"></span>
        <span class="deck-link-copy">
            <span class="deck-name">${newDeck.getDeckName}</span>
            <span class="deck-meta">${newDeck.deckOfCards.length} cards</span>
        </span>
    </a>
    <div class="deck-actions">
        <button class="icon-button small-icon-button" type="button" aria-label="Edit Biology basics deck" aria-haspopup="dialog" aria-controls="deck-dialog">
            <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="m13.5 4.5 2 2M4 16l3.6-.7 8.7-8.7a1.4 1.4 0 0 0-2-2l-8.7 8.7L4 16Z"></path>
            </svg>
        </button>
        <button class="icon-button small-icon-button danger-hover" type="button" aria-label="Delete Biology basics deck" aria-haspopup="dialog" aria-controls="delete-deck-dialog">
            <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4.5 6h11M8 6V4h4v2m2.5 0-.7 10H6.2l-.7-10M8.5 9v4m3-4v4"></path>
            </svg>
        </button>
    </div>
</li>
`;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = currentDivTemplate.trim();

  const listItem = wrapper.firstElementChild as HTMLLIElement;

  return listItem;
}
