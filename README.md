#### How AI (Co-pilot) was used

- The Prompt below was used to scaffold UI
- I have implemented Typescript/behavior functioality with some help from prompts to AI.

#### Reflections

1. What AI produced - AI produced the entire User Interface with the help of the prompt below.
2. What you fixed - I fixed and moved around some layout by making reusable card and deck templates
3. Key insights -
   1. Completed functionality:
      1. Create, Read Cards, Decks
      2. Responsive layout; basic accessibility (labels, focus, keyboard navigation)
      3. Progress and stats per deck
   2. In Progress functionality: Study mode: flip cards, next/previous, shuffle
   3. Pending functionality:
      1. Update, Delete Cards, Decks
      2. Search/filter within a deck by keyword
      3. Persist data using LocalStorage (decks, cards, last active deck)
      4. Import/export deck JSON.

### Project requirements and instructions for Copilot. (Prompt used)

# Project: Flashcards — Single-Page Web Application

## 1. Role and objective

Act as a frontend developer building a clean, accessible, responsive Flashcards web application using vanilla HTML, CSS, and JavaScript.

Generate the **HTML and CSS user interface only**. I will implement all application logic and functionality myself in `app.js`.

The application should provide a polished interface for managing flashcard decks, creating and editing cards, and studying cards within a selected deck.

## 2. Strict technology constraints

- Use semantic HTML5, standard CSS, and vanilla JavaScript only.
- Use Tailwind CSS via its browser CDN for utility classes.
- Use `styles.css` for CSS variables, custom components, animations, responsive overrides, and accessibility styling.
- Do not use React, Vue, Angular, Svelte, TypeScript, JSX, or any other frontend framework.
- Do not use npm, package managers, bundlers, build tools, or compilation steps.
- Do not introduce a backend, server, database, API, or authentication.
- The project must be runnable by opening `index.html` directly in a modern browser.
- Use only lightweight dependencies that work without a build process. Prefer native HTML elements and CSS.
- Keep the existing files: `index.html`, `styles.css`, and `app.js`. Create additional files only when genuinely necessary.
- Do not overwrite `app.js` with generated business logic.

## 3. File responsibilities

### index.html

Create the complete semantic HTML skeleton and all UI elements needed for the application.

Include:

- Header and application branding.
- Sidebar navigation containing the deck list.
- Main content area for the selected deck.
- Search and study toolbar.
- Flashcard display and study controls.
- Deck creation and editing dialogs.
- Card creation and editing dialogs.
- Empty states and helpful status messages.
- Import and export controls.
- Footer with brief usage instructions.

Link `styles.css` and `app.js` correctly.

Load Tailwind using its browser CDN. Do not require a build step.

Use descriptive IDs and classes for every important UI element so I can implement the functionality in `app.js` later.

### styles.css

Create a complete styling foundation with:

- CSS custom properties for colors, spacing, typography, borders, and shadows.
- Responsive layout styling.
- Flashcard front and back appearance.
- Active deck and selected control states.
- Modal and dialog styling.
- Button variants and form styling.
- Hover, focus-visible, disabled, and active states.
- Accessible contrast and reduced-motion support.
- Mobile navigation and responsive card sizing.

Avoid unnecessary duplication of Tailwind utility classes in custom CSS.

### app.js

Leave the existing JavaScript implementation untouched.

If an existing `app.js` must be inspected to understand the project, read it without modifying it. Do not add event listeners, CRUD functions, LocalStorage code, modal-opening logic, card-flipping logic, search logic, import/export logic, or sample-data initialization.

I will implement all JavaScript functionality myself.

## 4. Application layout

Build a single-page application with these sections.

### A. Header

Include:

- Application name: Flashcards.
- A small, simple icon or CSS-based decorative element.
- A prominent "New Deck" button.
- A responsive mobile navigation toggle if needed.

Keep the header visually balanced and uncluttered.

### B. Sidebar — Deck navigation

Include:

- A "My Decks" heading.
- A deck search/filter field.
- A list of example deck items for demonstrating the layout.
- An active deck state.
- A card-count label for each deck.
- An edit deck button.
- A delete deck button.
- A clear empty state when there are no decks.
- A mobile-friendly way to open and close the sidebar.

Use example content only as static presentation. Do not implement data initialization or persistence.

Deck action buttons must have accessible names, even if they display icons only.

### C. Main content area

Display:

- The selected deck title.
- The number of cards in the deck.
- An edit deck action.
- A delete deck action.
- A toolbar containing:
  - Search cards input.
  - Shuffle button.
  - New Card button.
  - Import and Export controls.
- A card area that displays one flashcard at a time in study mode.
- A clear empty state when the selected deck has no cards.
- A separate card-list or card-management view where users can see existing cards and access edit/delete actions.

Keep deck management, card management, and study mode visually distinct without navigating to another HTML page.

### D. Flashcard display

Create a prominent, centered flashcard component with:

- A front side containing a question or term.
- A back side containing an answer or definition.
- A visible indication of the current side.
- A subtle visual treatment that suggests the card can flip.
- A clear instruction to flip the card.
- A card position indicator, such as "Card 2 of 12".
- Previous, Flip, and Next buttons.
- A Shuffle button in the study toolbar.

Use sample content for visual demonstration only.

The front and back must be represented in the HTML structure. Add suitable classes and IDs so I can implement flipping and navigation later.

Do not implement the flip animation or study functionality in JavaScript. CSS may provide the visual transition styles, but the application must not depend on an unimplemented interaction to make the card content accessible.

