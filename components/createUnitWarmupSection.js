import { createElem } from "./utils.js";

import { createGreetingSection } from '../components/createGreeting.js';
import { createPDFLinksSection } from '../components/createPDFLinks.js';
import { createOpeningSection } from '../components/createOpeningPic.js';
import { createBQSection } from '../components/createBasicQuestions.js';
import { createHelloSongSection } from '../components/createHelloSong.js';

export function createUnitWarmupSection(warmupSection, warmupH2Elem, lesson, book, level, type, bq) {

  let message;
  warmupH2Elem.textContent = `Warmup Section`;
  warmupSection.appendChild(warmupH2Elem);

  message = [
    `<b>Hello, my name's (Joe).`,
    `What's your name?`,
    `Nice to meet you.</b>`,
    ``,
    `<b>Aim:</b> <em>Introduce self, get students' names, do basic greetings. Greet students naturally.</em>`
  ];
  warmupSection.appendChild(createGreetingSection(lesson, message));
  warmupSection.appendChild(createElem('hr', '', ''));

  message = [
    `<b>Useful PDFs:</b>`
  ];
  warmupSection.appendChild(createPDFLinksSection(lesson, message));
  warmupSection.appendChild(createElem('hr', '', ''));

  message = [
    `<b>Aim:</b> <em>Introduce today's lesson to the students.</em>`
  ];
  warmupSection.appendChild(createOpeningSection(lesson, book, level, message));
  warmupSection.appendChild(createElem('hr', '', ''));

  if (level !== 'Kinder') {
    message = [
      `<b>Aim:</b> <em>Show a flashcard and ask the students introduction questions.</em>`
    ]
    warmupSection.appendChild(createBQSection(lesson, bq, message));
  }

  if (level === 'Kinder' && type === 'Normal') {
    message = [
      `<b>Let's sing our Hello Song.</b>`,
      ``,
      `A: Hello. Hello. Hello, how are you?`,
      `B: I'm fine. I'm fine. I hope that you are too.`,
      `<i>(Repeat verse)</i>`
    ];
    warmupSection.appendChild(createHelloSongSection(message));
    warmupSection.appendChild(createElem('hr', '', ''));
  }
  return warmupSection;
}
