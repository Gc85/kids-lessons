import { createElem } from './utils.js';

export function createHelloSongSection(message) {
  const helloDivElem = createElem('div', 'div-hello', '');

  const helloSongHeadElem = createElem('h2', '', '');
  helloSongHeadElem.textContent = `Hello Song`;

  const helloSongDiv = createElem('div', 'flex-div flex-direction', '');
  const helloSongMessage = createElem('p', 'align-center', '');
  helloSongMessage.innerHTML = message.join('<br>');

  const helloSongElem = createElem('audio', '', '');
  helloSongElem.src = `./assets/kinder-hello-song.mp3`;

  helloSongDiv.appendChild(helloSongMessage);
  helloSongDiv.appendChild(helloSongElem);

  helloDivElem.appendChild(helloSongHeadElem);
  helloDivElem.appendChild(helloSongDiv);

  return helloDivElem;
}
