import { createElem } from "./utils.js";

import { createGreetingSection } from '../components/createGreeting.js';
import { createPDFLinksSection } from '../components/createPDFLinks.js';
import { createOpeningSection } from '../components/createOpeningPic.js';
import { createBQSection } from '../components/createBasicQuestions.js';
import { createHelloSongSection } from '../components/createHelloSong.js';

export function createUnitWarmupSection(warmupSection, warmupH2Elem, lesson, book, level, type, bq) {

  warmupH2Elem.textContent = `Warmup Section`;
  warmupSection.appendChild(warmupH2Elem);

  warmupSection.appendChild(createGreetingSection(lesson));
  warmupSection.appendChild(createElem('hr', '', ''));

  warmupSection.appendChild(createPDFLinksSection(lesson));
  warmupSection.appendChild(createElem('hr', '', ''));

  warmupSection.appendChild(createOpeningSection(lesson, book, level));
  warmupSection.appendChild(createElem('hr', '', ''));

  if (level !== 'Kinder') {
    warmupSection.appendChild(createBQSection(lesson, bq));
  }

  if (level === 'Kinder' && type === 'Normal') {
    warmupSection.appendChild(createHelloSongSection());
    warmupSection.appendChild(createElem('hr', '', ''));
  }
  return warmupSection;
}
