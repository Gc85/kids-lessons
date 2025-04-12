import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createTodaysVocabularySection(lesson, book, level, vocab) {

  const vocabDivElem = createElem('div', 'div-opening', '');
  const vocabH2Elm = createHeading(lesson, `Vocabulary`, '2', '2');
  const vocabImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const vocabTextElem = createElem('p', 'main-text', '');
  vocabTextElem.innerHTML = vocabMessage;

  lesson.vocabImages.forEach((vocabItem) => {
    const findVocab = vocab.vocabularyImages.find(v => v.id === vocabItem);

    if (findVocab) {
      const vocabImgElem = createElem('img', 'image-small', '');
      vocabImgElem.src = `./assets/${book}/${level}/${vocabItem}.jpg`;
      vocabImgElem.onclick = () => { showSrcMedia(); };

      vocabImgDiv.appendChild(vocabImgElem);
    }
  });

  const vocabAudioPElem = createElem('p', 'audio', '');
  const vocabAudioElem = createElem('audio', '', '');
  vocabAudioElem.src = `./assets/${book}/${level}/${lesson.vocabAudio}.mp3`;
  vocabAudioPElem.innerHTML = vocabAudioMessage;
  vocabAudioPElem.appendChild(vocabAudioElem);

  vocabDivElem.appendChild(vocabH2Elm);
  vocabDivElem.appendChild(vocabTextElem);
  vocabDivElem.appendChild(vocabImgDiv);
  vocabDivElem.appendChild(vocabAudioPElem);

  return vocabDivElem;
}

const vocabMessage = [
  `<b>Aim:</b> <em>Present flashcards and practice saying the target language.</em>`
]

const vocabAudioMessage = [
  `<em>Play audio and sing along with the students.</em>`
]
