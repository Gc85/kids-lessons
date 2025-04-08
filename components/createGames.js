import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createGamesSection(divElem, activityName) {

  const gameDivElem = createElem('div', `${divElem}`, '');

  const activity = ACTIVITYGLOSSARY.getByName(`${activityName}`);
  if (activity) {
    const container = document.createElement('div');
    container.className = 'activity-description';
    container.appendChild(createHeading(lesson, `${activity.name}`, '2', '2'));
    const briefElem = createElem('p', 'margin-5-0', '');
    briefElem.innerHTML = `${activity.brief}`;

    container.appendChild(briefElem);

    gameDivElem.appendChild(container);

  } else {
    console.error(`Could not find activity: ${activity}`);
  }

  return gameDivElem;

}
