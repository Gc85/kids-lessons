import { createElem } from './utils.js';
import { createHeading } from './createHeading.js';

export function createGreetingSection(lesson) {
  const greetingDivElem = createElem('div', 'div-greeting', '');
  const greetingHeadElem = createHeading(lesson, `Greetings`, '2-4', '2-3');

  const greetingTextElem = createElem('p', '', '');
  greetingTextElem.innerHTML = greetingMessage.join('<br>');

  greetingDivElem.appendChild(greetingHeadElem);
  greetingDivElem.appendChild(greetingTextElem);

  return greetingDivElem;
}

const greetingMessage = [
  `<b>Hello, my name's (Joe).`,
  `What's your name?`,
  `Nice to meet you.</b>`,
  ``,
  `<b>Aim:</b> <em>Introduce self, get students' names, do basic greetings. Greet students naturally.</em>`
]
