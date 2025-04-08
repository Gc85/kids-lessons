import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createTodaysLanguageSection(lesson, book, level) {

  const todayLangDivElem = createElem('div', 'div-opening', '');
  const todayLangH2Elm = createHeading(lesson, `Today's Language`, '1', '1');
  const todayLangImgDiv = createElem('div', 'flex-div', '');

  const todayLangTextElem = createElem('p', 'main-text', '');
  todayLangTextElem.innerHTML = todayLangMessage;

  const todayLangImgElem = createElem('img', 'image-big', '');
  todayLangImgElem.src = `./images/${book}/${level}/${lesson.todayLangImage}.jpg`;
  todayLangImgElem.onclick = () => { showSrcMedia(); };

  todayLangImgDiv.appendChild(todayLangImgElem);

  todayLangDivElem.appendChild(todayLangH2Elm);
  todayLangDivElem.appendChild(todayLangTextElem);
  todayLangDivElem.appendChild(todayLangImgDiv);

  return todayLangDivElem;
}

const todayLangMessage = [
  `<b>Aim:</b> <em>Present target language in context.</em>`
]
