import { fetchLessons, lessonsData } from '../components/fetchLessons.js';
import { populateLessons } from "../components/populateLessons.js";
import { createElem, createPopup } from '../components/utils.js';

import { createGreetingSection } from '../components/createGreeting.js';
import { createPDFLinksSection } from '../components/createPDFLinks.js';
import { createOpeningSection } from '../components/createOpeningPic.js';
import { getBasicQuestions } from '../components/getBasicQuestions.js';
import { createBQSection } from '../components/createBasicQuestions.js';
import { createHelloSongSection } from '../components/createHelloSong.js';
import { createGoodbyeSongSection } from '../components/createGoodbyeSong.js';
import { createPictureSpeculationSection } from '../components/createPictureSpeculation.js';
import { createSayDialogueSection } from '../components/createSayDialogue.js';
import { createTodaysLanguageSection } from '../components/createTodaysLanguage.js';
import { getLessonVocabulary } from '../components/getLessonVocabulary.js';
import { createTodaysVocabularySection } from '../components/createVocabulary.js';
import { createGamesSection } from '../components/createGames.js';
import { createListeningSection } from '../components/createListening.js';
import { getLessonPhonics } from '../components/getLessonPhonics.js';
import { getLessonPlusPhonics } from '../components/getLessonPlusPhonics.js';
import { createReviewPhonicsSection } from '../components/createReviewPhonics.js';
import { createPhonics1Section } from '../components/createPhonics1.js';
import { createPhonics2Section } from '../components/createPhonics2.js';
import { createReadingSection } from '../components/createReading.js';

import { createUnitReviewPhonics } from '../components/createUnitReviewPhonics.js';

import { createGoodbyeSection } from '../components/createGoodbye.js';

