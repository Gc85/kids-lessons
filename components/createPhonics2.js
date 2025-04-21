import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createPhonics2Section(lesson, book, level) {

  const phonics2DivElem = createElem('div', 'div-opening', '');
  const phonics2H2Elm = createHeading(lesson, `Today's Phonics - Part 2`, '2', '2');
  const phonics2ImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const phonics2TextElem = createElem('p', 'main-text', '');
  phonics2TextElem.innerHTML = phonics2Message.join('<br>');

  lesson.phonics2Images.forEach((phonics2Item) => {

    const phonics2ImgElem = createElem('img', 'image-small', '');
    phonics2ImgElem.src = `./assets/${book}/${level}/${phonics2Item}.jpg`;
    phonics2ImgElem.onclick = () => { showSrcMedia(); };

    phonics2ImgDiv.appendChild(phonics2ImgElem);
  });

  const phonics2AudioPElem = createElem('p', 'audio', '');
  const phonics2AudioElem = createElem('audio', '', '');
  const phonics2AudioText = createElem('p', '', '');
  phonics2AudioText.innerHTML = phonics2AudioMessage;
  phonics2AudioPElem.appendChild(phonics2AudioText);

  phonics2AudioElem.src = `./assets/${book}/${level}/${lesson.phonics2Audio}.mp3`;
  phonics2AudioPElem.appendChild(phonics2AudioElem);

  phonics2DivElem.appendChild(phonics2H2Elm);
  phonics2DivElem.appendChild(phonics2TextElem);
  phonics2DivElem.appendChild(phonics2ImgDiv);
  phonics2DivElem.appendChild(phonics2AudioPElem);

  return phonics2DivElem;
}

const phonics2Message = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>Present the Phonics quiz and practice the phonics with students.</em>`
]

const phonics2AudioMessage = [
  `<em>The students indicate which picture matches the audio. Pause audio after each answer. Confirm correct answer before continuing.</em>`
]
