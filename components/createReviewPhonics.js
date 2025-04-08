import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createReviewPhonicsSection(lesson, book, level) {

  const reviewPhonicsDivElem = createElem('div', 'div-opening', '');
  const reviewPhonicsH2Elm = createHeading(lesson, `Review Phonics`, '2', '2');
  const reviewPhonicsImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const reviewPhonicsTextElem = createElem('p', 'main-text', '');
  reviewPhonicsTextElem.innerHTML = reviewPhonicsMessage.join('<br>');;

  lesson.reviewPhonicsImages.forEach((reviewPhonicsItem) => {

    const reviewPhonicsImgElem = createElem('img', 'image-small', '');
    reviewPhonicsImgElem.src = `./images/${book}/${level}/${reviewPhonicsItem}.jpg`;
    reviewPhonicsImgElem.onclick = () => { showSrcMedia(); };

    reviewPhonicsImgDiv.appendChild(reviewPhonicsImgElem);
  });

  reviewPhonicsDivElem.appendChild(reviewPhonicsH2Elm);
  reviewPhonicsDivElem.appendChild(reviewPhonicsTextElem);
  reviewPhonicsDivElem.appendChild(reviewPhonicsImgDiv);

  return reviewPhonicsDivElem;
}

const reviewPhonicsMessage = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>Review phonics taught in previous lessons of the course so far.</em>`
]
