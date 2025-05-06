import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createReadingSection(lesson, book, level, textMessage) {
  const readingDivElem = createElem('div', 'div-opening', '');
  const readingH2Elm = createHeading(lesson, `Reading Section`, '2', '2');
  const readingImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const readingTextElem = createElem('p', 'main-text', '');
  readingTextElem.innerHTML = textMessage.join('<br>');

  const lenImages = lesson.readingImages.length;
  lesson.readingImages.forEach((readingItem) => {
    let readingImgElem;
    (lenImages > 1) ? readingImgElem = createElem('img', 'image-medium', '') : readingImgElem = createElem('img', 'image-big', '');

    readingImgElem.src = `./assets/${book}/${level}/${readingItem}.jpg`;
    readingImgElem.onclick = () => { showSrcMedia(); };

    readingImgDiv.appendChild(readingImgElem);
  });

  const lessonRegEx = /3[A-Za-z]p/;
  const speakingTextElem = createElem('p', 'main-text', '');

  const pdfULElem = createElem('ul', 'pdf-link-group', '');
  if (lesson.review && lessonRegEx.test(lesson.openingImage.slice(0,3))) {
    speakingTextElem.innerHTML = `Please use the below PDF to do the Speaking part of the lesson:`;
    const pdfLIElem = createElem('li', '', '');
    const pdfLinkElem = createElem('a', 'pdf-link', '');
    pdfLinkElem.href = `./assets/pdfs/${lesson.pdfs[3].file}.pdf`;
    pdfLinkElem.target = `_blank`;
    pdfLinkElem.innerHTML = `${lesson.pdfs[3].desc}`;

    pdfLIElem.appendChild(pdfLinkElem);
    pdfULElem.appendChild(pdfLIElem);
  }

  speakingTextElem.appendChild(pdfULElem);
  readingDivElem.appendChild(readingH2Elm);
  readingDivElem.appendChild(readingTextElem);
  readingDivElem.appendChild(readingImgDiv);
  readingDivElem.appendChild(speakingTextElem);

  return readingDivElem;
}
