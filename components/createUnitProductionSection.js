import { createElem } from "./utils.js";

import { createListeningSection } from './createListening.js';
import { createReviewPhonicsSection } from './createReviewPhonics.js';
import { createPhonics1Section } from './createPhonics1.js';
import { createPhonics2Section } from './createPhonics2.js';
import { createReadingSection } from './createReading.js';
import { createUnitReviewPhonics } from './createUnitReviewPhonics.js';

export function createUnitProductionSection(prodSection, prodH2Elem, lesson, book, level, type, phonicsFor5, phonicsFor4, plusPhonics, lessonsData) {

  let lisTextMessage, readTextMessage, phonicsTextMessage, lisAudioMessage, phonicsAudioMessage, partNumber;
  let heading, phonicsAudio;
  lisTextMessage = [
    `<b>Aim:</b> <em>Practice listening comprehension.</em>`
  ];

  lisAudioMessage = [
    `<em>Pause audio after each answer. Confirm correct answer before continuing.</em>`
  ];

  readTextMessage = [
    `<b>Aim:</b> <em>Practice reading comprehension.</em>`
  ];

  prodH2Elem.textContent = `Production Section`;
  prodSection.appendChild(prodH2Elem);

  switch (level) {
    case "5":
      if (type !== "Plus") {

        prodSection.appendChild(createListeningSection(lesson, book, level, lisTextMessage, lisAudioMessage));
        prodSection.appendChild(createElem('hr', '', ''));

        if (lesson.lessonNumber % 4 !== 1) {
          prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonicsFor5, phonicsFor4, plusPhonics, lessonsData, type, book));
          prodSection.appendChild(createElem('hr', '', ''));
        }

        if (!lesson.review) {
          prodSection.appendChild(createPhonics1Section(lesson, book, level, type, phonicsFor5, phonicsFor4));
          prodSection.appendChild(createElem('hr', '', ''));

          heading = `Today's Phonics - Part 2`;
          phonicsTextMessage = [
            `<b>Let's practice today's letters and sounds!</b>`,
            ``,
            `<b>Aim:</b> <em>Present the Phonics quiz and practice the phonics with students.</em>`
          ];
          phonicsAudioMessage = [
            `<em>Pause audio after each answer. Confirm correct answer before continuing.</em>`
          ];
          partNumber = 2;
          prodSection.appendChild(createPhonics2Section(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, partNumber));
          prodSection.appendChild(createElem('hr', '', ''));
        } else {

          heading = `Phonics 1: Letters`;
          phonicsTextMessage = [
            `<b>Let's say the words together!</b>`,
            ``,
            `<b>Aim:</b> <em>Use the reviewed phonics to build 3-letter words focusing on the proper pronuncitation sounds of letters, not the letter itself.</em>`
          ];
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, lesson.phonics1Images, phonicsAudio));
          prodSection.appendChild(createElem('hr', '', ''));

          heading = `Phonics 2: Letters and Sounds`;
          phonicsTextMessage = [
            `<b>Let's say the words together!</b>`,
            ``,
            `<b>Aim:</b> <em>Review the letters and sounds taught in the previous 3 lessons of the course.</em>`
          ];
          phonicsAudioMessage = [
            `<em>Pause audio and confirm correct answer before continuing.</em>`
          ];
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, lesson.phonics2Images, lesson.phonics2Audio));
          prodSection.appendChild(createElem('hr', '', ''));

          heading = `Phonics 3: Write`;
          phonicsTextMessage = [
            `<b>Let's say the words together!</b>`,
            ``,
            `<b>Aim:</b> <em>Students listen to the audio and write the correct letters in their books.</em>`
          ];
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, lesson.phonics3Images, lesson.phonics3Audio));
          prodSection.appendChild(createElem('hr', '', ''));

          heading = `Phonics 4: Write Some More`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, lesson.phonics4Images, lesson.phonics4Audio));
        }

      } else {
        prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonicsFor5, phonicsFor4, plusPhonics, lessonsData, type, book));
        prodSection.appendChild(createElem('hr', '', ''));

        if (!lesson.review) {
          prodSection.appendChild(createPhonics1Section(lesson, book, level, type, plusPhonics));
          prodSection.appendChild(createElem('hr', '', ''));
        } else {
          heading = `Phonics`;
          phonicsTextMessage = [
            `<b>Let's say the words together!</b>`,
            ``,
            `<b>Aim:</b> <em>Help students find the matches to the phonics.</em>`
          ];
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, lesson.phonics1Images, phonicsAudio));
          prodSection.appendChild(createElem('hr', '', ''));
        }
        prodSection.appendChild(createReadingSection(lesson, book, level, readTextMessage));
        prodSection.appendChild(createElem('hr', '', ''));

        prodSection.appendChild(createListeningSection(lesson, book, level, lisTextMessage, lisAudioMessage));
      }
      break;
    case "4":
      if (type !== "Plus") {
        debugger;
        prodSection.appendChild(createListeningSection(lesson, book, level, lisTextMessage, lisAudioMessage));
        prodSection.appendChild(createElem('hr', '', ''));

        if (lesson.lessonNumber % 4 !== 1) {
          prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonicsFor5, phonicsFor4, plusPhonics, lessonsData, type, book));
          prodSection.appendChild(createElem('hr', '', ''));
        }

        prodSection.appendChild(createPhonics1Section(lesson, book, level, type, phonicsFor5, phonicsFor4));
        prodSection.appendChild(createElem('hr', '', ''));

        heading = `Today's Phonics - Part A`;
        phonicsTextMessage = [
          `<b>Let's practice today's letters and sounds!</b>`,
          ``,
          `<b>Aim:</b> <em>Present the Phonics quiz and practice the phonics with students.</em>`
        ];
        phonicsAudioMessage = [
          `<em>Pause audio after each answer. Confirm correct answer before continuing.</em>`
        ];
        partNumber = 2;
        prodSection.appendChild(createPhonics2Section(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, partNumber));
        prodSection.appendChild(createElem('hr', '', ''));

        if (lesson.lessonNumber % 4 !== 1) {
          heading = `Today's Phonics - Part B`;
          partNumber = 3;
          prodSection.appendChild(createPhonics2Section(lesson, book, level, heading, phonicsTextMessage, phonicsAudioMessage, partNumber));
          prodSection.appendChild(createElem('hr', '', ''));
        }
      } else {
        prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonicsFor5, phonicsFor4, plusPhonics, lessonsData, type, book));
        prodSection.appendChild(createElem('hr', '', ''));

        prodSection.appendChild(createPhonics1Section(lesson, book, level, type, plusPhonics));
        prodSection.appendChild(createElem('hr', '', ''));

        prodSection.appendChild(createReadingSection(lesson, book, level, readTextMessage));
        prodSection.appendChild(createElem('hr', '', ''));

        prodSection.appendChild(createListeningSection(lesson, book, level, lisTextMessage, lisAudioMessage));
        prodSection.appendChild(createElem('hr', '', ''));
      }
      break;
    default:
      break;
  }

  return prodSection;
}
