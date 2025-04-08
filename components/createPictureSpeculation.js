import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createPictureSpeculationSection(lesson, book, level) {
  const picSpecDivElem = createElem('div', 'div-opening', '');

  const picSpecH2Elm = createHeading(lesson, `Picture Speculation & Dialog`, '4', '4');

  const picSpecTextElem = createElem('p', 'main-text', '');
  picSpecTextElem.innerHTML = picSpecMessage.join('<br>');

  const picSpecImgDiv = createElem('div', 'flex-div', '');
  const picSpecImgElem = createElem('img', 'image-big', '');
  picSpecImgElem.src = `./assets/${book}/${level}/${lesson.dialogImage}.jpg`;
  picSpecImgElem.onclick = () => { showSrcMedia(); };

  const dialogMessageElem = createElem('p', 'main-text bold align-center', '');
  dialogMessageElem.innerHTML = dialogMessage.join('<br>');

  const dialogTextElem = createElem('p', 'main-text', '');
  dialogTextElem.innerHTML = `<b>Conversation:</b><br>${lesson.dialog}`;

  const dialogAudioPElem = createElem('p', 'audio', '');
  const dialogAudioElem = createElem('audio', '', '');
  dialogAudioElem.src = `./assets/${book}/${level}/${lesson.dialogAudio}.mp3`;
  dialogAudioPElem.appendChild(dialogAudioElem);


  picSpecImgDiv.appendChild(picSpecImgElem);

  picSpecDivElem.appendChild(picSpecH2Elm);
  picSpecDivElem.appendChild(picSpecTextElem);
  picSpecDivElem.appendChild(picSpecImgDiv);
  picSpecDivElem.appendChild(dialogMessageElem);
  picSpecDivElem.appendChild(dialogAudioPElem);
  picSpecDivElem.appendChild(dialogTextElem);

  return picSpecDivElem;
}

const picSpecMessage = [
  `<b>Let's look at today's picture.`,
  `Aim:</b> <em>Ask questions about the picture to establish the context and the names of the people.</em>`
]

const dialogMessage = [
  `Great! Now let's listen and hear what is happening today. <i>(Play audio.)<i>`
]
