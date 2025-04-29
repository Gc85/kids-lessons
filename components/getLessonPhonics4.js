

export async function getLessonPhonics4(book) {
  const phonics = await loadPhonics(book);
  return phonics;
}

async function loadPhonics(book) {
  let response;
  response = await fetch(`./data/4${book}-phonics.json`);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
}
