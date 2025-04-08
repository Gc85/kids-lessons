

export async function getBasicQuestions() {
  const bq = await loadBQ();
  return bq;
}

async function loadBQ() {
  const response = await fetch(`./modules/basicQuestions.json`);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  return response.json();
}
