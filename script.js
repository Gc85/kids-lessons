import { fetchLessons, lessonsData } from './modules/fetchLessons.js';
import { populateLessons } from "./modules/populateLessons.js";
import { createElem } from './modules/utils.js';

import { createGreetingsSection } from './modules/createGreetings.js';
import { createOpeningSection } from './modules/createOpeningPic.js';
import { getBasicQuestions } from './modules/getBasicQuestions.js';
import { createBQSection } from './modules/createBasicQuestions.js';
import { createHelloSongSection } from './modules/createHelloSong.js';
import { createGoodbyeSongSection } from './modules/createGoodbyeSong.js';
import { createPictureSpeculationSection } from './modules/createPictureSpeculation.js';
import { createTodaysLanguageSection } from './modules/createTodaysLanguage.js';
import { createTodaysVocabularySection } from './modules/createVocabulary.js';
import { createListeningSection } from './modules/createListening.js';
import { createReviewPhonicsSection } from './modules/createReviewPhonics.js';
import { createPhonics1Section } from './modules/createPhonics1.js';
import { createPhonics2Section } from './modules/createPhonics2.js';

// Load selected lesson
async function loadLesson() {
  const level = document.getElementById('level').value;
  const type = document.getElementById('type').value;
  const book = document.getElementById('book').value;
  const lessonIndex = document.getElementById('lesson').value;

  if (lessonsData[level] && lessonsData[level][type] && lessonsData[level][type][book]) {
    const lesson = lessonsData[level][type][book][lessonIndex];
    // const mediaPaths = lessonsData["mediaPaths"];

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

    // PDF Links


    // Sections

    // Warmup Section
    const warmupSection = createElem('div', 'warmup', '');
    const warmupH2Elem = createElem('h2', 'section-heading align-center', '');
    warmupH2Elem.textContent = `Warmup Section`;

    warmupSection.appendChild(warmupH2Elem);
    warmupSection.appendChild(createGreetingsSection(lesson));
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
    const presentationSection = createElem('div', 'presentation', '');
    const presentationH2Elem = createElem('h2', 'section-heading align-center', '');
    presentationH2Elem.textContent = `Presentation Section`;
    presentationSection.appendChild(presentationH2Elem);

    presentationSection.appendChild(createPictureSpeculationSection(lesson, book, level));
    presentationSection.appendChild(createElem('hr', '', ''));

    presentationSection.appendChild(createTodaysLanguageSection(lesson, book, level));
    presentationSection.appendChild(createElem('hr', '', ''));

    presentationSection.appendChild(createTodaysVocabularySection(lesson, book, level));
    lessonElem.appendChild(presentationSection);

    // Game Section - WIP
    const gameSection = createElem('div', 'game', '');
    const gameH2Elem = createElem('h2', 'section-heading align-center', '');
    gameH2Elem.textContent = `Game Section`;
    gameSection.appendChild(gameH2Elem);

    lessonElem.appendChild(gameSection);

    // Production Section
    const prodSection = createElem('div', 'production', '');
    const prodH2Elem = createElem('h2', 'section-heading align-center', '');
    prodH2Elem.textContent = `Production Section`;
    prodSection.appendChild(prodH2Elem);

    prodSection.appendChild(createListeningSection(lesson, book, level));
    prodSection.appendChild(createElem('hr', '', ''));

    if (lesson.lessonNumber % 4 !== 1) {
      prodSection.appendChild(createReviewPhonicsSection(lesson, book, level));
      prodSection.appendChild(createElem('hr', '', ''));
    }

    prodSection.appendChild(createPhonics1Section(lesson, book, level));
    prodSection.appendChild(createElem('hr', '', ''));

    prodSection.appendChild(createPhonics2Section(lesson, book, level));
    prodSection.appendChild(createElem('hr', '', ''));

    lessonElem.appendChild(prodSection);








    if (level === 'Kinder' && type === 'Normal') {
      lessonElem.appendChild(createGoodbyeSongSection());
      lessonElem.appendChild(createElem('hr', '', ''));
    }
  }
}

// ✅ Combine `DOMContentLoaded` Listeners into One
document.addEventListener("DOMContentLoaded", async () => {
  // console.log("📢 DOM fully loaded, fetching lessons...");
  await fetchLessons();

  // ✅ Attach event listeners properly
  document.getElementById('book').addEventListener('change', () => { console.log("Book changed to:", document.getElementById('book').value); populateLessons(lessonsData) });
  document.getElementById('level').addEventListener('change', () => { console.log("Level changed to:", document.getElementById('level').value); populateLessons(lessonsData) } );
  document.getElementById('type').addEventListener('change', () => { console.log("Type changed to:", document.getElementById('type').value); populateLessons(lessonsData) });
  document.getElementById('load-btn').addEventListener('click', loadLesson);
});