// Load selected lesson
async function loadLesson() {
  const level = document.getElementById('level').value;
  const type = document.getElementById('type').value;
  const book = document.getElementById('book').value;
  const lessonIndex = document.getElementById('lesson').value;

  if (lessonsData[level] && lessonsData[level][type] && lessonsData[level][type][book]) {
    const lesson = lessonsData[level][type][book][lessonIndex];

    if (lesson) {
      // Get main lesson element
      const lessonElem = document.querySelector('#lesson-content');
      lessonElem.style.removeProperty('visibility');
      lessonElem.innerHTML = ``;

      // Create Title
      const titleH2Elem = createElem('h2', 'lesson-title align-center', '');
      const splitTitle = lesson.title.replace(/:\s*/, ':<br>');
      titleH2Elem.innerHTML = `${splitTitle}`;
      lessonElem.appendChild(titleH2Elem);
      lessonElem.appendChild(createElem('hr', '', ''));

      // Sections - Create all constants for DIVs and H2 elements:
      const warmupSection = createElem('div', 'warmup', '');
      const warmupH2Elem = createElem('h2', 'section-heading align-center', '');

      const presentationSection = createElem('div', 'presentation', '');
      const presentationH2Elem = createElem('h2', 'section-heading align-center', '');

      const gameSection = createElem('div', 'game', '');
      const gameH2Elem = createElem('h2', 'section-heading align-center', '');
      const mainGameDivElem = createElem('div', 'div-main-game', '');

      const prodSection = createElem('div', 'production', '');
      const prodH2Elem = createElem('h2', 'section-heading align-center', '');
      const prodDivElem = createElem('div', 'div-prod-games', '');

      const warmDownSection = createElem('div', 'warm-down', '');
      const warmDownH2Elem = createElem('h2', 'section-heading align-center', '');

      // Warmup Section

      warmupH2Elem.textContent = `Warmup Section`;
      warmupSection.appendChild(warmupH2Elem);

      warmupSection.appendChild(createGreetingSection(lesson));
      warmupSection.appendChild(createElem('hr', '', ''));

      warmupSection.appendChild(createPDFLinksSection(lesson));
      warmupSection.appendChild(createElem('hr', '', ''));

      warmupSection.appendChild(createOpeningSection(lesson, book, level));
      warmupSection.appendChild(createElem('hr', '', ''));

      if (level !== 'Kinder') {
        const bq = await getBasicQuestions();
        warmupSection.appendChild(createBQSection(lesson, bq));
      }

      if (level === 'Kinder' && type === 'Normal') {
        warmupSection.appendChild(createHelloSongSection());
        warmupSection.appendChild(createElem('hr', '', ''));
      }
      lessonElem.appendChild(warmupSection);

      // Presentation Section
      presentationH2Elem.textContent = `Presentation Section`;
      presentationSection.appendChild(presentationH2Elem);

      if (!lesson.review) {
        // Section for lessons 1 - 3 of each Unit
        presentationSection.appendChild(createPictureSpeculationSection(lesson, book, level));
        presentationSection.appendChild(createElem('hr', '', ''));

        presentationSection.appendChild(createSayDialogueSection(lesson, book, level));
        presentationSection.appendChild(createElem('hr', '', ''));

        presentationSection.appendChild(createTodaysLanguageSection(lesson, book, level));
        presentationSection.appendChild(createElem('hr', '', ''));

        const vocab = await getLessonVocabulary(book, level, type);
        presentationSection.appendChild(createTodaysVocabularySection(lesson, book, level, vocab));
        lessonElem.appendChild(presentationSection);

        addMainGameSection(gameH2Elem, gameSection, mainGameDivElem, lessonElem);

        prodH2Elem.textContent = `Production Section`;
        prodSection.appendChild(prodH2Elem);

        switch (level) {
          case "5":
            if (type !== "Plus") {
              prodSection.appendChild(createListeningSection(lesson, book, level));
              prodSection.appendChild(createElem('hr', '', ''));

              if (lesson.lessonNumber % 4 !== 1) {
                const reviewPhonics = await getLessonPhonics(book);
                prodSection.appendChild(createReviewPhonicsSection(lesson, level, reviewPhonics));
                prodSection.appendChild(createElem('hr', '', ''));
              }

              const phonics = await getLessonPhonics(book);
              prodSection.appendChild(createPhonics1Section(lesson, book, level, type, phonics));
              prodSection.appendChild(createElem('hr', '', ''));

              prodSection.appendChild(createPhonics2Section(lesson, book, level));
              prodSection.appendChild(createElem('hr', '', ''));
            } else {
              const reviewPhonics = await getLessonPhonics(book);
              prodSection.appendChild(createReviewPhonicsSection(lesson, level, reviewPhonics));
              prodSection.appendChild(createElem('hr', '', ''));

              const plusPhonics = await getLessonPlusPhonics(book, level);
              prodSection.appendChild(createPhonics1Section(lesson, book, level, type, plusPhonics));
              prodSection.appendChild(createElem('hr', '', ''));

              prodSection.appendChild(createReadingSection(lesson, book, level));
              prodSection.appendChild(createElem('hr', '', ''));

              prodSection.appendChild(createListeningSection(lesson, book, level));
              prodSection.appendChild(createElem('hr', '', ''));
            }
            break;
          case "4":
            break;
          default:
            break;

        }
        prodDivElem.innerHTML = `Phonics Practice Games<br>Tic Tac Toe ABC<br>Memory ABC<br><br>Vocab Games<br>Rotate and Stop<br>Tic Tac Toe<br>Memory`;
        prodSection.appendChild(prodDivElem);
        lessonElem.appendChild(prodSection);
      } else {
        // Section for all Review lessons
        for (const reviewLesson of lesson.reviewLessons) {
          const getReviewLesson = lessonsData[level][type][book].find(
            rl => rl.lessonNumber === reviewLesson
          );
          const reviewHeadH3Elem = createElem('h3', 'review-head', '');
          const splitTitle = getReviewLesson.title.replace(/:\s*/, ':<br>');
          reviewHeadH3Elem.innerHTML = `${splitTitle}`;
          presentationSection.appendChild(reviewHeadH3Elem);

          presentationSection.appendChild(createPictureSpeculationSection(getReviewLesson, book, level));
          presentationSection.appendChild(createElem('hr', '', ''));

          presentationSection.appendChild(createSayDialogueSection(getReviewLesson, book, level));
          presentationSection.appendChild(createElem('hr', '', ''));

          presentationSection.appendChild(createTodaysLanguageSection(getReviewLesson, book, level));
          presentationSection.appendChild(createElem('hr', '', ''));

          const vocab = await getLessonVocabulary(book, level, type);
          presentationSection.appendChild(createTodaysVocabularySection(getReviewLesson, book, level, vocab));
          presentationSection.appendChild(createElem('hr', '', ''));

          lessonElem.appendChild(presentationSection);

        }
        const reviewHeadH3Elem = createElem('h3', 'review-head', '');
        const splitTitle = lesson.title.replace(/:\s*/, ':<br>');
        reviewHeadH3Elem.innerHTML = `${splitTitle}`;
        presentationSection.appendChild(reviewHeadH3Elem);

        presentationSection.appendChild(createPictureSpeculationSection(lesson, book, level));
        // presentationSection.appendChild(createElem('hr', '', ''));


        addMainGameSection(gameH2Elem, gameSection, mainGameDivElem, lessonElem);

        prodH2Elem.textContent = `Production Section`;
        prodSection.appendChild(prodH2Elem);

        switch (level) {
          case "5":
            if (type !== "Plus") {
              prodSection.appendChild(createListeningSection(lesson, book, level));
              prodSection.appendChild(createElem('hr', '', ''));

              // if (lesson.lessonNumber % 4 !== 1) {
              //   const reviewPhonics = await getLessonPhonics(book);
              //   prodSection.appendChild(createReviewPhonicsSection(lesson, level, reviewPhonics));
              //   prodSection.appendChild(createElem('hr', '', ''));
              // }
              debugger;
              let heading = `Phonics - Part 1`;
              let textMessage = [
                `<b>Let's say the words together!</b>`,
                ``,
                `<b>Aim:</b> <em>Review the letters taught in the previous 3 lessons of the course.</em>`
              ]
              let audioMessage;
              let reviewPhonicsImages = lesson.reviewPhonics1Images;
              let reviewPhonicsAudio;
              prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, textMessage, audioMessage, reviewPhonicsImages, reviewPhonicsAudio));
              prodSection.appendChild(createElem('hr', '', ''));

              heading = `Phonics - Part 2`;
              audioMessage = [
                `<em>Pause audio and confirm correct answer before continuing.</em>`
              ]
              reviewPhonicsImages = lesson.reviewPhonics2Images;
              reviewPhonicsAudio = lesson.reviewPhonics2Audio;
              prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, textMessage, audioMessage, reviewPhonicsImages, reviewPhonicsAudio));
              prodSection.appendChild(createElem('hr', '', ''));

              heading = `Phonics - Part 3`;
              reviewPhonicsImages = lesson.reviewPhonics3Images;
              reviewPhonicsAudio = lesson.reviewPhonics3Audio;
              prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, textMessage, audioMessage, reviewPhonicsImages, reviewPhonicsAudio));
              prodSection.appendChild(createElem('hr', '', ''));

              heading = `Phonics - Part 4`;
              reviewPhonicsImages = lesson.reviewPhonics4Images;
              reviewPhonicsAudio = lesson.reviewPhonics4Audio;
              prodSection.appendChild(createUnitReviewPhonics(lesson, book, level, heading, textMessage, audioMessage, reviewPhonicsImages, reviewPhonicsAudio));
              prodSection.appendChild(createElem('hr', '', ''));

              // const phonics = await getLessonPhonics(book);
              // prodSection.appendChild(createPhonics1Section(lesson, book, level, type, phonics));
              // prodSection.appendChild(createElem('hr', '', ''));

              // prodSection.appendChild(createPhonics2Section(lesson, book, level));
              // prodSection.appendChild(createElem('hr', '', ''));
            } else {
              const reviewPhonics = await getLessonPhonics(book);
              prodSection.appendChild(createReviewPhonicsSection(lesson, level, reviewPhonics));
              prodSection.appendChild(createElem('hr', '', ''));

              const plusPhonics = await getLessonPlusPhonics(book, level);
              prodSection.appendChild(createPhonics1Section(lesson, book, level, type, plusPhonics));
              prodSection.appendChild(createElem('hr', '', ''));

              prodSection.appendChild(createReadingSection(lesson, book, level));
              prodSection.appendChild(createElem('hr', '', ''));

              prodSection.appendChild(createListeningSection(lesson, book, level));
              prodSection.appendChild(createElem('hr', '', ''));
            }
            break;
          case "4":
            break;
          default:
            break;

        }
        prodDivElem.innerHTML = `Phonics Practice Games<br>Tic Tac Toe ABC<br>Memory ABC<br><br>Vocab Games<br>Rotate and Stop<br>Tic Tac Toe<br>Memory`;
        prodSection.appendChild(prodDivElem);
        lessonElem.appendChild(prodSection);


      }





      // Production Section
      // This section will be built differently for each level.



      // Warm Down Section
      warmDownH2Elem.textContent = `Warm Down Section`;
      warmDownSection.appendChild(warmDownH2Elem);

      const warmDownDivElem = createElem('div', 'div-warm-down-game', '');

      // load('Uncover', null, 2, 8, null, null, true);
      // warmDownDivElem.appendChild(createGamesSection('div-uncover', 'Uncover'));
      warmDownDivElem.appendChild(createElem('hr', '', ''));

      warmDownSection.appendChild(warmDownDivElem);
      warmDownSection.appendChild(createGoodbyeSection(lesson));

      lessonElem.appendChild(warmDownSection);

      if (level === 'Kinder' && type === 'Normal') {
        lessonElem.appendChild(createGoodbyeSongSection());
        lessonElem.appendChild(createElem('hr', '', ''));
      }

      // Scroll to lesson content, offsetting for the fixed header
      const lessonContainer = document.querySelector('#lesson-content');
      const headerHeight = document.querySelector('.main-heading').offsetHeight;

      const yOffset = -headerHeight; // Add a little buffer
      const y = lessonContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      createPopup(`Please select a lesson above before pressing the "Load" button.`);
    }

  }
}

