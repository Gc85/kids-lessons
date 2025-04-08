import { createElem } from './utils.js';
import { createHeading } from './createHeading.js';

export function createGoodbyeSection(lesson) {
  const goodbyeDivElem = createElem('div', 'div-goodbye', '');
  const goodbyeHeadElem = createHeading(lesson, `Goodbye`, '1', '1');

  const goodbyeTextElem = createElem('p', '', '');
  goodbyeTextElem.innerHTML = goodbyeMessage.join('<br>');

  goodbyeDivElem.appendChild(goodbyeHeadElem);
  goodbyeDivElem.appendChild(goodbyeTextElem);

  return goodbyeDivElem;
}

const goodbyeMessage = [
  `<b>It's time to go now!</b>`,
  ``,
  `<b>Aim:</b> <em>Direct students to the Home Study section at the back of the book that needs to be completed by the next lesson. Say farewell to students.</em>`
]
