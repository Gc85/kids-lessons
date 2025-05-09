import { createElem } from "./utils.js";
import { listeningTextMessage,
  phonicsTextMessage,
  phonics1PlusTextMessage,
  phonics2TextMessage,
  phonics3TextMessage,
  phonicsPlusTextMessage,
  readingTextMessage,
  speakingTextMessage,
  writingTextMessage,
  audioMessage } from "./messages.js";

import { createHeading } from "./createHeading.js";

import { createReviewPhonicsSection } from "./createReviewPhonics.js";
import { createPhonics1Section } from "./createPhonics1.js";
import { createPhonics2Section } from "./createPhonics2.js";
import { createLisReadSpeakWriteSection } from "./createLisReadSpeakWrite.js";
import { createUnitReviewPhonics } from "./createUnitReviewPhonics.js";
import { createVocabGamesSection } from "./createVocabGames.js";
import { createPhonicsGamesSection } from "./createPhonicsGames.js";

export function createUnitProductionSection(prodSection, prodH2Elem, lesson, book, level, type, lessonPhonics, lessonsData) {
  let heading, partNumber, phonicsAudio, blockType;

  prodH2Elem.textContent = `Production Section`;
  prodSection.appendChild(prodH2Elem);

  switch (level) {
    case "5":
      if (type !== "Plus") {
        blockType = `Listening`;
        prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
        prodSection.appendChild(createElem("hr", "", ""));

        if (lesson.lessonNumber % 4 !== 1) {
          prodSection.appendChild(createReviewPhonicsSection(lesson, level, lessonPhonics, lessonsData, type, book));
          prodSection.appendChild(createElem("hr", "", ""));
        }
        if (!lesson.review) {
          heading = `Today's Phonics`;
          prodSection.appendChild(createPhonics1Section(lesson, book, level, type, heading, lessonPhonics));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Today's Phonics - Part 2`;
          partNumber = 2;
          prodSection.appendChild(createPhonics2Section(lesson, book, level, heading, phonicsTextMessage, audioMessage, partNumber));
          prodSection.appendChild(createElem("hr", "", ""));

          // Needs to be reworked, cannot function in current state due to hard-coded data in game files.
          // heading = `Phonics Games`;
          // prodSection.appendChild(createPhonicsGameBlock(lesson, lessonsData, level, type, book, heading));
          // prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));

        } else {
          heading = `Phonics 1: Letters`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics1PlusTextMessage, audioMessage, lesson.phonics1Images, phonicsAudio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Phonics 2: Letters and Sounds`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics2TextMessage, audioMessage, lesson.phonics2Images, lesson.phonics2Audio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Phonics 3: Write`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics3TextMessage, audioMessage, lesson.phonics3Images, lesson.phonics3Audio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Phonics 4: Write Some More`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics3TextMessage, audioMessage, lesson.phonics4Images, lesson.phonics4Audio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        }
      } else {
        prodSection.appendChild(createReviewPhonicsSection(lesson, level, lessonPhonics, lessonsData, type, book));
        prodSection.appendChild(createElem("hr", "", ""));

        if (!lesson.review) {
          heading = `Today's Phonics`;
          prodSection.appendChild(createPhonics1Section(lesson, book, level, type, heading, lessonPhonics));
          prodSection.appendChild(createElem("hr", "", ""));
        } else {
          heading = `Phonics`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonicsPlusTextMessage, audioMessage, lesson.phonics1Images, phonicsAudio));
          prodSection.appendChild(createElem("hr", "", ""));
        }
        blockType = `Reading`;
        prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, readingTextMessage, audioMessage));
        prodSection.appendChild(createElem("hr", "", ""));

        blockType = `Listening`;
        prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
        prodSection.appendChild(createElem("hr", "", ""));

        heading = `Vocab Games`;
        prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
      }
      break;
    case "4":
      if (type !== "Plus") {
        blockType = `Listening`;
        prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
        prodSection.appendChild(createElem("hr", "", ""));

        if (lesson.lessonNumber % 4 !== 1) {
          prodSection.appendChild(createReviewPhonicsSection(lesson, level, lessonPhonics, lessonsData, type, book));
          prodSection.appendChild(createElem("hr", "", ""));
        }
        if (!lesson.review) {
          heading = `Today's Phonics`;
          prodSection.appendChild(createPhonics1Section(lesson, book, level, type, heading, lessonPhonics));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Today's Phonics - Part A`;
          partNumber = 2;
          prodSection.appendChild(createPhonics2Section(lesson, book, level, heading, phonicsTextMessage, audioMessage, partNumber));
          prodSection.appendChild(createElem("hr", "", ""));

          if (lesson.lessonNumber % 4 !== 1) {
            heading = `Today's Phonics - Part B`;
            partNumber = 3;
            prodSection.appendChild(createPhonics2Section(lesson, book, level, heading, phonicsTextMessage, audioMessage, partNumber));
            prodSection.appendChild(createElem("hr", "", ""));
          }

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        } else {
          heading = `Phonics 1: Letters`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics1PlusTextMessage, audioMessage, lesson.phonics1Images, phonicsAudio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Phonics 2: Letters and Sounds`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics2TextMessage, audioMessage, lesson.phonics2Images, lesson.phonics2Audio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Phonics 3: Write`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics3TextMessage, audioMessage, lesson.phonics3Images, lesson.phonics3Audio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        }
      } else {
        if (!lesson.review) {
          prodSection.appendChild(createReviewPhonicsSection(lesson, level, lessonPhonics, lessonsData, type, book));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Today's Phonics`;
          prodSection.appendChild(createPhonics1Section(lesson, book, level, type, heading, lessonPhonics));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Reading`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, readingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Listening`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        } else {
          prodSection.appendChild(createReviewPhonicsSection(lesson, level, lessonPhonics, lessonsData, type, book));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Reading`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, readingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Listening`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        }
      }
      break;
    case "3":
      if (type !== "Plus") {
        if (!lesson.review) {
          blockType = `Listening`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Writing`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, writingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Reading`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, readingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        } else {
          blockType = `Listening`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Speaking`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, speakingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Writing`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, writingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        }
      } else {
        if (!lesson.review) {
          blockType = `Listening`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Writing`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, writingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Reading`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, readingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        } else {
          blockType = `Listening`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, listeningTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Reading`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, readingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          blockType = `Writing`;
          prodSection.appendChild(createLisReadSpeakWriteSection(lesson, blockType, book, level, writingTextMessage, audioMessage));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Vocab Games`;
          prodSection.appendChild(createVocabGamesBlock(lesson, lessonsData, level, type, book, heading));
        }
      }
      break;
    default:
      break;
  }

  return prodSection;
}


