import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createUnitReviewPhonics(lesson, book, level, heading, textMessage, audioMessage, phonicsImages, phonicsAudio) {

  const phonicsDivElem = createElem('div', 'div-opening', '');
  const phonicsH2Elm = createHeading(lesson, `${heading}`, '2', '2');
  const phonicsImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const phonicsTextElem = createElem('p', 'main-text', '');
  phonicsTextElem.innerHTML = textMessage.join('<br>');

  phonicsImages.forEach((phonicsItem) => {
    let phonicsImgElem;
    if (lesson.phonics1Images.length > 1) {
      phonicsImgElem = createElem('img', 'image-small', '');
    } else {
      phonicsImgElem = createElem('img', 'image-big', '');
    }
    phonicsImgElem.src = `./assets/${book}/${level}/${phonicsItem}.jpg`;
    phonicsImgElem.onclick = () => { showSrcMedia(); };

    phonicsImgDiv.appendChild(phonicsImgElem);
  });

  phonicsDivElem.appendChild(phonicsH2Elm);
  phonicsDivElem.appendChild(phonicsTextElem);
  phonicsDivElem.appendChild(phonicsImgDiv);

  const phonicsAudioPElem = createElem('p', 'audio', '');
  const phonicsAudioElem = createElem('audio', '', '');
  const phonicsAudioText = createElem('p', '', '');

  if (audioMessage) {
    phonicsAudioText.innerHTML = audioMessage;
    phonicsAudioPElem.appendChild(phonicsAudioText);
    phonicsAudioElem.src = `./assets/${book}/${level}/${phonicsAudio}.mp3`;
    phonicsAudioPElem.appendChild(phonicsAudioElem);
    phonicsDivElem.appendChild(phonicsAudioPElem);
  }

  return phonicsDivElem;
}
