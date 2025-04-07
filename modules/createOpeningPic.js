import { createElem } from './utils.js';
import { createHeading } from './createHeading.js';

export function createOpeningSection(lesson, book, level) {
  const openingDivElem = createElem('div', 'div-opening', '');

  const openingH2Elm = createHeading(lesson, `Opening Image`, '3', '3');

  const openingImgDiv = createElem('div', 'flex-div', '');

  const openingImgElem = createElem('img', 'image-big', '');
  openingImgElem.src = `./images/${book}/${level}/${lesson.openingImage}.jpg`;
  openingImgElem.onclick = () => { showSrcMedia(); };

  const openingTextElem = createElem('p', 'main-text', '');
  openingTextElem.innerHTML = openingMessage;

  openingImgDiv.appendChild(openingImgElem);

  openingDivElem.appendChild(openingH2Elm);
  openingDivElem.appendChild(openingTextElem);
  openingDivElem.appendChild(openingImgDiv);

  return openingDivElem;
}

const openingMessage = [
  `<b>Aim:</b> <em>Introduce today's lesson to the students.</em>`
]