function createPhonicsGameBlock(lesson, lessonsData, level, type, book, heading) {
  const gameDivElem = createElem('div', 'div-opening', '');
  const gameH2Elm = createHeading(lesson, heading, '3', '3');

  gameDivElem.appendChild(gameH2Elm);

  const gamePElem = createElem('p', 'main-text align-center', '');
  gameDivElem.appendChild(gamePElem);
  const gameFileNames = [
    'Game-TicTacToe-ABC',
    'Game-Memory-ABC'
  ];
  gameFileNames.forEach((gameFileName) => {
    gameDivElem.appendChild(createPhonicsGamesSection(lesson, lessonsData, level, type, book, gameFileName));

    // Search for the Timer SPAN so it can be deleted
    const spansToDelete = gameDivElem.querySelectorAll('span.timer-align');
    // Convert NodeList to an array
    const spansArray = Array.from(spansToDelete);
    // Skip the first one and remove the rest
    spansArray.slice(1).forEach(span => span.remove());
  });

  return gameDivElem;

}

function createVocabGamesBlock(lesson, lessonsData, level, type, book, heading) {

  const gameDivElem = createElem('div', 'div-opening', '');
  const gameH2Elm = createHeading(lesson, heading, '3', '3');

  gameDivElem.appendChild(gameH2Elm);

  const gamePElem = createElem('p', 'main-text align-center', '');
  gameDivElem.appendChild(gamePElem);
  const gameFileNames = [
    'Game-RotateAndStop',
    'Game-TicTacToe',
    'Game-Memory'
  ];
  gameFileNames.forEach((gameFileName) => {
    gameDivElem.appendChild(createVocabGamesSection(lesson, lessonsData, level, type, book, gameFileName));

    // Search for the Timer SPAN so it can be deleted
    const spansToDelete = gameDivElem.querySelectorAll('span.timer-align');
    // Convert NodeList to an array
    const spansArray = Array.from(spansToDelete);
    // Skip the first one and remove the rest
    spansArray.slice(1).forEach(span => span.remove());
  });

  return gameDivElem;
}
