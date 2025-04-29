import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createSayDialogueSection(lesson, book, level, message) {

  const sayDialogueDivElem = createElem('div', 'div-opening', '');
  const sayDialogueH2Elm = createHeading(lesson, `Say the Dialogue`, '1', '1');
  const sayDialogueImgDiv = createElem('div', 'flex-div', '');

  const sayDialogueTextElem = createElem('p', 'main-text', '');
  sayDialogueTextElem.innerHTML = message.join('<br>');

  const sayDialogueImgElem = createElem('img', 'image-big', '');
  sayDialogueImgElem.src = `./assets/${book}/${level}/${lesson.sayDialogueImage}.jpg`;
  sayDialogueImgElem.onclick = () => { showSrcMedia(); };

  sayDialogueImgDiv.appendChild(sayDialogueImgElem);

  sayDialogueDivElem.appendChild(sayDialogueH2Elm);
  sayDialogueDivElem.appendChild(sayDialogueTextElem);
  sayDialogueDivElem.appendChild(sayDialogueImgDiv);

  return sayDialogueDivElem;
}
