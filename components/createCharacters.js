import { createElem } from './utils.js';
import { createHeading } from './createHeading.js';

export function createCharactersSection(lesson, book, level, characters) {
  const characterDivElem = createElem('div', 'div-characters', '');
  const characterHeadElem = createHeading(lesson, `Characters`, '1', '1');

  const charImgDiv = createElem('div', 'flex-div flex-wrap', '');

  characters.forEach(character => {
    const charInsideDivElem = createElem('div', 'div-img', '');
    const charImgElem = createElem('img', 'image-small', '');
    charImgElem.src = `./assets/${book}/${level}/chars/${character}.jpg`;
    charImgElem.onclick = () => { showSrcMedia(); };
    charInsideDivElem.appendChild(charImgElem);

    charImgDiv.appendChild(charInsideDivElem);
  });

  characterDivElem.appendChild(characterHeadElem);
  characterDivElem.appendChild(charImgDiv);

  return characterDivElem;
}
