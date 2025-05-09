import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createLisReadSpeakWriteSection(lesson, blockType, book, level, textMessage, audioMessage) {
  let imagesToUse, lenImages, heading;
  let readingTag = false;

  switch (blockType) {
    case 'Listening':
      heading = `Listening Quiz`;
      imagesToUse = lesson.listeningImages;
      lenImages = lesson.listeningImages.length;
      break;
    case 'Reading':
      audioMessage = ``;
      heading = `Reading Section`;
      imagesToUse = lesson.readingImages;
      lenImages = lesson.readingImages.length;
      break;
    case 'Speaking':
      audioMessage = ``;
      heading = `Speaking Section`;
      imagesToUse = lesson.speakingImages;
      lenImages = lesson.speakingImages.length;
      break;
    case 'Writing':
      audioMessage = ``;
      heading = `Writing Section`;
      imagesToUse = lesson.writingImages;
      lenImages = lesson.writingImages.length;
      break;
    default:
      break;
  }

  const blockDivElem = createElem('div', 'div-opening', '');
  const blockH2Elm = createHeading(lesson, heading, '2', '2');
  const blockImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const blockTextElem = createElem('p', 'main-text', '');
  blockTextElem.innerHTML = textMessage.join('<br>');

  imagesToUse.forEach((imageItem) => {
    let blockImgElem;
    (lenImages > 1) ? blockImgElem = createElem('img', 'image-medium', '') : blockImgElem = createElem('img', 'image-big', '');

    blockImgElem.src = `./assets/${book}/${level}/${imageItem}.jpg`;
    blockImgElem.onclick = () => { showSrcMedia(); };

    blockImgDiv.appendChild(blockImgElem);
  });

  const blockAudioPElem = createElem('p', 'audio', '');
  const blockAudioElem = createElem('audio', '', '');
  const blockAudioText = createElem('p', '', '');
  if (audioMessage) {
    blockAudioText.innerHTML = audioMessage;
    blockAudioPElem.appendChild(blockAudioText);

    blockAudioElem.src = `./assets/${book}/${level}/${lesson.listeningAudio}.mp3`;
    blockAudioPElem.appendChild(blockAudioElem);
  }

  const lessonRegEx = /3[A-Za-z]p/;
  const speakingTextElem = createElem('p', 'main-text', '');
  const pdfULElem = createElem('ul', 'pdf-link-group', '');
  if (blockType === 'Reading') {
    if (lesson.review && lessonRegEx.test(lesson.openingImage.slice(0,3))) {
      readingTag = true;
      speakingTextElem.innerHTML = `Please use the below PDF to do the Speaking part of the lesson:`;
      const pdfLIElem = createElem('li', '', '');
      const pdfLinkElem = createElem('a', 'pdf-link', '');
      pdfLinkElem.href = `./assets/pdfs/${lesson.pdfs[3].file}.pdf`;
      pdfLinkElem.target = `_blank`;
      pdfLinkElem.innerHTML = `${lesson.pdfs[3].desc}`;

      pdfLIElem.appendChild(pdfLinkElem);
      pdfULElem.appendChild(pdfLIElem);
    }
  }

  speakingTextElem.appendChild(pdfULElem);
  blockDivElem.appendChild(blockH2Elm);
  blockDivElem.appendChild(blockTextElem);
  blockDivElem.appendChild(blockImgDiv);
  (audioMessage) ? blockDivElem.appendChild(blockAudioPElem) : '';
  if (readingTag) {
    blockDivElem.appendChild(speakingTextElem);
  }

  return blockDivElem;
}
