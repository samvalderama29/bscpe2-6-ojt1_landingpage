/*
 * Student Directory — script_directory.js
 * Handles fetching JSON data, card rendering (with lazy loading), 
 * carousel navigation, letter filter, search clearing, 
 * touch/swipe gestures, and mobile nav drawer.
 */

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
const cardsContainer = document.getElementById("cards-container");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const letterFilterBtn = document.getElementById("letter-filter-btn");
const filterDropdown = document.getElementById("filter-dropdown");
const letterGrid = document.getElementById("letter-grid");
const directoryPage = document.getElementById("directory-page");

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
function createCardElement(student) {
    const name = student.name;
    const photo = student.photo ? student.photo : "../assets/placeholders/img_holder.jpg";
    const portfolio = student.portfolio ? student.portfolio : "";

    const card = document.createElement("div");
    card.className = "student-card card-hidden";

    // Notice: loading="lazy" is added below for performance optimization
    card.innerHTML = `
        <div class="card-image-wrapper">
            <img class="student-photo" src="${photo}" alt="Photo of ${name}" loading="lazy">
            ${portfolio && portfolio !== "#" ? `
                <a href="${portfolio}" target="_blank" class="portfolio-overlay" aria-label="View portfolio of ${name}">
                    <span class="portfolio-text">VIEW PORTFOLIO</span>
                </a>
            ` : ""}
        </div>
        <p class="card-name">${name}</p>
    `;

    return card;
}

function initCarousel() {
    cardsContainer.innerHTML = "";
    students.forEach((student, index) => {
        const card = createCardElement(student);
        card.setAttribute("data-index", index);
        cardsContainer.appendChild(card);
    });
    updateCardClasses();
}

function updateCardClasses() {
    const total = students.length;
    const cards = cardsContainer.querySelectorAll(".student-card");

    if (total === 0) {
        cardsContainer.innerHTML = `<div class="empty-state"><p>No students found matching your search.</p></div>`;
        arrowLeft.classList.add("hidden");
        arrowRight.classList.add("hidden");
        currentLetterEl.textContent = "-";
        return;
    }

    if (total <= 1) {
        arrowLeft.classList.add("hidden");
        arrowRight.classList.add("hidden");
    } else {
        arrowLeft.classList.remove("hidden");
        arrowRight.classList.remove("hidden");
    }

    const centerIdx = wrapIndex(currentIndex, total);
    const leftIdx = wrapIndex(currentIndex - 1, total);
    const rightIdx = wrapIndex(currentIndex + 1, total);
    const farLeftIdx = wrapIndex(currentIndex - 2, total);
    const farRightIdx = wrapIndex(currentIndex + 2, total);
    const exitLeftIdx = wrapIndex(currentIndex - 3, total);
    const exitRightIdx = wrapIndex(currentIndex + 3, total);

    cards.forEach((card, idx) => {
        card.className = "student-card"; 

        if (idx === centerIdx) card.classList.add("card-center");
        else if (idx === leftIdx) card.classList.add("card-left");
        else if (idx === rightIdx) card.classList.add("card-right");
        else if (idx === farLeftIdx) card.classList.add("card-far-left");
        else if (idx === farRightIdx) card.classList.add("card-far-right");
        else if (idx === exitLeftIdx) card.classList.add("card-exit-left");
        else if (idx === exitRightIdx) card.classList.add("card-exit-right");
        else card.classList.add("card-hidden");
    });

    renderLetterIndicator();
    adjustCardNameFontSizes();
}

function adjustCardNameFontSizes() {
    const names = document.querySelectorAll(".card-name");
    names.forEach(nameEl => {
        nameEl.style.fontSize = ""; 
        let fontSize = parseFloat(window.getComputedStyle(nameEl).fontSize);
        let attempts = 0;
        while (nameEl.scrollHeight > nameEl.clientHeight && fontSize > 8 && attempts < 20) {
            fontSize -= 0.5;
            nameEl.style.fontSize = fontSize + "px";
            attempts++;
        }
    });
}

function animatedScrollTo(targetIndex) {
    if (isAnimating || students.length === 0) return;
    isAnimating = true;

    const total = students.length;
    let diff = targetIndex - currentIndex;

    diff = ((diff % total) + total) % total;
    if (diff > total / 2) diff -= total;
    if (diff === 0) {
        isAnimating = false;
        return;
    }

    const direction = diff > 0 ? 1 : -1;
    let steps = Math.abs(diff);

    if (steps > 5) {
        const jumpTarget = wrapIndex(targetIndex - (direction * 5), total);
        cardsContainer.classList.add("no-transition");
        currentIndex = jumpTarget;
        updateCardClasses();
        void cardsContainer.offsetWidth;
        cardsContainer.classList.remove("no-transition");
        steps = 5;
    }

    cardsContainer.classList.add("fast-transition");

    let currentStep = 0;
    function performStep() {
        if (currentStep < steps) {
            currentIndex = wrapIndex(currentIndex + direction, total);
            updateCardClasses();
            currentStep++;
            setTimeout(performStep, 100);
        } else {
            setTimeout(() => {
                cardsContainer.classList.remove("fast-transition");
                isAnimating = false;
            }, 100);
        }
    }
    performStep();
}

