

export async function getLessonPlusPhonics(book, level) {
  const phonics = await loadPlusPhonics(book, level);
  return phonics;
}

async function loadPlusPhonics(book, level) {
  const response = await fetch(`./data/${level}${book}p-phonics.json`);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  return response.json();
}
