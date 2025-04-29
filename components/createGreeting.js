import { createElem } from './utils.js';
import { createHeading } from './createHeading.js';

export function createGreetingSection(lesson, message) {
  const greetingDivElem = createElem('div', 'div-greeting', '');
  const greetingHeadElem = createHeading(lesson, `Greetings`, '2-4', '2-3');

  const greetingTextElem = createElem('p', '', '');
  greetingTextElem.innerHTML = message.join('<br>');

  greetingDivElem.appendChild(greetingHeadElem);
  greetingDivElem.appendChild(greetingTextElem);

  return greetingDivElem;
}
