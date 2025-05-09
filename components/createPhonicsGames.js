import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createPhonicsGamesSection(lesson, lessonsData, level, type, book, activityName) {

  debugger;
  // Global variables needed in order for Games to load images properly
  window.todaysPhonics = [];
  // window.picPath = `../assets/phonics/CL5/P-${book}/${level}/`;
  window.picPath = ``;

  (lesson.lessonNumber.toString().length === 1) ? window.les_number = "0" + lesson.lessonNumber.toString() : window.les_number = lesson.lessonNumber.toString();

  switch (book) {
    case "A":
    case "B":
      window.picPath = `../assets/phonics/CL5/P-AB/`;
      break;
    case "C":
    case "D":
      window.picPath = `../assets/phonics/CL5/P-CD/`;
      break;
    case "E":
    case "F":
      window.picPath = `../assets/phonics/CL5/P-EF/`;
      break;
  }

  let heading, gameAim;
  switch (activityName) {
    case "Game-TicTacToe-ABC":
      heading = `Tic Tac Toe ABC`;
      gameAim = `<b>Aim:</b> <em>The winner is the first to make a line of three.`;
      break;
    case "Game-Memory-ABC":
      heading = `Memory ABC`;
      gameAim = `<b>Aim:</b> <em>The student chooses two numbers to find a matching pair of flashcards.`;
      break;
    default:
      break;
  }

  const gameDivElem = createElem('div', `game-div`, '');

  if (!lesson.review) {
    lesson.phonics1Images.forEach((phonicItem) => {
      window.todaysPhonics.push(phonicItem);
    });
  } else {
    for (const reviewLesson of lesson.reviewLessons) {
      const getReviewLesson = lessonsData[level][type][book].find(
        rl => rl.lessonNumber === reviewLesson
      );
      getReviewLesson.phonics1Images.forEach((phonicItem) => {
        window.todaysPhonics.push(phonicItem);
      });
    }
  }

  const gamePElem = createElem('p', 'game-name', '');
  const gameToLoad = createHeading(lesson, `${heading}`, '2', '2');
  const gameAimTextElem = createElem('p', 'game-aim', '');
  gameAimTextElem.innerHTML = gameAim;

  gamePElem.appendChild(gameToLoad);
  gamePElem.appendChild(gameAimTextElem);

  const headingSpan = gameToLoad.querySelector('.span-heading');
  if (headingSpan) {
    headingSpan.classList.add('clickable-heading');
    headingSpan.addEventListener('click', () => {
      resource(`${activityName}`, '');
    });
  }

  gameDivElem.appendChild(gamePElem);
  return gameDivElem;
}

// export function addMainGameSection(lesson, lessonsData, level, type, book, gameH2Elem, gameSection, mainGameDivElem, lessonElem) {
//   // Section to build the Game links using vocabulary images.
//   gameH2Elem.textContent = `Game Section`;
//   gameSection.appendChild(gameH2Elem);
//   const gamePElem = createElem('p', 'main-text align-center', '');
//   gamePElem.innerHTML = `<em>Below are some games you can play with students that incorporate the Vocabulary cards from the lesson.</em>`;
//   gameSection.appendChild(gamePElem);
//   const gameFileNames = [
//     'Kids-Uncover',
//     'shuffle',
//     'Game-RotateAndStop',
//     'wheel',
//     'afloat',
//     'cannon',
//     'Kids-YesNo'
//   ];
//   gameFileNames.forEach((gameFileName) => {
//     mainGameDivElem.appendChild(createGamesSection(lesson, lessonsData, level, type, book, gameFileName));
//   });

//   gameSection.appendChild(mainGameDivElem);

//   lessonElem.appendChild(gameSection);
// }