function navigateCarousel(direction) {
    const total = students.length;
    if (total <= 1 || isAnimating) return;

    isAnimating = true;
    currentIndex = wrapIndex(currentIndex + direction, total);
    updateCardClasses();

    setTimeout(() => {
        isAnimating = false;
    }, 550);
}

function renderLetterIndicator() {
    if (students.length > 0) {
        currentLetterEl.textContent = getCurrentLetter();
    }
}

// =============================================
// LETTER OVERLAY
// =============================================
function buildLetterGrid() {
    letterGrid.innerHTML = "";
    const activeLetter = students.length > 0 ? getCurrentLetter() : null;

    ALPHABET.forEach(letter => {
        const cell = document.createElement("div");
        cell.className = "letter-cell";
        cell.textContent = letter;

        const hasStudents = studentsByLetter[letter] && studentsByLetter[letter].length > 0;

        if (!hasStudents) cell.classList.add("disabled");
        if (letter === activeLetter) cell.classList.add("active-letter");

        if (hasStudents) {
            cell.addEventListener("click", () => {
                const firstIdx = students.findIndex(s => s.name.charAt(0).toUpperCase() === letter);
                if (firstIdx !== -1) {
                    animatedScrollTo(firstIdx);
                    closeDropdown();
                }
            });
        }
        letterGrid.appendChild(cell);
    });
}

function openDropdown() {
    buildLetterGrid();
    filterDropdown.classList.add("active");
}

function closeDropdown() {
    filterDropdown.classList.remove("active");
}

// =============================================
// EVENT LISTENERS
// =============================================
letterFilterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    filterDropdown.classList.contains("active") ? closeDropdown() : openDropdown();
});

document.addEventListener("click", (e) => {
    if (!filterDropdown.contains(e.target)) closeDropdown();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && filterDropdown.classList.contains("active")) closeDropdown();
    if (e.key === "ArrowLeft") navigateCarousel(-1);
    if (e.key === "ArrowRight") navigateCarousel(1);
});

arrowLeft.addEventListener("click", () => navigateCarousel(-1));
arrowRight.addEventListener("click", () => navigateCarousel(1));

// Touch / Swipe
let touchStartX = 0, touchStartY = 0, touchEndX = 0, touchEndY = 0;
const cardsSection = document.getElementById("cards-section");

cardsSection.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

cardsSection.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);
    if (Math.abs(deltaX) > 50 && deltaY < 100) {
        deltaX < 0 ? navigateCarousel(1) : navigateCarousel(-1);
    }
}, { passive: true });

cardsContainer.addEventListener("click", (e) => {
    const clickedCard = e.target.closest(".student-card");
    if (!clickedCard || isAnimating || e.target.closest(".portfolio-overlay")) return;

    if (clickedCard.classList.contains("card-left")) navigateCarousel(-1);
    else if (clickedCard.classList.contains("card-right")) navigateCarousel(1);
    else if (clickedCard.classList.contains("card-far-left")) navigateCarousel(-2);
    else if (clickedCard.classList.contains("card-far-right")) navigateCarousel(2);
});

let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => updateCardClasses(), 150);
});

// Mobile Drawer
hamburgerBtn.addEventListener("click", () => {
    mobileDrawer.classList.add("active");
    mobileDrawerOverlay.classList.add("active");
});

function closeMobileDrawer() {
    mobileDrawer.classList.remove("active");
    mobileDrawerOverlay.classList.remove("active");
}

closeDrawerBtn.addEventListener("click", closeMobileDrawer);
mobileDrawerOverlay.addEventListener("click", closeMobileDrawer);

// =============================================
// DATA FETCH & INITIALIZATION
// =============================================
async function loadDataAndInitialize() {
    try {
        // Fetch external data file
        const response = await fetch('students.json');
        const data = await response.json();
        
        // Populate global students array
        students.push(...data);
        
        // Handle Search Query
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const filteredStudents = students.filter(student => 
                student.name.toLowerCase().includes(query)
            );
            
            students.length = 0; 
            students.push(...filteredStudents);

            // Create Visual Search Banner
            const searchBanner = document.createElement('div');
            searchBanner.className = 'search-banner';
            searchBanner.innerHTML = `
                <p>Showing results for: <strong>"${searchQuery}"</strong></p>
                <a href="explore.html" class="clear-search-btn">Clear Search ✖</a>
            `;
            directoryPage.insertBefore(searchBanner, document.getElementById('filter-dropdown'));
        }

        // Group letters and render
        groupStudentsByLetter();

        // Handle Letter Query (from index page carousel click)
        const letterQuery = urlParams.get('letter');
        if (letterQuery && !searchQuery) {
            const targetLetter = letterQuery.toUpperCase();
            const firstIdx = students.findIndex(s => s.name.charAt(0).toUpperCase() === targetLetter);
            if (firstIdx !== -1) {
                currentIndex = firstIdx;
            }
        }

        initCarousel();

    } catch (error) {
        console.error("Error loading student data:", error);
        cardsContainer.innerHTML = `<div class="empty-state"><p>Error loading directory data. Please ensure students.json exists.</p></div>`;
    }
}

// Kick off the script
loadDataAndInitialize();