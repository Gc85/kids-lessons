import { createElem } from './utils.js';
import { createHeading } from './createHeading.js';

export function createPDFLinksSection(lesson, message, pdfFiles) {
  const pdfLinksDivElem = createElem('div', 'div-pdf-links', '');
  const pdfLinksH2Elm = createHeading(lesson, `PDF Links`, '1', '1');

  const pdfLinksTextElem = createElem('p', 'main-text', '');
  pdfLinksTextElem.innerHTML = message;

  const pdfULElem = createElem('ul', 'pdf-link-group', '');

  pdfFiles.forEach((pdfs) => {
    const pdfLIElem = createElem('li', '', '');
    const pdfLinkElem = createElem('a', 'pdf-link', '');

    // Lesson 1 logic (items 0, 2, 3, and 4)
    if (lesson.lessonNumber === 1) {
      if (
          pdfs.desc === 'Previous Home Study' ||
          pdfs.desc === 'Lesson Transcript' ||
          pdfs.desc === 'Activity Bank' ||
          pdfs.desc === 'Lesson Overview') {
        pdfLinkElem.href = `./assets/pdfs/${pdfs.file}.pdf`;
        pdfLinkElem.target = `_blank`;
        pdfLinkElem.innerHTML = `${pdfs.desc}`;
        pdfLIElem.appendChild(pdfLinkElem);
        pdfULElem.appendChild(pdfLIElem);
      }
    }
    // Logic for lessons 2 and 3 for each unit (items 1, 2, 3, and 4)
    else if (lesson.lessonNumber %4 !== 0) {
      if (
          pdfs.desc === 'Home Study' ||
          pdfs.desc === 'Lesson Transcript' ||
          pdfs.desc === 'Activity Bank' ||
          pdfs.desc === 'Lesson Overview') {
        pdfLinkElem.href = `./assets/pdfs/${pdfs.file}.pdf`;
        pdfLinkElem.target = `_blank`;
        pdfLinkElem.innerHTML = `${pdfs.desc}`;
        pdfLIElem.appendChild(pdfLinkElem);
        pdfULElem.appendChild(pdfLIElem);
      }
    }
    // Logic for Review lessons (items 1, 2, 3, and 5)
    else if (lesson.lessonNumber % 4 === 0) {
      if (
          pdfs.desc === 'Home Study' ||
          pdfs.desc === 'Lesson Transcript' ||
          pdfs.desc === 'Activity Bank' ||
          pdfs.desc === 'Lesson Overview Review' ||
          pdfs.desc === 'Speaking Transcript') {
        pdfLinkElem.href = `./assets/pdfs/${pdfs.file}.pdf`;
        pdfLinkElem.target = `_blank`;
        pdfLinkElem.innerHTML = `${pdfs.desc}`;
        pdfLIElem.appendChild(pdfLinkElem);
        pdfULElem.appendChild(pdfLIElem);
      }
    }
  });

  pdfLinksTextElem.appendChild(pdfULElem);

  pdfLinksDivElem.appendChild(pdfLinksH2Elm);
  pdfLinksDivElem.appendChild(pdfLinksTextElem);

  return pdfLinksDivElem;
}
