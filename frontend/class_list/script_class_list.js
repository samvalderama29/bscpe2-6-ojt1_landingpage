// =============================================
// STATE & DATA
// =============================================
let students = []; // Data will be populated via fetch()
const studentsByLetter = {};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let currentIndex = 0; 
let isAnimating = false; 

// =============================================
// DOM REFERENCES
// =============================================
const currentLetterEl = document.getElementById("current-letter");

const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const mobileDrawerOverlay = document.getElementById("mobile-drawer-overlay");
const closeDrawerBtn = document.getElementById("close-drawer-btn");

// =============================================
// HELPERS
// =============================================
function wrapIndex(index, length) {
    if (length <= 0) return 0;
    return ((index % length) + length) % length;
}

function getCurrentLetter() {
    const student = students[currentIndex];
    return student ? student.name.charAt(0).toUpperCase() : "A";
}

function groupStudentsByLetter() {
    for (let key in studentsByLetter) delete studentsByLetter[key];
    
    students.forEach(student => {
        const firstLetter = student.name.charAt(0).toUpperCase();
        if (!studentsByLetter[firstLetter]) {
            studentsByLetter[firstLetter] = [];
        }
        studentsByLetter[firstLetter].push(student);
    });
}

// =============================================
// RENDERING
// =============================================
function renderStudentList() {
    const container = document.getElementById("student-list-container");
    container.innerHTML = ""; 

    allStudents.forEach(student => {
        const studentCard = document.createElement("div");
        studentCard.classList.add("student-card");
        
        // Dito natin ilalagay ang structure ng card
        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p>${student.gender}</p>
        `;
        container.appendChild(studentCard);
    });
}

// Kick off the script
// Dahil naka-link na ang student_database.js sa HTML, 
// automatic na accessible na ang 'allStudents' variable dito.
document.addEventListener('DOMContentLoaded', () => {
    renderStudentList();
});

// I-update ang initialization para tumawag sa render function
async function loadDataAndInitialize() {
    // Kung ang student_database.js ay naka-set bilang variable, 
    // siguraduhin na 'students' variable ay updated dito.
    
    // Halimbawa:
    // students = window.allStudents; 
    
    groupStudentsByLetter();
    renderStudentList(); // Tawagin ang function para ipakita sa page
}


// Kick off the script
loadDataAndInitialize();