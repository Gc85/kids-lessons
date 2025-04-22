import { createElem } from "./utils.js";

import { createListeningSection } from './createListening.js';
import { createReviewPhonicsSection } from './createReviewPhonics.js';
import { createPhonics1Section } from './createPhonics1.js';
import { createPhonics2Section } from './createPhonics2.js';
import { createReadingSection } from './createReading.js';
// import { createUnitReviewPhonics } from './createUnitReviewPhonics.js';

export function createUnitProductionSection(prodSection, prodH2Elem, lesson, book, level, type, phonics, plusPhonics, lessonsData) {

  prodH2Elem.textContent = `Production Section`;
  prodSection.appendChild(prodH2Elem);

  switch (level) {
    case "5":
      if (type !== "Plus") {
        prodSection.appendChild(createListeningSection(lesson, book, level));
        prodSection.appendChild(createElem('hr', '', ''));

        if (lesson.lessonNumber % 4 !== 1) {
          // prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonics, plusPhonics, lessonsData, type, book));
          prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonics, lessonsData, type, book));
          prodSection.appendChild(createElem('hr', '', ''));
        }

        prodSection.appendChild(createPhonics1Section(lesson, book, level, type, phonics));
        prodSection.appendChild(createElem('hr', '', ''));

        prodSection.appendChild(createPhonics2Section(lesson, book, level));
        prodSection.appendChild(createElem('hr', '', ''));
      } else {

        // prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonics, plusPhonics, lessonsData, type, book));
        prodSection.appendChild(createReviewPhonicsSection(lesson, level, phonics, lessonsData, type, book));
        prodSection.appendChild(createElem('hr', '', ''));


        prodSection.appendChild(createPhonics1Section(lesson, book, level, type, plusPhonics));
        prodSection.appendChild(createElem('hr', '', ''));

        prodSection.appendChild(createReadingSection(lesson, book, level));
        prodSection.appendChild(createElem('hr', '', ''));

        prodSection.appendChild(createListeningSection(lesson, book, level));
        prodSection.appendChild(createElem('hr', '', ''));
      }
      break;
    case "4":
      break;
    default:
      break;
  }

  return prodSection;
}
