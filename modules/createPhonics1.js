import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createPhonics1Section(lesson, book, level) {

  const phonics1DivElem = createElem('div', 'div-opening', '');
  const phonics1H2Elm = createHeading(lesson, `Today's Phonics - Part 1`, '2', '2');
  const phonics1ImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const phonics1TextElem = createElem('p', 'main-text', '');
  phonics1TextElem.innerHTML = phonics1Message.join('<br>');;

  lesson.phonics1Images.forEach((phonics1Item) => {

    const phonics1ImgElem = createElem('img', 'image-small', '');
    phonics1ImgElem.src = `./images/${book}/${level}/${phonics1Item}.jpg`;

    phonics1ImgDiv.appendChild(phonics1ImgElem);
  });

  const phonics1TextElem2 = createElem('p', 'main-text', '');
  phonics1TextElem2.innerHTML = phonics1PracticeMessage.join('<br>');;

  phonics1DivElem.appendChild(phonics1H2Elm);
  phonics1DivElem.appendChild(phonics1TextElem);
  phonics1DivElem.appendChild(phonics1ImgDiv);
  phonics1DivElem.appendChild(phonics1TextElem2);

  return phonics1DivElem;
}

const phonics1Message = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>Present and practice the phonics of today's lesson.`,
  `It's very important to present the phonics sound together with the full word, e.g. "a", "a", "apple".</em>`
]

const phonics1PracticeMessage = [
  `<b>Practice making two-letter combinations where possible: "vowel" + "consonant" and vice-versa.</b>`,
  `<span class="phonics-hint">Example: "a", "b", "a", "b", "ab" AND "b", "a", "b", "a", "ba".</span>`
]