### E. Deck creation and editing dialog

Provide a reusable native HTML dialog or accessible modal containing:

- A descriptive heading.
- A deck name input.
- A visible label for the input.
- A Save button.
- A Cancel button.
- A close button with an accessible name.
- Space for validation and error messages.

The same dialog structure should support creating and editing a deck through later JavaScript.

Also provide a delete confirmation dialog that identifies the deck being deleted and provides Cancel and Delete actions.

Deleting a deck should eventually require explicit confirmation.

### F. Card creation and editing dialog

Provide a reusable dialog containing:

- A dialog heading.
- A labeled front/question textarea.
- A labeled back/answer textarea.
- A Save Card button.
- A Cancel button.
- A close button.
- Space for validation messages.

The dialog should support both creating and editing a card.

Provide edit and delete actions for cards in the card-management view. Include a confirmation dialog for card deletion.

### G. Import and export interface

Include:

- An Import Deck button.
- A file input accepting `.json` files.
- An Export Deck button.
- A small help text explaining that decks can be transferred using JSON files.
- An accessible status-message area for future success and error feedback.

Only create the interface. Do not implement JSON parsing, downloading, validation, or file handling.

### H. Footer

Include a short instruction such as:

"Create a deck, add your cards, and flip through them to study. Your progress and decks will be managed locally in your browser."

Do not claim that data is being saved until I implement LocalStorage functionality.

## 5. Visual design direction

Use a modern, friendly, minimal educational-tool aesthetic.

Requirements:

- A clean neutral background.
- A clearly differentiated sidebar and main workspace.
- Rounded cards and dialogs.
- Subtle borders and restrained shadows.
- Consistent spacing and typography.
- A visually prominent flashcard.
- A strong primary button style.
- Secondary and destructive button styles.
- Simple, consistent icons, preferably inline SVG or CSS.
- Avoid excessive gradients, distracting animations, and clutter.
- Do not introduce a component library.

Use CSS variables to make the design easy to customize.

Make the layout look complete even before JavaScript functionality is implemented.

## 6. Responsive requirements

Use a mobile-first approach.

Desktop:

- Sidebar and main content displayed side by side.
- Flashcard centered within the main content area.
- Toolbars arranged horizontally when space permits.

Tablet:

- Reduced sidebar width and appropriate spacing.
- Toolbars allowed to wrap.
- Flashcard remains readable and centered.

Mobile:

- Sidebar becomes a collapsible navigation panel.
- Header controls fit within the available width.
- Toolbar controls wrap or stack neatly.
- Flashcard fits within the viewport without horizontal scrolling.
- Buttons have comfortable touch targets.
- Dialogs fit the screen and remain usable with the on-screen keyboard.
- Footer does not overflow.

Do not use fixed widths that break smaller screens.

## 7. Accessibility requirements

- Use semantic `header`, `nav`, `main`, `section`, and `footer` elements.
- Use real `button` elements for actions.
- Use explicit labels for all inputs and textareas.
- Give icon-only buttons accessible names using `aria-label`.
- Use `aria-current`, `aria-expanded`, `aria-controls`, and other appropriate ARIA attributes where relevant.
- Ensure the active deck is identifiable beyond color alone.
- Provide visible keyboard focus indicators using `:focus-visible`.
- Ensure interactive elements are keyboard accessible.
- Use appropriate dialog semantics and provide a clear way to close each dialog.
- Use accessible status and error-message regions, such as `aria-live` where appropriate.
- Respect `prefers-reduced-motion`.
- Maintain readable contrast and scalable text.
- Do not use clickable `div` or `span` elements in place of buttons.

## 8. Future functionality — UI preparation only

The interface must be structured to support the following functionality when I implement it in `app.js`:

- Create, rename, and delete multiple decks.
- Create, edit, and delete cards within a deck.
- Display the cards belonging to the selected deck.
- Flip cards between front and back.
- Navigate to the previous and next card.
- Shuffle cards.
- Search and filter cards within the active deck.
- Persist decks, cards, and the last active deck using LocalStorage.
- Import and export decks as JSON.
- Confirm destructive actions.
- Display validation errors, success messages, and empty states.

Do not implement any of these features in JavaScript now. Only provide the HTML structure, CSS, forms, dialogs, buttons, visual states, and appropriate element identifiers needed for later implementation.

## 9. Sample content

Use a small set of realistic sample deck names and card content only if needed to demonstrate the design.

Keep sample content clearly separated from the future application data. Do not write initialization scripts or embed functionality that depends on the examples.

## 10. Acceptance criteria

Before finishing, verify that:

1. `index.html` opens directly in a modern browser without a build process.
2. `styles.css` loads correctly.
3. `app.js` remains untouched.
4. The page contains a semantic header, deck sidebar, main workspace, and footer.
5. The UI includes deck and card CRUD controls.
6. The UI includes study controls, search fields, and import/export controls.
7. Dialogs and forms have proper labels and accessible names.
8. The interface works visually on desktop, tablet, and mobile.
9. There is no horizontal overflow on small screens.
10. Keyboard focus is visible.
11. No React, backend, API, database, or build tooling is introduced.
12. No application logic is implemented.

## 11. Execution instructions

First inspect the existing project files and preserve the existing `app.js`.

Then generate or update `index.html` and `styles.css`.

Make changes incrementally, keeping the HTML structure readable and CSS organized into clearly labeled sections.

After generating the files, summarize which files were changed and identify any UI elements that will require JavaScript implementation later.

Do not implement additional features beyond this specification.
