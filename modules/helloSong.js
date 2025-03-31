import { createElem } from './utils.js';

export function createHelloSongSection() {
  const helloDivElem = createElem('div', 'div-hello', '');

  const helloSongHeadElem = createElem('h2', '', '');
  helloSongHeadElem.textContent = `Hello Song`;

  const helloSongDiv = createElem('div', 'flex-div flex-direction', '');
  const helloSongMessage = createElem('p', 'align-center', '');
  helloSongMessage.innerHTML = helloSongText.join('<br>');

  const helloSongElem = createElem('audio', '', '');
  helloSongElem.src = `./images/kinder-hello-song.mp3`;

  helloSongDiv.appendChild(helloSongMessage);
  helloSongDiv.appendChild(helloSongElem);

  helloDivElem.appendChild(helloSongHeadElem);
  helloDivElem.appendChild(helloSongDiv);

  return helloDivElem;
}

const helloSongText = [
  `<b>Let's sing our Hello Song.</b>`,
  ``,
  `A: Hello. Hello. Hello, how are you?`,
  `B: I'm fine. I'm fine. I hope that you are too.`,
  `<i>(Repeat verse)</i>`
];
