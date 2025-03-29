let lessonsData = {}; // Store lesson data globally

// Load JSON once to reduce redundant fetch requests
async function fetchLessons() {
  try {
    const response = await fetch('lessons.json');
    lessonsData = await response.json();
    console.log('Loaded lessons:', lessonsData); // Debugging

    const books = ['A', 'B', 'C', 'D', 'E', 'F'];

    bookIndex = loadCurrentClass();

    // Set defaults
    document.getElementById('level').value = 'Kinder';
    document.getElementById('type').value = 'Normal';
    document.getElementById('book').value = books[bookIndex];

    // Populate lessons immediately
    populateLessons();
  } catch (error) {
    console.error('Error fetching lessons:', error);
  }
}

function loadCurrentClass() {
  var today = new Date();
  var month = today.getMonth(); // Get the current month (0-11)
  var year = today.getFullYear(); // Get the current year
  var baseYear = 2024; // Set your base year here (e.g., the start of the first cycle)

  // Calculate how many complete cycles have passed
  var yearsPassed = (year - baseYear) % 3;

  var bookMapping = [
    [5, 0, 1],  // For yearsPassed == 0
    [1, 2, 3],  // For yearsPassed == 1
    [3, 4, 5]   // For yearsPassed == 2
  ];

  // Set the bookIndex based on the year and month
  return bookIndex = bookMapping[yearsPassed][month < 3 ? 0 : (month < 9 ? 1 : 2)];
}

// Populate the lesson dropdown when book selection changes
function populateLessons() {
  const level = document.getElementById('level').value;
  const type = document.getElementById('type').value;
  const book = document.getElementById('book').value;

  const lessonDropdown = document.getElementById('lesson');
  lessonDropdown.innerHTML = ''; // Clear existing options

  if (lessonsData[level] && lessonsData[level][type] && lessonsData[level][type][book]) {
    lessonsData[level][type][book].forEach((lesson) => {
      const option = document.createElement('option');
      option.value = lesson.lessonNumber - 1; // Use zero-based index
      option.textContent = `Lesson ${lesson.lessonNumber}: ${lesson.title}`;
      lessonDropdown.appendChild(option);
    });
  }
}

// Load selected lesson
function loadLesson() {
  const level = document.getElementById('level').value;
  const type = document.getElementById('type').value;
  const book = document.getElementById('book').value;
  const lessonIndex = document.getElementById('lesson').value;

  if (lessonsData[level] && lessonsData[level][type] && lessonsData[level][type][book]) {
    const lesson = lessonsData[level][type][book][lessonIndex];

    console.log(lesson);

    // Get main lesson element
    const lessonElm = document.querySelector('#lesson-content');
    lessonElm.innerHTML = ``;

    // Lesson timer element
    const timerElem = document.createElement('img');
    timerElem.src = './images/timer-blue-black.svg';
    timerElem.id = 'timer';

    // Create Title
    const titleElm = document.createElement('h2');
    titleElm.innerHTML = `${lesson.title}`;

    // PDF Links



    // Greetings
    const greetingsElem = document.createElement('div');

    const greetingTitle = document.createElement('span');
    greetingTitle.classList.add('span-heading');
    greetingTitle.innerHTML = `Greetings`;

    const timerText = document.createElement('p');
    timerText.appendChild(timerElem);
    timerText.appendChild(document.createTextNode(lesson.review ? '2-3' : '2-4'));


    const greetingText = document.createElement('p')
    greetingText.innerHTML = greetingMessage.join('<br>')

    greetingsElem.appendChild(greetingTitle);
    greetingsElem.appendChild(timerText);
    greetingsElem.appendChild(greetingText);






    // Add sections to main Lesson DIV
    lessonElm.appendChild(titleElm);
    lessonElm.appendChild(greetingsElem);


    // document.getElementById("lesson-content").innerHTML = `
    //         <h2>${lesson.title}</h2>
    //         <p><strong>Dialog:</strong> ${lesson.dialog}</p>
    //         <p><strong>Phonics:</strong> ${lesson.phonics.join(", ")}</p>
    //         <img src="${lesson.images[0]}" width="200" />
    //         <br>
    //         <audio controls>
    //             <source src="${lesson.audio}" type="audio/mp3">
    //             Your browser does not support the audio element.
    //         </audio>
    //     `;
  }
}

// Event Listeners
document.getElementById('book').addEventListener('change', populateLessons);
document.getElementById('level').addEventListener('change', populateLessons);
document.getElementById('type').addEventListener('change', populateLessons);
document.getElementById('load-btn').addEventListener('click', loadLesson);

// Initialize
fetchLessons();


// Greeting
const greetingMessage = [
  `<b>Hello, my name's (Joe).`,
  `What's your name?`,
  `Nice to meet you.</b> <i>(Shake hands)</i>`,
  ``,
  `<b>Aim:</b> Introduce self, get students' names, do basic greetings. Greet students naturally`
]
