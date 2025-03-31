import { createElem } from './utils.js';

export function createGreetingsSection(lesson) {
  const greetingsDivElem = createElem('div', 'div-greeting', '');
  const greetingHeadElem = createElem('p', 'flex-head-greeting', '');
  const greetingSpanElem = createElem('span', 'span-heading', '');
  greetingSpanElem.innerHTML = `Greetings`;

  const timerImgElem = createElem('img', '', 'timer');
  timerImgElem.src = './images/timer-blue-black.svg';

  const timerBlockElem = createElem('span', 'timer-align', '');
  timerBlockElem.appendChild(timerImgElem);
  timerBlockElem.appendChild(createElem('br', '', ''));
  timerBlockElem.appendChild(document.createTextNode(lesson.review ? '2-3' : '2-4'));

  greetingHeadElem.appendChild(greetingSpanElem);
  greetingHeadElem.appendChild(timerBlockElem);

  const greetingTextElem = createElem('p', '', '');
  greetingTextElem.innerHTML = greetingMessage.join('<br>');

  greetingsDivElem.appendChild(greetingHeadElem);
  greetingsDivElem.appendChild(greetingTextElem);

  return greetingsDivElem;
}

const greetingMessage = [
  `<b>Hello, my name's (Joe).`,
  `What's your name?`,
  `Nice to meet you.</b> <i>(Shake hands)</i>`,
  ``,
  `<b>Aim:</b> Introduce self, get students' names, do basic greetings. Greet students naturally.`
]
