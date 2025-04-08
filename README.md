# 🧒 Kids Lessons Template

## 📌 Project Overview

This project serves as a clean and modern template for delivering kids’ online lesson materials. It is intended for personal use and professional showcasing, with a focus on simplicity, maintainability, and compatibility with modern browsers.

While it integrates with a larger codebase (not all source files are included here), this repository highlights the key structural and design improvements made to streamline the lesson delivery experience.

## 🎯 Goals

- Develop a lightweight and modular lesson template using **vanilla JavaScript**.
- Eliminate unnecessary complexity by avoiding external libraries or frameworks.
- Refactor and modernize outdated code practices from the legacy system.

## 🧠 Motivation

The existing kids’ lesson template was originally designed for **Internet Explorer 6/8**, resulting in:
- Chaotic and outdated code structure.
- Heavy reliance on multiple JS files and global variables.
- Contributions from various part-time developers over the years, creating inconsistency and technical debt.

This new template aims to:
- Create a cleaner and more scalable structure.
- Improve readability and performance.
- Provide a more modern, professional foundation for future development.

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6+)**
- No external libraries or frameworks.

## 🚧 Current Status

- Initial template structure completed.
- Integration testing with live lesson materials ongoing.
- Some source files are excluded due to dependencies with private/proprietary systems.

## 📁 Repository Structure

```
├── assets/             # Images, icons, audio, etc. for thee lessons.
                        # Organized by "Book" → "Level". Files not included in GitHub due to privacy.
├── components/         # Reusable JavaScript modules for each part of the lesson.
├── js/                 # Main JavaScript directory.
    └── script.js       # Root logic for the lesson system.
├── lessons/            # JSON files representing each individual book.
    └── book-c.json     # (Currently under development.)
├── styles/             # CSS styles.
    └── styles.css      # Main stylesheet
├── index.html          # Entry point of the lesson template 
└── README.md           # Project overview
```

## 📈 Future Plans

- Modularize code into reusable components.
- Add interactive features like quizzes and drag-and-drop activities.
- Explore localization/multilingual support.

## 🙋‍♂️ Notes

- This is a personal side project intended for skill-building and portfolio purposes.
- Contributions or suggestions are welcome!