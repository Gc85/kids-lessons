import { createElem } from "./utils.js";

export function createPictureSpeculationSection(lesson) {
  const picSpecDivElem = createElem('div', 'div-opening', '');

  const picSpecH2Elm = createElem('h2', '', '');
  picSpecH2Elm.innerHTML = `Picture Speculation &amp; Dialog`;

  const picSpecImgDiv = createElem('div', 'flex-div', '');

  const picSpecTextElem = createElem('p', 'main-text bold', '');
  picSpecTextElem.innerHTML = picSpecMessage.join('<br>');

  const picSpecImgElem = createElem('img', 'image-big', '');
  picSpecImgElem.src = `./images/${lesson.dialogImage}.jpg`;
  picSpecImgElem.onclick = () => { loadAudio(`./images/${lesson.dialogImage}.mp3`) };

  const dialogMessageElem = createElem('p', 'main-text bold', '');
  dialogMessageElem.innerHTML = dialogMessage.join('<br>');

  const dialogTextElem = createElem('p', 'main-text', '');
  dialogTextElem.innerHTML = dialogText.join('<br>');

  picSpecImgDiv.appendChild(picSpecImgElem)

  picSpecDivElem.appendChild(picSpecH2Elm);
  picSpecDivElem.appendChild(picSpecTextElem);
  picSpecDivElem.appendChild(picSpecImgDiv);
  picSpecDivElem.appendChild(dialogMessageElem);
  picSpecDivElem.appendChild(dialogTextElem);


  return picSpecDivElem;
}

const picSpecMessage = [
  `Let's look at today's picture.`,
  `Aim: <em>Ask questions about the picture to establish the context and the names of the people.</em>`
]

const dialogMessage = [
  `Great! Now let's listen and hear what is happening today.`,
  `<i>(Play audio.)<i>`
]

const dialogText = [
  `"Let’s meet our new friends, Quin and Nia. Quin is six years old and Nia is almost four. Today they’re at the farm with Nia’s mom. Look at all the fruits and vegetables."`,
  ``,
  `<b>Conversation:</b>`,
  `A: What are they?`,
  `B: They’re cabbages.`
]
