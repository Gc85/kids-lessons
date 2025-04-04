import { createElem } from './utils.js';

export function createOpeningSection(lesson, book, level) {
  const openingDivElem = createElem('div', 'div-opening', '');

  const openingH2Elm = createElem('h2', '', '');
  openingH2Elm.innerHTML = `Opening Image`;

  const openingImgDiv = createElem('div', 'flex-div', '');

  const openingImgElem = createElem('img', 'image-big', '');
  openingImgElem.src = `./images/${book}/${level}/${lesson.openingImage}.jpg`;
  openingImgElem.onclick = () => { openingImgElem.src };

  openingImgDiv.appendChild(openingImgElem);

  openingDivElem.appendChild(openingH2Elm);
  openingDivElem.appendChild(openingImgDiv);

  return openingDivElem;
}
