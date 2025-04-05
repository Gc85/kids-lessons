import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createListeningSection(lesson, book, level) {
  const listeningDivElem = createElem('div', 'div-opening', '');
  const listeningH2Elm = createHeading(lesson, `Listening Quiz`, '2', '2');
  const listeningImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const listeningTextElem = createElem('p', 'main-text', '');
  listeningTextElem.innerHTML = listeningMessage;

  lesson.listeningImages.forEach((listeningItem) => {

    const listeningImgElem = createElem('img', 'image-medium', '');
    listeningImgElem.src = `./images/${book}/${level}/${listeningItem}.jpg`;

    listeningImgDiv.appendChild(listeningImgElem);
  });

  const listeningAudioPElem = createElem('p', 'audio', '');
  const listeningAudioElem = createElem('audio', '', '');
  listeningAudioElem.src = `./images/${book}/${level}/${lesson.listeningAudio}.mp3`;
  listeningAudioPElem.innerHTML = listeningAudioMessage;
  listeningAudioPElem.appendChild(listeningAudioElem);


  listeningDivElem.appendChild(listeningH2Elm);
  listeningDivElem.appendChild(listeningTextElem);
  listeningDivElem.appendChild(listeningImgDiv);
  listeningDivElem.appendChild(listeningAudioPElem);

  return listeningDivElem;
}

const listeningMessage = [
  `<b>Aim:</b> <em>Practice listening comprehension.</em>`
]

const listeningAudioMessage = [
  `<em>The students indicate which picture matches the audio. Pause audio after each answer. Confirm correct answer before continuing.</em>`
]
