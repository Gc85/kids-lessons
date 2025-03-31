export function createElem(tag, classNames = '', id = '') {
  const elem = document.createElement(tag);
  if (classNames) {
    classNames.split(' ').forEach(cls => elem.classList.add(cls)); // ✅ Splitting and adding multiple classes
  }
  if (id) elem.id = id;
  if (tag === 'audio') elem.controls = true;
  return elem;
}
