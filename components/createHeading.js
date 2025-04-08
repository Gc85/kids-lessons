import { createElem } from './utils.js';

export function createHeading(lesson, heading, time1, time2) {
  const headElem = createElem('p', 'flex-head', '');
  const spanElem = createElem('span', 'span-heading', '');
  spanElem.textContent = heading;

  const timerImgElem = createElem('img', '', 'timer');
  timerImgElem.src = './images/timer-blue-black.svg';

  const timerBlockElem = createElem('span', 'timer-align', '');
  timerBlockElem.appendChild(timerImgElem);
  timerBlockElem.appendChild(createElem('br', '', ''));
  timerBlockElem.appendChild(document.createTextNode(lesson.review ? time2 : time1));

  headElem.appendChild(spanElem);
  headElem.appendChild(timerBlockElem);

  return headElem;
}
