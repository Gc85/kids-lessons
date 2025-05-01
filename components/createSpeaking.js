import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createSpeakingSection(lesson, book, level, textMessage) {
  const speakingDivElem = createElem('div', 'div-opening', '');
  const speakingH2Elm = createHeading(lesson, `Speaking Section`, '2', '2');
  const speakingImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const speakingTextElem = createElem('p', 'main-text', '');
  speakingTextElem.innerHTML = textMessage.join('<br>');

  lesson.speakingImages.forEach((speakingItem) => {
    const speakingImgElem = createElem('img', 'image-medium', '');

    speakingImgElem.src = `./assets/${book}/${level}/${speakingItem}.jpg`;
    speakingImgElem.onclick = () => { showSrcMedia(); };

    speakingImgDiv.appendChild(speakingImgElem);
  });

  speakingDivElem.appendChild(speakingH2Elm);
  speakingDivElem.appendChild(speakingTextElem);
  speakingDivElem.appendChild(speakingImgDiv);
  return speakingDivElem;
}
