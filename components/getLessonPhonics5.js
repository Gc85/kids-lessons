

export async function getLessonPhonics5(book) {
  const phonics = await loadPhonics(book);
  return phonics;
}

async function loadPhonics(book) {
  let response;

  if (book === "A" || book === "B") {
    response = await fetch(`./data/p-ab.json`);
  } else if (book === "C" || book === "D") {
    response = await fetch(`./data/p-cd.json`);
  } else if (book === "E" || book === "F") {
    response = await fetch(`./data/p-ef.json`);
  }

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
}
