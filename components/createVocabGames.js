import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createVocabGamesSection(lesson, lessonsData, level, type, book, activityName) {

  // Global variables needed in order for Games to load images properly
  window.picArray = [];
  window.picPath = `../assets/${book}/${level}/`;

  let heading, gameAim;
  switch (activityName) {
    case "Kids-Uncover":
      heading = `Uncover`;
      gameAim = `<b>Aim:</b> <em>The students stop a moving square or bar to uncover a piece and guess the hidden flashcard.`;
      break;
    case "shuffle":
      heading = `Shuffle`;
      gameAim = `<b>Aim:</b> <em>The student has to memorize cards which are then shuffled.`;
      break;
    case "Game-RotateAndStop":
      heading = `Rotate and Stop`;
      gameAim = `<b>Aim:</b> <em>Show/hide flashcards one by one. Encourage the student to identify the target flashcard by saying STOP!`;
      break;
    case "wheel":
      heading = `Wheel`;
      gameAim = `<b>Aim:</b> <em>The student has to use the word in a sentence or try to stop the wheel on the word suggested by the teacher.`;
      break;
    case "afloat":
      heading = `Afloat`;
      gameAim = `<b>Aim:</b> <em>The student has to use the word in a sentence before the water submerges the flashcard.`;
      break;
    case "cannon":
      heading = `Cannon`;
      gameAim = `<b>Aim:</b> <em>The student has to break the brickwall in order to see the flashcard and say the word.`;
      break;
    case "Kids-YesNo":
      heading = `Yes or No?`;
      gameAim = `<b>Aim:</b> <em>Check that students recognize and understand the target language.`;
      break;
    case "Game-TicTacToe":
      heading = `Tic Tac Toe`;
      gameAim = `<b>Aim:</b> <em>The winner is the first to make a line of three.`;
      break;
    case "Game-Memory":
      heading = `Memory`;
      gameAim = `<b>Aim:</b> <em>The student chooses two numbers to find a matching pair of flashcards.`;
      break;
    default:
      break;
  }

  const gameDivElem = createElem('div', `game-div`, '');

  if (!lesson.review) {
    lesson.vocabImages.forEach((vocabItem) => {
      window.picArray.push(vocabItem);
    });
  } else {
    for (const reviewLesson of lesson.reviewLessons) {
      const getReviewLesson = lessonsData[level][type][book].find(
        rl => rl.lessonNumber === reviewLesson
      );
      getReviewLesson.vocabImages.forEach((vocabItem) => {
        window.picArray.push(vocabItem);
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

export function addMainGameSection(lesson, lessonsData, level, type, book, gameH2Elem, gameSection, mainGameDivElem, lessonElem) {
  // Section to build the Game links using vocabulary images.
  gameH2Elem.textContent = `Game Section`;
  gameSection.appendChild(gameH2Elem);
  const gamePElem = createElem('p', 'main-text align-center', '');
  gamePElem.innerHTML = `<em>Below are some games you can play with students that incorporate the Vocabulary cards from the lesson.</em>`;
  gameSection.appendChild(gamePElem);
  const gameFileNames = [
    'Kids-Uncover',
    'shuffle',
    'Game-RotateAndStop',
    'wheel',
    'afloat',
    'cannon',
    'Kids-YesNo'
  ];
  gameFileNames.forEach((gameFileName) => {
    mainGameDivElem.appendChild(createVocabGamesSection(lesson, lessonsData, level, type, book, gameFileName));
  });

  gameSection.appendChild(mainGameDivElem);

  lessonElem.appendChild(gameSection);
}
