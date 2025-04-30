import { createElem } from "./utils.js";
import { listeningTextMessage,
  phonicsTextMessage,
  phonics1PlusTextMessage,
  phonics2TextMessage,
  phonics3TextMessage,
  phonicsPlusTextMessage,
  readingTextMessage,
  audioMessage } from "./messages.js";

import { createListeningSection } from "./createListening.js";
import { createReviewPhonicsSection } from "./createReviewPhonics.js";
import { createPhonics1Section } from "./createPhonics1.js";
import { createPhonics2Section } from "./createPhonics2.js";
import { createReadingSection } from "./createReading.js";
import { createUnitReviewPhonics } from "./createUnitReviewPhonics.js";

export function createUnitProductionSection(prodSection, prodH2Elem, lesson, book, level, type, lessonPhonics, lessonsData) {
  // let heading, , , phonicsTextMessage, , phonicsAudioMessage, partNumber;
  // let ,;
  let heading, partNumber, phonicsAudio;

  prodH2Elem.textContent = `Production Section`;
  prodSection.appendChild(prodH2Elem);

  switch (level) {
    case "5":
      if (type !== "Plus") {
        prodSection.appendChild(createListeningSection(lesson, book, level, listeningTextMessage, audioMessage));
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
        prodSection.appendChild(createReadingSection(lesson, book, level, readingTextMessage));
        prodSection.appendChild(createElem("hr", "", ""));

        prodSection.appendChild(createListeningSection(lesson, book, level, listeningTextMessage, audioMessage));
      }
      break;
    case "4":
      if (type !== "Plus") {
        debugger;
        prodSection.appendChild(createListeningSection(lesson, book, level, listeningTextMessage, audioMessage));
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
        } else {
          heading = `Phonics 1: Letters`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics1PlusTextMessage, audioMessage, lesson.phonics1Images, phonicsAudio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Phonics 2: Letters and Sounds`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics2TextMessage, audioMessage, lesson.phonics2Images, lesson.phonics2Audio));
          prodSection.appendChild(createElem("hr", "", ""));

          heading = `Phonics 3: Write`;
          prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics3TextMessage, audioMessage, lesson.phonics3Images, lesson.phonics3Audio));
          // prodSection.appendChild(createElem("hr", "", ""));

          // heading = `Phonics 4: Write Some More`;
          // prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, phonics3TextMessage, audioMessage, lesson.phonics4Images, lesson.phonics4Audio));
        }


      } else {
        prodSection.appendChild(createReviewPhonicsSection(lesson, level, lessonPhonics, lessonsData, type, book));
        prodSection.appendChild(createElem("hr", "", ""));

        heading = `Today's Phonics`;
        prodSection.appendChild(createPhonics1Section(lesson, book, level, type, heading, plusPhonics));
        prodSection.appendChild(createElem("hr", "", ""));

        prodSection.appendChild(createReadingSection(lesson, book, level, readingTextMessage));
        prodSection.appendChild(createElem("hr", "", ""));

        prodSection.appendChild(createListeningSection(lesson, book, level, lisTextMessage, audioMessage));
        prodSection.appendChild(createElem("hr", "", ""));
      }
      break;
    default:
      break;
  }

  return prodSection;
}
