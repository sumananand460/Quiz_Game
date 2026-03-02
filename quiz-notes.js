/*****************************************************************************************
 * QUIZ GAME PROJECT – COMPLETE ARCHITECTURE NOTES
 * ------------------------------------------------
 * This file explains the structure and working of the Quiz Game project.
 * It covers:
 *   1. HTML Structure
 *   2. CSS Architecture
 *   3. JavaScript Logic & Flow
 *
 * The project follows a Single Page Application (SPA) pattern.
 *****************************************************************************************/


/*****************************************************************************************
 * ===========================
 * 1️⃣ HTML STRUCTURE NOTES
 * ===========================
 *
 * The HTML file contains 3 main screens inside one container:
 *
 *   1. Start Screen
 *   2. Quiz Screen
 *   3. Result Screen
 *
 * Only ONE screen is visible at a time using the "active" class.
 *
 * Core Structure:
 *
 * <div class="container">
 *    ├── <div id="start-screen" class="screen active">
 *    ├── <div id="quiz-screen" class="screen">
 *    └── <div id="result-screen" class="screen">
 *
 * Important Concepts Used:
 *
 * ✔ IDs are used to connect HTML with JavaScript.
 * ✔ Class "screen" hides all sections by default.
 * ✔ Class "active" makes a screen visible.
 * ✔ <span> elements are used for dynamic number updates.
 * ✔ Answers are NOT hardcoded — they are inserted dynamically using JS.
 *
 * Progress Bar Structure:
 *
 * <div class="progress-bar">
 *     <div id="progress"></div>
 * </div>
 *
 * Outer div = background track
 * Inner div = filling progress (width updated using JS)
 *
 *****************************************************************************************/


/*****************************************************************************************
 * ===========================
 * 2️⃣ CSS ARCHITECTURE NOTES
 * ===========================
 *
 * The CSS follows layered architecture:
 *
 * -------------------------
 * A) Global Reset Layer
 * -------------------------
 *
 * * {
 *   margin: 0;
 *   padding: 0;
 *   box-sizing: border-box;
 * }
 *
 * ✔ Removes browser default spacing
 * ✔ Makes width predictable using border-box model
 *
 *
 * -------------------------
 * B) Layout Layer
 * -------------------------
 *
 * body {
 *   display: flex;
 *   justify-content: center;
 *   align-items: center;
 * }
 *
 * ✔ Flexbox centers container vertically & horizontally
 * ✔ min-height: 100vh ensures full screen height
 *
 *
 * -------------------------
 * C) Card UI Pattern
 * -------------------------
 *
 * .container {
 *   background: white;
 *   border-radius: 1rem;
 *   box-shadow: ...
 * }
 *
 * ✔ Modern card design
 * ✔ Rounded corners
 * ✔ Soft shadow for depth
 *
 *
 * -------------------------
 * D) Screen Visibility Control
 * -------------------------
 *
 * .screen { display: none; }
 * .screen.active { display: block; }
 *
 * ✔ JS toggles "active" class
 * ✔ CSS controls visibility
 *
 *
 * -------------------------
 * E) State-Based Styling
 * -------------------------
 *
 * .answer-btn.correct { background: green; }
 * .answer-btn.incorrect { background: red; }
 *
 * ✔ UI changes based on class added by JS
 *
 *
 * -------------------------
 * F) Transitions
 * -------------------------
 *
 * transition: all 0.3s ease;
 *
 * ✔ Smooth hover and progress animation
 *
 *
 * -------------------------
 * G) Responsive Design
 * -------------------------
 *
 * @media (max-width: 500px) { ... }
 *
 * ✔ Adjusts font sizes
 * ✔ Reduces padding
 * ✔ Makes mobile-friendly
 *
 *****************************************************************************************/


/*****************************************************************************************
 * ===========================
 * 3️⃣ JAVASCRIPT STRUCTURE
 * ===========================
 *
 * The JS file is divided into 5 logical sections:
 *
 *   1. DOM Selection
 *   2. Quiz Data
 *   3. State Variables
 *   4. Event Listeners
 *   5. Core Functions
 *
 *****************************************************************************************/


/*****************************************************************************************
 * 3.1 DOM SELECTION
 *
 * document.getElementById() is used to select elements.
 *
 * Example:
 * const startButton = document.getElementById("start-btn");
 *
 * Purpose:
 * ✔ Connect HTML elements to JavaScript
 * ✔ Allow dynamic updates
 *
 *****************************************************************************************/


