import { createElem } from './utils.js';
import { createHeading } from './createHeading.js';

export function createPDFLinksSection(lesson, message) {
  const pdfLinksDivElem = createElem('div', 'div-pdf-links', '');
  const pdfLinksH2Elm = createHeading(lesson, `PDF Links`, '1', '1');

  const pdfLinksTextElem = createElem('p', 'main-text', '');
  pdfLinksTextElem.innerHTML = message;

  const pdfULElem = createElem('ul', 'pdf-link-group', '');

  lesson.pdfs.forEach((pdfItem) => {
    const pdfLIElem = createElem('li', '', '');
    const pdfLinkElem = createElem('a', 'pdf-link', '');
    pdfLinkElem.href = `./assets/pdfs/${pdfItem.file}.pdf`;
    pdfLinkElem.target = `_blank`;
    pdfLinkElem.innerHTML = `${pdfItem.desc}`;

    pdfLIElem.appendChild(pdfLinkElem);
    pdfULElem.appendChild(pdfLIElem);
  });
  pdfLinksTextElem.appendChild(pdfULElem);

  pdfLinksDivElem.appendChild(pdfLinksH2Elm);
  pdfLinksDivElem.appendChild(pdfLinksTextElem);

  return pdfLinksDivElem;
}
