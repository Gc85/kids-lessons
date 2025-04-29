import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createTodaysVocabularySection(lesson, book, level, vocab, textMessage, audioMessage) {

  const vocabDivElem = createElem('div', 'div-opening', '');
  const vocabH2Elm = createHeading(lesson, `Vocabulary`, '2', '2');
  const vocabImgDiv = createElem('div', 'flex-div flex-wrap flex-justify-evenly', '');

  const vocabTextElem = createElem('p', 'main-text', '');
  vocabTextElem.innerHTML = textMessage;

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
  const vocabAudioText = createElem('p', '', '');
  vocabAudioText.innerHTML = audioMessage;
  vocabAudioPElem.appendChild(vocabAudioText);

  vocabAudioElem.src = `./assets/${book}/${level}/${lesson.vocabAudio}.mp3`;
  vocabAudioPElem.appendChild(vocabAudioElem);

  vocabDivElem.appendChild(vocabH2Elm);
  vocabDivElem.appendChild(vocabTextElem);
  vocabDivElem.appendChild(vocabImgDiv);
  vocabDivElem.appendChild(vocabAudioPElem);

  return vocabDivElem;
}