/*****************************************************************************************
 * 3.2 QUIZ DATA STRUCTURE
 *
 * const quizQuestions = [
 *   {
 *     question: "Question text",
 *     answers: [
 *        { text: "Option 1", correct: false },
 *        { text: "Option 2", correct: true }
 *     ]
 *   }
 * ];
 *
 * Concepts Used:
 *
 * ✔ Array of Objects
 * ✔ Nested arrays
 * ✔ Boolean flags for validation
 *
 * This is a Data-Driven UI approach.
 *
 * UI is generated from data instead of hardcoding.
 *
 *****************************************************************************************/


/*****************************************************************************************
 * 3.3 STATE VARIABLES
 *
 * let currentQuestionIndex = 0;
 * let score = 0;
 * let answersDisabled = false;
 *
 * These variables represent application state.
 *
 * currentQuestionIndex → Tracks current question
 * score → Tracks correct answers
 * answersDisabled → Prevents double clicks
 *
 * This is basic state management.
 *
 *****************************************************************************************/


/*****************************************************************************************
 * 3.4 EVENT-DRIVEN PROGRAMMING
 *
 * startButton.addEventListener("click", startQuiz);
 *
 * When user clicks → startQuiz() runs.
 *
 * The app reacts to user actions.
 *
 * This is called Event-Driven Architecture.
 *
 *****************************************************************************************/


/*****************************************************************************************
 * 3.5 CORE FUNCTIONS
 *
 * -------------------------
 * startQuiz()
 * -------------------------
 * ✔ Resets score
 * ✔ Resets index
 * ✔ Switches screen
 * ✔ Calls showQuestion()
 *
 *
 * -------------------------
 * showQuestion()
 * -------------------------
 * ✔ Gets question using index
 * ✔ Updates text content
 * ✔ Clears previous answers
 * ✔ Creates buttons dynamically
 * ✔ Stores correct value using dataset
 *
 * dataset Example:
 * button.dataset.correct = true;
 *
 * This creates:
 * <button data-correct="true">
 *
 *
 * -------------------------
 * selectAnswer(event)
 * -------------------------
 * ✔ Prevents multiple clicks
 * ✔ Checks correctness
 * ✔ Highlights correct & incorrect answers
 * ✔ Updates score
 * ✔ Uses setTimeout for delay
 *
 * setTimeout(() => {}, 1000);
 *
 * This introduces asynchronous behavior.
 *
 *
 * -------------------------
 * showResults()
 * -------------------------
 * ✔ Switches screen
 * ✔ Calculates percentage
 * ✔ Uses conditional logic for message
 *
 *
 * -------------------------
 * restartQuiz()
 * -------------------------
 * ✔ Hides result screen
 * ✔ Calls startQuiz() again
 * ✔ Reuses existing logic
 *
 *****************************************************************************************/


/*****************************************************************************************
 * ===========================
 * COMPLETE FLOW OF THE APP
 * ===========================
 *
 * 1. Page loads → Start screen visible
 * 2. User clicks Start
 * 3. Quiz screen appears
 * 4. Question loads dynamically
 * 5. User selects answer
 * 6. Answer is validated
 * 7. Score updates
 * 8. After delay → next question
 * 9. After last question → result screen
 * 10. Restart resets everything
 *
 *****************************************************************************************/


/*****************************************************************************************
 * ===========================
 * MAJOR CONCEPTS USED
 * ===========================
 *
 * ✔ DOM Manipulation
 * ✔ Event Handling
 * ✔ State Management
 * ✔ Array Methods (forEach)
 * ✔ Dynamic Element Creation
 * ✔ dataset API
 * ✔ Conditional Statements
 * ✔ Asynchronous setTimeout
 * ✔ Class-based UI control
 * ✔ Responsive Design
 * ✔ Single Page Application behavior
 *
 *****************************************************************************************/


/*****************************************************************************************
 * FINAL UNDERSTANDING
 *
 * This project demonstrates:
 *
 * - Structured application logic
 * - Clean separation of HTML, CSS, and JS
 * - Real UI state control
 * - Practical frontend development patterns
 *
 * This is a strong foundational frontend project.
 *
 *****************************************************************************************/