function mainMenu() {
  window.location.href = "../../indexe.htm";
}

// ✅ Combine `DOMContentLoaded` Listeners into One
document.addEventListener("DOMContentLoaded", async () => {
  // console.log("📢 DOM fully loaded, fetching lessons...");
  await fetchLessons();

  // ✅ Attach event listeners properly
  document.getElementById('book').addEventListener('change', () => { console.log("Book changed to:", document.getElementById('book').value); populateLessons(lessonsData) });
  document.getElementById('level').addEventListener('change', () => { console.log("Level changed to:", document.getElementById('level').value); populateLessons(lessonsData) } );
  document.getElementById('type').addEventListener('change', () => { console.log("Type changed to:", document.getElementById('type').value); populateLessons(lessonsData) });
  document.getElementById('back-btn').addEventListener('click', mainMenu);
  document.getElementById('load-btn').addEventListener('click', loadLesson);
});


// Show button after scrolling 100px down
window.addEventListener('scroll', function() {
  const btn = document.getElementById('back-to-top');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Scroll back to top smoothly
document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function addMainGameSection(gameH2Elem, gameSection, mainGameDivElem, lessonElem) {
  // Game Section - WIP

  gameH2Elem.textContent = `Game Section`;
  gameSection.appendChild(gameH2Elem);

  // load('Uncover', null, 2, 8, null, null, true);
  // mainGameDivElem.appendChild(createGamesSection('div-uncover', 'Uncover'));
  mainGameDivElem.appendChild(createElem('hr', '', ''));

  // load('Shuffle', null, 2, 8, null, null, true);
  // mainGameDivElem.appendChild(createGamesSection('div-shuffle', 'Shuffle'));
  mainGameDivElem.appendChild(createElem('hr', '', ''));

  // load('Wheel', null, 2, 7, null, null, true);
  // mainGameDivElem.appendChild(createGamesSection('div-wheel', 'Wheel'));
  mainGameDivElem.appendChild(createElem('hr', '', ''));

  // load('Afloat', null, 2, 7, null, null, true);
  // mainGameDivElem.appendChild(createGamesSection('div-afloat', 'Afloat'));
  mainGameDivElem.appendChild(createElem('hr', '', ''));

  // load('Cannon', null, 2, 7, null, null, true);
  // mainGameDivElem.appendChild(createGamesSection('div-cannon', 'Cannon'));
  mainGameDivElem.appendChild(createElem('hr', '', ''));

  // load('Rotate and Stop', null, 2, 8, null, null, true);
  // mainGameDivElem.appendChild(createGamesSection('div-rotate', 'Rotate and Stop'));
  mainGameDivElem.appendChild(createElem('hr', '', ''));

  // load('Yes or No?', null, 2, 8, null, null, true);
  // mainGameDivElem.appendChild(createGamesSection('div-yes-or-no', 'Yes or No?'));

  gameSection.appendChild(mainGameDivElem);

  lessonElem.appendChild(gameSection);
}
