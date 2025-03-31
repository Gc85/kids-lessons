import { createGreetingsSection } from './modules/greetings.js';
import { createOpeningSection } from './modules/openingPic.js';
import { createHelloSongSection } from './modules/helloSong.js';
import { createGoodbyeSongSection } from './modules/goodbyeSong.js';
import { createElem } from './modules/utils.js';

import { fetchLessons, lessonsData } from './modules/fetchLessons.js';
import { populateLessons } from "./modules/populateLessons.js";

// Load selected lesson
function loadLesson() {
  const level = document.getElementById('level').value;
  const type = document.getElementById('type').value;
  const book = document.getElementById('book').value;
  const lessonIndex = document.getElementById('lesson').value;

  if (lessonsData[level] && lessonsData[level][type] && lessonsData[level][type][book]) {
    const lesson = lessonsData[level][type][book][lessonIndex];

    // Get main lesson element
    const lessonElem = document.querySelector('#lesson-content');
    lessonElem.innerHTML = ``;

    // Create Title
    const titleH2Elem = createElem('h2', '', '');
    titleH2Elem.innerHTML = `${lesson.title}`;
    lessonElem.appendChild(titleH2Elem);
    lessonElem.appendChild(createElem('hr', '', ''));

    // PDF Links


    // Sections
    lessonElem.appendChild(createGreetingsSection(lesson));
    lessonElem.appendChild(createElem('hr', '', ''));

    lessonElem.appendChild(createOpeningSection(lesson));
    lessonElem.appendChild(createElem('hr', '', ''));

    if (level === 'Kinder' && type === 'Normal') {
      lessonElem.appendChild(createHelloSongSection());
      lessonElem.appendChild(createElem('hr', '', ''));
    }








    if (level === 'Kinder' && type === 'Normal') {
      lessonElem.appendChild(createGoodbyeSongSection());
      lessonElem.appendChild(createElem('hr', '', ''));
    }
  }
}

// ✅ Combine `DOMContentLoaded` Listeners into One
document.addEventListener("DOMContentLoaded", async () => {
  console.log("📢 DOM fully loaded, fetching lessons...");
  await fetchLessons();

  // ✅ Attach event listeners properly
  document.getElementById('book').addEventListener('change', populateLessons);
  document.getElementById('level').addEventListener('change', populateLessons);
  document.getElementById('type').addEventListener('change', populateLessons);
  document.getElementById('load-btn').addEventListener('click', loadLesson);
});



