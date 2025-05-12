export function createElem(tag, classNames = '', id = '') {
  const elem = document.createElement(tag);
  if (classNames) {
    classNames.split(' ').forEach(cls => elem.classList.add(cls)); // ✅ Splitting and adding multiple classes
  }
  if (id) elem.id = id;
  if (tag === 'audio') elem.controls = true;
  return elem;
}

export function createPopup(message) {
  const popup = document.getElementById('popup');
  popup.querySelector('p').textContent = message;
  popup.classList.remove('hidden');
}

export function getSelectedRadioValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}

export function createSegueVideo(segueType) {
  let heading, fileName;
  switch (segueType) {
    case `Opening`:
      heading = `Opening Segue`;
      fileName = `KidsOpen.mp4`;
      break;
    case `Closing`:
      heading = `Closing Segue`;
      fileName = `KidsClose.mp4`;
      break;
  }

  const segueBtnElem = createElem('button', 'btn-gradient-1', '');
  segueBtnElem.innerHTML = heading;
  segueBtnElem.addEventListener('click', () => {
    console.log('Button clicked');
    loadMedia(`../../kids/media/${fileName}`);
  });

  return segueBtnElem;
}
