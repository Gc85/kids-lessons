import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createListeningSection(lesson, book, level, textMessage, audioMessage) {
  const listeningDivElem = createElem('div', 'div-opening', '');
  const listeningH2Elm = createHeading(lesson, `Listening Quiz`, '2', '2');
  const listeningImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const listeningTextElem = createElem('p', 'main-text', '');
  listeningTextElem.innerHTML = textMessage;
  const lenImages = lesson.listeningImages.length;

  lesson.listeningImages.forEach((listeningItem) => {
    let listeningImgElem;
    (lenImages > 1) ? listeningImgElem = createElem('img', 'image-medium', '') : listeningImgElem = createElem('img', 'image-big', '');
    listeningImgElem.src = `./assets/${book}/${level}/${listeningItem}.jpg`;
    listeningImgElem.onclick = () => { showSrcMedia(); };

    listeningImgDiv.appendChild(listeningImgElem);
  });

  const listeningAudioPElem = createElem('p', 'audio', '');
  const listeningAudioElem = createElem('audio', '', '');
  const listeningAudioText = createElem('p', '', '');
  listeningAudioText.innerHTML = audioMessage;
  listeningAudioPElem.appendChild(listeningAudioText);

  listeningAudioElem.src = `./assets/${book}/${level}/${lesson.listeningAudio}.mp3`;
  listeningAudioPElem.appendChild(listeningAudioElem);


  listeningDivElem.appendChild(listeningH2Elm);
  listeningDivElem.appendChild(listeningTextElem);
  listeningDivElem.appendChild(listeningImgDiv);
  listeningDivElem.appendChild(listeningAudioPElem);

  return listeningDivElem;
}
