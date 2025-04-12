

export async function getLessonVocabulary(book, level, type) {
  const vocab = await loadVocab(book, level, type);
  return vocab;
}

async function loadVocab(book, level, type) {
  let response;
  (type === `Normal`) ? response = await fetch(`./data/${level}${book}-vocab.json`) : response = await fetch(`./data/${level}${book}p-vocab.json`);

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json();
}
