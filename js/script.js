import { fetchLessons, lessonsData } from '../components/fetchLessons.js';
import { populateLessons } from "../components/populateLessons.js";
import { createElem, createPopup, getSelectedRadioValue } from '../components/utils.js';

// Warmup Section
import { createUnitWarmupSection } from '../components/createUnitWarmupSection.js';
import { getBasicQuestions } from '../components/getBasicQuestions.js';
import { createGoodbyeSongSection } from '../components/createGoodbyeSong.js';

// Presentation Section
import { createUnitPresentationSection } from '../components/createUnitPresentationSection.js';
import { getLessonVocabulary } from '../components/getLessonVocabulary.js';
import { getLessonPhonics } from '../components/getLessonPhonics.js';

// Games
import { createVocabGamesSection, addMainGameSection } from '../components/createVocabGames.js';

// Production Section
import { createUnitProductionSection } from '../components/createUnitProductionSection.js';

import { createGoodbyeSection } from '../components/createGoodbye.js';

// Load selected lesson
async function loadLesson() {

  const level = getSelectedRadioValue('level');
  const type = getSelectedRadioValue('type');
  const book = getSelectedRadioValue('book');

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

      const bq = await getBasicQuestions();
      const vocab = await getLessonVocabulary(book, level, type);
      const lessonPhonics = await getLessonPhonics(book, level);

      // ***************************************************************************************************** //
      // Warmup Section
      createUnitWarmupSection(warmupSection, warmupH2Elem, lesson, book, level, type, bq);
      lessonElem.appendChild(warmupSection);

      // ***************************************************************************************************** //
      // Presentation Section
      presentationH2Elem.textContent = `Presentation Section`;
      presentationSection.appendChild(presentationH2Elem);

      const isReview = lesson.review;

      if (!lesson.review) {
        // Create Unit Presentation Section for lessons 1 - 3 of each Unit
        createUnitPresentationSection(presentationSection, lesson, isReview, book, level, type, vocab);
        lessonElem.appendChild(presentationSection);

        // Add Games section - WIP
        addMainGameSection(lesson, lessonsData, level, type, book, gameH2Elem, gameSection, mainGameDivElem, lessonElem);

        // Create Unit Production Section for lessons 1 - 3 of each Unit
        createUnitProductionSection(prodSection, prodH2Elem, lesson, book, level, type, lessonPhonics, lessonsData);
      } else {
        // Section for all Review lessons
        for (const reviewLesson of lesson.reviewLessons) {
          const getReviewLesson = lessonsData[level][type][book].find(
            rl => rl.lessonNumber === reviewLesson
          );
          const vocab = await getLessonVocabulary(book, level, type);
          createUnitPresentationSection(presentationSection, getReviewLesson, isReview, book, level, type, vocab);

          lessonElem.appendChild(presentationSection);
        }

        if (type !== "Plus") {
          createUnitPresentationSection(presentationSection, lesson, isReview, book, level, type, vocab)
        } else {
          // Add some content for Review Plus lessons here...
        }

        // ***************************************************************************************************** //

        addMainGameSection(lesson, lessonsData, level, type, book, gameH2Elem, gameSection, mainGameDivElem, lessonElem);

        // ***************************************************************************************************** //

        createUnitProductionSection(prodSection, prodH2Elem, lesson, book, level, type, lessonPhonics, lessonsData);
      }

      // Warm Down Section
      warmDownH2Elem.textContent = `Warm Down Section`;
      warmDownSection.appendChild(warmDownH2Elem);

      const warmDownDivElem = createElem('div', 'div-warm-down-game', '');

      warmDownDivElem.appendChild(createVocabGamesSection(lesson, lessonsData, level, type, book, 'Kids-Uncover'));
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
  ['book', 'level', 'type'].forEach(name => {
    document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
      radio.addEventListener('change', () => {
        console.log(`${name} changed to:`, radio.value);
        populateLessons(lessonsData);
      });
    });
  });

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


