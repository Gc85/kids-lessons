import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createUnitReviewPhonics(lesson, book, level, heading, textMessage, audioMessage, reviewPhonicsImages, reviewPhonicsAudio) {

  const reviewPhonicsDivElem = createElem('div', 'div-opening', '');
  const reviewPhonicsH2Elm = createHeading(lesson, `${heading}`, '2', '2');
  const reviewPhonicsImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const reviewPhonicsTextElem = createElem('p', 'main-text', '');
  reviewPhonicsTextElem.innerHTML = textMessage.join('<br>');

  reviewPhonicsImages.forEach((reviewPhonicsItem) => {
    const reviewPhonicsImgElem = createElem('img', 'image-small', '');
    reviewPhonicsImgElem.src = `./assets/${book}/${level}/${reviewPhonicsItem}.jpg`;
    reviewPhonicsImgElem.onclick = () => { showSrcMedia(); };

    reviewPhonicsImgDiv.appendChild(reviewPhonicsImgElem);
  });

  reviewPhonicsDivElem.appendChild(reviewPhonicsH2Elm);
  reviewPhonicsDivElem.appendChild(reviewPhonicsTextElem);
  reviewPhonicsDivElem.appendChild(reviewPhonicsImgDiv);

  const reviewPhonicsAudioPElem = createElem('p', 'audio', '');
  const reviewPhonicsAudioElem = createElem('audio', '', '');
  const reviewPhonicsAudioText = createElem('p', '', '');

  if (audioMessage) {
    reviewPhonicsAudioText.innerHTML = audioMessage;
    reviewPhonicsAudioPElem.appendChild(reviewPhonicsAudioText);
    reviewPhonicsAudioElem.src = `./assets/${book}/${level}/${reviewPhonicsAudio}.mp3`;
    reviewPhonicsAudioPElem.appendChild(reviewPhonicsAudioElem);
    reviewPhonicsDivElem.appendChild(reviewPhonicsAudioPElem);
  }

  return reviewPhonicsDivElem;
}

const reviewPhonicsMessage = [
  `<b>Let's say the words together!</b>`,
  ``,
  `<b>Aim:</b> <em>Review the letters and sounds taught in the previous 3 lessons of the course.</em>`
]

const reviewPhonicsAudioMessage = [
  `<em>Pause audio and confirm correct answer before continuing.</em>`
]
