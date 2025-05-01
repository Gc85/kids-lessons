import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createWritingSection(lesson, book, level, textMessage) {
  const writingDivElem = createElem('div', 'div-opening', '');
  const writingH2Elm = createHeading(lesson, `Writing Section`, '2', '2');
  const writingImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const writingTextElem = createElem('p', 'main-text', '');
  writingTextElem.innerHTML = textMessage.join('<br>');

  lesson.writingImages.forEach((writingItem) => {
    const writingImgElem = createElem('img', 'image-medium', '');
    writingImgElem.src = `./assets/${book}/${level}/${writingItem}.jpg`;
    writingImgElem.onclick = () => { showSrcMedia(); };

    writingImgDiv.appendChild(writingImgElem);
  });

  writingDivElem.appendChild(writingH2Elm);
  writingDivElem.appendChild(writingTextElem);
  writingDivElem.appendChild(writingImgDiv);
  return writingDivElem;
}
