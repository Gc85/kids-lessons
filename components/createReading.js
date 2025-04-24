import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createReadingSection(lesson, book, level, textMessage) {
  const readingDivElem = createElem('div', 'div-opening', '');
  const readingH2Elm = createHeading(lesson, `Reading Section`, '2', '2');
  const readingImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const readingTextElem = createElem('p', 'main-text', '');
  readingTextElem.innerHTML = textMessage;

  lesson.readingImages.forEach((readingItem) => {

    const readingImgElem = createElem('img', 'image-medium', '');
    readingImgElem.src = `./assets/${book}/${level}/${readingItem}.jpg`;
    readingImgElem.onclick = () => { showSrcMedia(); };

    readingImgDiv.appendChild(readingImgElem);
  });

  readingDivElem.appendChild(readingH2Elm);
  readingDivElem.appendChild(readingTextElem);
  readingDivElem.appendChild(readingImgDiv);
  return readingDivElem;
}
