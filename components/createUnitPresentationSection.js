import { createElem } from "./utils.js";

import { createPictureSpeculationSection } from './createPictureSpeculation.js';
import { createSayDialogueSection } from './createSayDialogue.js';
import { createTodaysLanguageSection } from './createTodaysLanguage.js';
import { createTodaysVocabularySection } from './createVocabulary.js';

export function createUnitPresentationSection(presentationSection, lesson, isReview, book, level, type, vocab) {

  let textMessage, audioMessage;

  if (isReview) {
    const reviewHeadH3Elem = createElem('h3', 'review-head', '');
    const splitTitle = lesson.title.replace(/:\s*/, ':<br>');
    reviewHeadH3Elem.innerHTML = `${splitTitle}`;
    presentationSection.appendChild(reviewHeadH3Elem);
  }

  presentationSection.appendChild(createPictureSpeculationSection(lesson, book, level));
  if (lesson.lessonNumber !== 4) {
    presentationSection.appendChild(createElem('hr', '', ''));

    textMessage = [
      `Let's practice the conversation!`,
      `<b>Aim:</b> <em>Practice saying the dialogue.</em>`
    ];
    presentationSection.appendChild(createSayDialogueSection(lesson, book, level, textMessage));
    presentationSection.appendChild(createElem('hr', '', ''));

    textMessage = [
      `<b>Aim:</b> <em>Present target language in context.</em>`
    ];
    presentationSection.appendChild(createTodaysLanguageSection(lesson, book, level, textMessage));
    presentationSection.appendChild(createElem('hr', '', ''));

    textMessage = [
      `<b>Aim:</b> <em>Present flashcards and practice saying the target language.</em>`
    ];
    audioMessage = [
      `<em>Play audio and sing along with the students.</em>`
    ];
    presentationSection.appendChild(createTodaysVocabularySection(lesson, book, level, vocab, textMessage, audioMessage));
    if (isReview) {
      if (type !== "Plus" || lesson.lessonNumber !== 3) {
        presentationSection.appendChild(createElem('hr', '', ''));
      }
    }
  }
  return presentationSection;
}
