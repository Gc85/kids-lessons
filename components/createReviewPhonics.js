import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createReviewPhonicsSection(lesson, level, reviewPhonics) {

  const reviewPhonicsDivElem = createElem('div', 'div-opening', '');
  const reviewPhonicsH2Elm = createHeading(lesson, `Review Phonics`, '2', '2');

  const reviewPhonicsTextElem = createElem('p', 'main-text', '');
  reviewPhonicsTextElem.innerHTML = reviewPhonicsMessage.join('<br>');;

  const reviewPhonicsImgDiv = createElem('div', 'flex flex-wrap flex-justify-evenly', '');
  lesson.reviewPhonicsImages.forEach((reviewPhonicsItem) => {
    const findPhonics = reviewPhonics.phonicsCards.find(p => p.id === reviewPhonicsItem);

    const reviewPhonics1ImgTextElem = createElem('div', 'phonics-center', '');
    const reviewPhonicsImgElem = createElem('img', 'image-small', '');
    const reviewPhonicsDescElem = createElem('p', 'phonics-text', '');
    if (findPhonics) {
      reviewPhonicsImgElem.src = `./assets/phonics/CL${level}/${reviewPhonicsItem.slice(0, 4)}/${reviewPhonicsItem}.jpg`;
      reviewPhonicsImgElem.onclick = () => { showSrcMedia(); };
      reviewPhonicsDescElem.innerHTML = `${findPhonics.desc}`;
    } else {
      // Add Kinder content here.
    }

    reviewPhonics1ImgTextElem.appendChild(reviewPhonicsImgElem);
    reviewPhonics1ImgTextElem.appendChild(reviewPhonicsDescElem);
    reviewPhonicsImgDiv.appendChild(reviewPhonics1ImgTextElem);
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
