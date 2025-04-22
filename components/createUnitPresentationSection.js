import { createElem } from "./utils.js";

import { createPictureSpeculationSection } from './createPictureSpeculation.js';
import { createSayDialogueSection } from './createSayDialogue.js';
import { createTodaysLanguageSection } from './createTodaysLanguage.js';
import { createTodaysVocabularySection } from './createVocabulary.js';

export function createUnitPresentationSection(presentationSection, lesson, isReview, book, level, vocab) {

  if (isReview) {
    const reviewHeadH3Elem = createElem('h3', 'review-head', '');
    const splitTitle = lesson.title.replace(/:\s*/, ':<br>');
    reviewHeadH3Elem.innerHTML = `${splitTitle}`;
    presentationSection.appendChild(reviewHeadH3Elem);
  }
  
  presentationSection.appendChild(createPictureSpeculationSection(lesson, book, level));
  if (lesson.lessonNumber !== 4) {
    presentationSection.appendChild(createElem('hr', '', ''));

    presentationSection.appendChild(createSayDialogueSection(lesson, book, level));
    presentationSection.appendChild(createElem('hr', '', ''));

    presentationSection.appendChild(createTodaysLanguageSection(lesson, book, level));
    presentationSection.appendChild(createElem('hr', '', ''));

    presentationSection.appendChild(createTodaysVocabularySection(lesson, book, level, vocab));
    !isReview ? presentationSection.appendChild(createElem('hr', '', '')) : '';
  } 
  return presentationSection;
}
