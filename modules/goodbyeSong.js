import { createElem } from './utils.js';

export function createGoodbyeSongSection() {
  const goodbyeDivElem = createElem('div', 'div-goodbye', '');

  const goodbyeSongHeadElem = createElem('h2', '', '');
  goodbyeSongHeadElem.textContent = `Goodbye Song`;

  const goodbyeSongDiv = createElem('div', 'flex-div flex-direction', '');
  const goodbyeSongMessage = createElem('p', 'align-center', '');
  goodbyeSongMessage.innerHTML = goodbyeSongText.join('<br>');

  const goodbyeSongElem = createElem('audio', '', '');
  goodbyeSongElem.src = `./images/kinder-goodbye-song.mp3`;

  goodbyeSongDiv.appendChild(goodbyeSongMessage);
  goodbyeSongDiv.appendChild(goodbyeSongElem);

  goodbyeDivElem.appendChild(goodbyeSongHeadElem);
  goodbyeDivElem.appendChild(goodbyeSongDiv);

  return goodbyeDivElem;
}

const goodbyeSongText = [
  `<b>Let's sing our Goodbye Song.</b>`,
  ``,
  `Goodbye. Goodbye. It's time to go home.`,
  `We had fun, lots of fun but it's time to go home.`,
  `I'll, see you soon.`,
  `<i>(Repeat verse)</i>`
];
