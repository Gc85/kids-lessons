import { fetchLessons, lessonsData } from './modules/fetchLessons.js';
import { populateLessons } from "./modules/populateLessons.js";
import { createElem } from './modules/utils.js';

import { createGreetingsSection } from './modules/greetings.js';
import { createOpeningSection } from './modules/openingPic.js';
import { createHelloSongSection } from './modules/helloSong.js';
import { createGoodbyeSongSection } from './modules/goodbyeSong.js';
import { createPictureSpeculationSection } from './modules/picSpeculation.js';


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
    const warmupSection = createElem('div', 'warmup', '');
    warmupSection.appendChild(createGreetingsSection(lesson));
    warmupSection.appendChild(createElem('hr', '', ''));

    warmupSection.appendChild(createOpeningSection(lesson));
    warmupSection.appendChild(createElem('hr', '', ''));

    if (level === 'Kinder' && type === 'Normal') {
      warmupSection.appendChild(createHelloSongSection());
      warmupSection.appendChild(createElem('hr', '', ''));
    }
    lessonElem.appendChild(warmupSection);

    const presentationSection = createElem('div', 'presentation', '');
    presentationSection.appendChild(createPictureSpeculationSection(lesson));

    lessonElem.appendChild(presentationSection);






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



