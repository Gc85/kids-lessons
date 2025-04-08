import { createPopup } from "./utils.js";

// Populate the lesson dropdown when book selection changes
export function populateLessons(lessonsData) {
  // console.log("⚠️ populateLessons called!", lessonsData);
  // console.log("Populating lessons with data:", lessonsData);

  if (!lessonsData || Object.keys(lessonsData).length === 0) {
    console.error('❌ Lessons data is empty or undefined');
    return;
  }

  const level = document.getElementById('level').value;
  const type = document.getElementById('type').value;
  const book = document.getElementById('book').value;

  if (!lessonsData[level] || !lessonsData[level][type] || !lessonsData[level][type][book]) {
    createPopup('Sorry, there are currently no lessons in this section.');
    const lessonDropdown = document.getElementById('lesson');
    lessonDropdown.innerHTML = '';
    const lessonElem = document.querySelector('#lesson-content');
    lessonElem.style.visibility = 'hidden';
    lessonElem.innerHTML = ``;
    console.error(`❌ Lessons data missing for level: ${level}, type: ${type}, book: ${book}`);
    return;
  }

  // console.log("✅ Populating dropdown with lessons...");

  const lessonDropdown = document.getElementById('lesson');
  lessonDropdown.innerHTML = '';

  if (lessonsData[level] && lessonsData[level][type] && lessonsData[level][type][book]) {
    lessonsData[level][type][book].forEach((lesson) => {
      const option = document.createElement('option');
      option.value = lesson.lessonNumber - 1; // Use zero-based index for option value
      option.textContent = `${lesson.title}`; // Set the option text
      lessonDropdown.appendChild(option); // Add the option to the dropdown
    });
  } else {
    console.log("No lessons found for the selected options.");
  }
}
