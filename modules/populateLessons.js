

// Populate the lesson dropdown when book selection changes
export function populateLessons(lessonsData) {
  console.log("⚠️ populateLessons called!", lessonsData);
  console.log("Populating lessons with data:", lessonsData); // ✅ Debugging

  if (!lessonsData || Object.keys(lessonsData).length === 0) {
    console.error('❌ Lessons data is empty or undefined');
    return;
  }

  const level = document.getElementById('level').value;
  const type = document.getElementById('type').value;
  const book = document.getElementById('book').value;

  if (!lessonsData[level] || !lessonsData[level][type] || !lessonsData[level][type][book]) {
    console.error(`❌ Lessons data missing for level: ${level}, type: ${type}, book: ${book}`);
    return;
  }

  console.log("✅ Populating dropdown with lessons...");

  const lessonDropdown = document.getElementById('lesson');
  lessonDropdown.innerHTML = ''; // Clear existing options

  lessonsData[level][type][book].forEach((lesson) => {
    const option = document.createElement('option');
    option.value = lesson.lessonNumber - 1; // Use zero-based index
    option.textContent = `Lesson ${lesson.lessonNumber}: ${lesson.title}`;
    lessonDropdown.appendChild(option);
  });
}
