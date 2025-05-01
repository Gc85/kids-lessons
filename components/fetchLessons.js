import { populateLessons } from "./populateLessons.js";

export let lessonsData = {}; // ✅ Export lessonsData

// Load JSON once to reduce redundant fetch requests
export async function fetchLessons() {
  try {
    // console.log("🔄 Fetching lessons...");

    // Determine which book to retrieve
    const books = ['A', 'B', 'C', 'D', 'E', 'F'];
    const bookIndex = loadCurrentClass();

    const response = await fetch(`./lessons/book-${books[bookIndex]}.json`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    lessonsData = await response.json();
    // console.log('✅ Loaded lessons:', lessonsData);

    // Ensure the DOM elements exist before setting values
    const defaultLevel = document.querySelector(`input[name="level"][value="4"]`);
    const defaultType = document.querySelector(`input[name="type"][value="Normal"]`);
    const defaultBook = document.querySelector(`input[name="book"][value="${books[bookIndex]}"]`);

    if (!defaultLevel || !defaultType || !defaultBook) {
      console.error('❌ One or more default radio buttons not found in the DOM.');
      return;
    }

    defaultLevel.checked = true;
    defaultType.checked = true;
    defaultBook.checked = true;

    // Set dropdown defaults AFTER lessonsData is loaded
    document.querySelector(`input[name="level"][value="3"]`).checked = true;
    document.querySelector(`input[name="type"][value="Normal"]`).checked = true;
    document.querySelector(`input[name="book"][value="${books[bookIndex]}"]`).checked = true;

    // Call `populateLessons()` ONLY when lessonsData is ready
    // console.log("📢 Calling populateLessons now...");
    populateLessons(lessonsData);
  } catch (error) {
    console.error('❌ Error fetching lessons:', error);
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
  return bookMapping[yearsPassed][month < 3 ? 0 : (month < 9 ? 1 : 2)];
}
