import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createBQSection(lesson, bq) {
  const bqDivElem = createElem('div', 'div-bq', '');
  const bqH2Elm = createHeading(lesson, `Basic Questions`, '3', '3');

  const bqTextElem = createElem('p', 'main-text', '');
  bqTextElem.innerHTML = bqMessage;

  const bqImgDiv = createElem('div', 'flex-div', '');

  // Loop through lesson.bq array
  lesson.bq.forEach((bqItem) => {
    const findBQ = bq.basicQuestions.find(q => q.id === bqItem);

    if (findBQ) {
      const bqInsideDivElem = createElem('div', 'div-img', '');
      const bqImgElem = createElem('img', 'image-medium', '');
      bqImgElem.src = `./images/bq/${findBQ.url}`;

      bqImgElem.onclick = () => { showSrcMedia(); };

      const bqPElem = createElem('p', '', '');
      // const bqTextMessage = >;
      bqPElem.appendChild(document.createTextNode(`A: ${findBQ.name}`));
      bqPElem.appendChild(document.createElement('br'));
      bqPElem.appendChild(document.createTextNode(`B: ${findBQ.description}`));

      bqInsideDivElem.appendChild(bqImgElem);
      bqInsideDivElem.appendChild(bqPElem);
      bqImgDiv.appendChild(bqInsideDivElem);
    }
  });

  bqDivElem.appendChild(bqH2Elm);
  bqDivElem.appendChild(bqTextElem);
  bqDivElem.appendChild(bqImgDiv);

  return bqDivElem;
}

const bqMessage = [
  `<b>Aim:</b> <em>Show a flashcard and ask the students introduction questions.</em>`
]

