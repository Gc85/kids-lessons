import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createReviewPhonicsSection(lesson, level, reviewPhonics, plusPhonics, lessonsData, type, book) {

  const reviewPhonicsDivElem = createElem('div', 'div-opening', '');
  const reviewPhonicsH2Elm = createHeading(lesson, `Review Phonics`, '2', '2');

  const reviewPhonicsTextElem = createElem('p', 'main-text', '');

  const reviewPhonicsImgDiv = createElem('div', 'flex flex-wrap flex-justify-evenly', '');
  if (!lesson.review) {
    reviewPhonicsTextElem.innerHTML = reviewPhonicsMessage1.join('<br>');
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
  } else {
    reviewPhonicsTextElem.innerHTML = reviewPhonicsMessage2.join('<br>');

    let reviewPhonicsArray = [];
    let seenPhonicsIds = new Set();

    for (const reviewLesson of lesson.reviewLessons) {
      const getReviewLesson = lessonsData[level][type][book].find( rl => rl.lessonNumber === reviewLesson );

      if (type !== "Plus") {
        getReviewLesson.phonics1Images.forEach((reviewPhonicsItem) => {
          const findPhonics = reviewPhonics.phonicsCards.find( p => p.id === reviewPhonicsItem );
          if (!seenPhonicsIds.has(findPhonics.id)) {
            reviewPhonicsArray.push(findPhonics);
            seenPhonicsIds.add(findPhonics.id);
          }
        });
      } else {
        // Get normal phonics
        getReviewLesson.reviewPhonicsImages.forEach((reviewPhonicsItem) => {
          const findPhonics = reviewPhonics.phonicsCards.find( p => p.id === reviewPhonicsItem );
          if (!seenPhonicsIds.has(findPhonics.id)) {
            reviewPhonicsArray.push(findPhonics);
            seenPhonicsIds.add(findPhonics.id);
          }
        });
        // Get Plus phonics
        getReviewLesson.phonics1Images.forEach((reviewPhonicsItem) => {
          const findPhonics = plusPhonics.phonicsCards.find( p => p.id === reviewPhonicsItem );
          if (!seenPhonicsIds.has(findPhonics.id)) {
            reviewPhonicsArray.push(findPhonics);
            seenPhonicsIds.add(findPhonics.id);
          }
        });
      }
    };
    console.log(reviewPhonicsArray);
    // Helper function: matches Plus phonics like 5[a-f]p or 4[a-f]p
    const isPlusPhonic = id => /^[45][a-f]p/.test(id);

    // Reorder array: normal phonics first, Plus phonics last
    const normalPhonics = reviewPhonicsArray.filter(p => !isPlusPhonic(p.id));
    const fancyPhonics = reviewPhonicsArray.filter(p => isPlusPhonic(p.id));
    const reorderedPhonicsArray = [...normalPhonics, ...fancyPhonics];

    for (let phonic = 0; phonic < reorderedPhonicsArray.length; phonic++) {
      const reviewPhonics1ImgTextElem = createElem('div', 'phonics-center', '');
      const reviewPhonicsImgElem = createElem('img', 'image-small', '');
      const reviewPhonicsDescElem = createElem('p', 'phonics-text', '');

      const currentPhonic = reorderedPhonicsArray[phonic];

      if (currentPhonic.id.slice(0, 1) === "P") {
        reviewPhonicsImgElem.src = `./assets/phonics/CL${level}/${currentPhonic.id.slice(0, 4)}/${currentPhonic.id}.jpg`;
      } else {
        reviewPhonicsImgElem.src = `./assets/${book}/${level}/${currentPhonic.id}.jpg`;
      }

      reviewPhonicsImgElem.onclick = () => { showSrcMedia(); };
      reviewPhonicsDescElem.innerHTML = `${currentPhonic.desc}`;

      reviewPhonics1ImgTextElem.appendChild(reviewPhonicsImgElem);
      reviewPhonics1ImgTextElem.appendChild(reviewPhonicsDescElem);
      reviewPhonicsImgDiv.appendChild(reviewPhonics1ImgTextElem);
    };
  }

  reviewPhonicsDivElem.appendChild(reviewPhonicsH2Elm);
  reviewPhonicsDivElem.appendChild(reviewPhonicsTextElem);
  reviewPhonicsDivElem.appendChild(reviewPhonicsImgDiv);

  return reviewPhonicsDivElem;
}

const reviewPhonicsMessage1 = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>Review phonics taught in previous lessons.</em>`
]

const reviewPhonicsMessage2 = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>Review phonics taught in previous lessons.<br>For level 5's, practice making 3-letter words with basic phonics.</em>`
]
