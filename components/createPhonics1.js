import { createElem } from "./utils.js";
import { createHeading } from "./createHeading.js";

export function createPhonics1Section(lesson, book, level, type, heading, lessonPhonics) {
  const phonics1DivElem = createElem("div", "div-opening", "");
  const phonics1H2Elm = createHeading(lesson, heading, "2", "2");

  const phonics1TextElem = createElem("p", "main-text", "");
  if (lesson.lessonNumber % 4 === 1 || level === "5") {
    type === "Normal" ? (phonics1TextElem.innerHTML = phonics5NormalMessage.join("<br>")) : (phonics1TextElem.innerHTML = phonics5PlusMessage.join("<br>"));
  } else {
    type === "Normal" ? (phonics1TextElem.innerHTML = phonics4NormalMessage.join("<br>")) : (phonics1TextElem.innerHTML = phonics4PlusMessage.join("<br>"));
  }

  const phonics1ImgDivElem = createElem("div", "flex flex-justify-evenly flex-wrap", "");
  lesson.phonics1Images.forEach((phonics1Item) => {
    const findPhonics = lessonPhonics.phonicsCards.find((p) => p.id === phonics1Item);

    if (findPhonics) {
      const phonics1ImgTextElem = createElem("div", "phonics-center", "");
      let phonics1ImgElem = "";
      type === "Normal" ? (phonics1ImgElem = createElem("img", "image-small", "")) : (phonics1ImgElem = createElem("img", "image-medium", ""));

      if (type === "Normal") {
        if (findPhonics.id.slice(0, 1) === "P") {
          phonics1ImgElem.src = `./assets/phonics/CL5/${phonics1Item.slice(0, 4)}/${phonics1Item}.jpg`;
        } else {
          phonics1ImgElem.src = `./assets/${book}/${level}/${phonics1Item}.jpg`;
        }
      } else {
        phonics1ImgElem.src = `./assets/${book}/${level}/${phonics1Item}.jpg`;
      }
      phonics1ImgElem.onclick = () => {
        showSrcMedia();
      };
      const phonics1DescElem = createElem("p", "phonics-text", "");
      phonics1DescElem.innerHTML = `${findPhonics.desc}`;
      phonics1ImgTextElem.appendChild(phonics1ImgElem);
      phonics1ImgTextElem.appendChild(phonics1DescElem);

      phonics1ImgDivElem.appendChild(phonics1ImgTextElem);
    }
  });

  const phonics1TextElem2 = createElem("p", "main-text", "");
  type === "Normal" && (lesson.lessonNumber % 4 === 1 || level === "5") ? (phonics1TextElem2.innerHTML = phonics1PracticeMessage.join("<br>")) : "";

  phonics1DivElem.appendChild(phonics1H2Elm);
  phonics1DivElem.appendChild(phonics1TextElem);
  phonics1DivElem.appendChild(phonics1ImgDivElem);
  phonics1DivElem.appendChild(phonics1TextElem2);

  return phonics1DivElem;
}

const phonics5NormalMessage = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>Present and practice the phonics of today's lesson.`,
  `It's very important to present the phonics sound together with the full word, e.g. "a", "a", "apple".</em>`,
];

const phonics4NormalMessage = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>Present and practice the phonics of today's lesson.`,
  `As these are two-letter phonics, they need to be practiced as such, e.g. "ar", "ar", "star" OR "i_e", "i_e", "nine".</em>`,
];

const phonics5PlusMessage = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>First, present and practice the phonics/word for today's lesson. Present it as a whole. E.g. "are" is going to be the whole word, and not letter by letter.`,
  `Next, excourage students to find today's phonics on the opposite page and circle &amp; count all occurances.`,
  `Lastly, have students write their phonics in their books and show you.`,
];

const phonics4PlusMessage = [
  `<b>Let's practice today's letters and sounds!</b>`,
  ``,
  `<b>Aim:</b> <em>First, present and practice the phonics/word for today's lesson. Present it as a whole. E.g. "are" is going to be the whole word, and not letter by letter.`,
  `Next, excourage students to find today's phonics on the opposite page and circle &amp; count all occurances.`,
  `Lastly, have students write their phonics in their books and show you.`,
];

const phonics1PracticeMessage = [
  `<b>When possible, practice creating two- or three-letter combinations by pairing a vowel with the consonants.</b>`,
  `<span class="phonics-hint">Example: "a", "b", "a", "b", "ab" AND "b", "a", "b", "a", "ba".</span>`,
  `<em>After practicing phonics, instruct students to complete the phonics writing part in their books, focusing on the correct stroke order of each letter.</em>`,
];
