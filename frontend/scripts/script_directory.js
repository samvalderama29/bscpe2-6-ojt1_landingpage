/*
 * Student Directory — script_directory.js
 * Handles student data, card rendering, carousel navigation, letter filter,
 * touch/swipe gestures, and mobile nav drawer.
 */

// =============================================
// STUDENT DATA
// =============================================
const students = [
    {
        name: "ADLAWAN, Justin Cholo Pamida",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com/justin-cholo-adlawan"
    },
    {
        name: "AGUIRRE, Marielle Mae Baran",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "AGUSTIN, Ace Francis Valeriano",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "BACLEA-AN, Gelai Cuesta",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "BARRAMEDA, Dwayne Cañete",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "BAYLAN, Alexander Nykko Gomez",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "BIAS, Max Austine Baligasa",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "CARTAGENA, Aaron",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "CAS, Ma. Kristina Limosnero",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "CLARO, Kirby Christian Coronel",
        photo: "../assets/profile_pictures/claro_kirby_christian_c.jpg",
        portfolio: "https://github.com/kirby-claro"
    },
    {
        name: "COMIA, Mark Lester Bordador",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "CONCEPCION, Jacey Erin Dael",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "CORA, Jian Christian Miguel",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "DE DIOS, Daren James Acosta",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "DE JUAN, Angela Marie Gatdula",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "DE LARA, Althea Mariell Calderon",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "DELA CRUZ, Marwilson Tan",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "DELA CRUZ, Precious Nicole Javines",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "DOMALAON, John Deniel Cruz",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "ESCANILLA, Joanna Ashley Arevalo",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "FERNANDO, Fernando Luis Ramos",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "GELI, Jasper Matthieu Nocete",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "ILANO, Victoria Yuki Mori",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "KADOI, Amalia Sefrioto",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "LARGA, Jann Earl Matthew Sombilon",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "LAYSON, Adrian Capuno",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "MAAÑO, Vince Anthony Nacario",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "MENDEZ, Mark Joseph Reyes",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "NINOLLA, John Lenon Inosanto",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "NONOD, Abegail Estorninos",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "OBATAY, Gabriel Josh Alba",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "OCAMPO, Jacin Kurt Salvador",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "PAZ, Gabriel John Mikhael Hernandez",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "PEDRIGAL, Francisco Moreno",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "PINEDA, Princess Mikee Oliva",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "PIQUERO, Paula Bianca Antig",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "PON-AN, Carlos Alberto Isidoro",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "RIVERA, Chloie Nicole Laureles",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "ROGADO, Gerald Tan",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "ROMERO, Karl Tristan Fernandez",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "SALINAS, Nykesha Dela Cruz",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "SANARES, Jaden Salac",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "SOGUILON, Kelvin Vicente",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "SOLOMON, Justin Royse Liquigan",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "TALAMOR, Shella Mandar",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "TAN, Kinn Iago Racaza",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "TANYAG, Jasmin Lorchano",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "TUBOG, Kyrie Eleison Quiliope",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "VALDERAMA, Samantha Angel Eda",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "VASQUEZ, John Carlo Rances",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    },
    {
        name: "VILLARITO, Aira Elbanbuena",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://github.com"
    }
];

// =============================================
// GROUP STUDENTS BY FIRST LETTER OF LAST NAME (For Letter Overlay)
// =============================================
const studentsByLetter = {};

students.forEach(student => {
    const name = typeof student === "string" ? student : student.name;
    const firstLetter = name.charAt(0).toUpperCase();
    if (!studentsByLetter[firstLetter]) {
        studentsByLetter[firstLetter] = [];
    }
    studentsByLetter[firstLetter].push(student);
});

// Full alphabet for overlay
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// =============================================
// STATE
// =============================================
let currentIndex = 0; // Index of the centered student in the global students array
let isAnimating = false; // Prevent rapid clicks during transition

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

// Mobile Drawer DOM References
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

// =============================================
// RENDERING
// =============================================

// =============================================
// RENDERING
// =============================================

/**
 * Create a single student card DOM element.
 */
function createCardElement(student) {
    const isObject = typeof student === "object" && student !== null;
    const name = isObject ? student.name : student;
    const photo = (isObject && student.photo) ? student.photo : "../assets/placeholders/img_holder.jpg";
    const portfolio = (isObject && student.portfolio) ? student.portfolio : "";

    const card = document.createElement("div");
    card.className = "student-card card-hidden";

    card.innerHTML = `
        <div class="card-image-wrapper">
            <img class="student-photo" src="${photo}" alt="Photo of ${name}">
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

/**
 * Initialize all student cards in the DOM container once.
 */
function initCarousel() {
    cardsContainer.innerHTML = "";
    students.forEach((student, index) => {
        const card = createCardElement(student);
        card.setAttribute("data-index", index);
        cardsContainer.appendChild(card);
    });
    updateCardClasses();
}

/**
 * Update the CSS classes of all cards in the DOM to transition them.
 */
function updateCardClasses() {
    const total = students.length;
    const cards = cardsContainer.querySelectorAll(".student-card");

    if (total === 0) {
        cardsContainer.innerHTML = `<div class="empty-state"><p>No students available</p></div>`;
        arrowLeft.classList.add("hidden");
        arrowRight.classList.add("hidden");
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
        card.className = "student-card"; // Reset position classes

        if (idx === centerIdx) {
            card.classList.add("card-center");
        } else if (idx === leftIdx) {
            card.classList.add("card-left");
        } else if (idx === rightIdx) {
            card.classList.add("card-right");
        } else if (idx === farLeftIdx) {
            card.classList.add("card-far-left");
        } else if (idx === farRightIdx) {
            card.classList.add("card-far-right");
        } else if (idx === exitLeftIdx) {
            card.classList.add("card-exit-left");
        } else if (idx === exitRightIdx) {
            card.classList.add("card-exit-right");
        } else {
            card.classList.add("card-hidden");
        }
    });

    renderLetterIndicator();
}

/**
 * Jump to a specific student index instantly without transition animations.
 */
function jumpTo(index) {
    cardsContainer.classList.add("no-transition");
    currentIndex = index;
    updateCardClasses();
    // Force browser reflow to apply changes instantly
    void cardsContainer.offsetWidth;
    cardsContainer.classList.remove("no-transition");
}

/**
 * Scroll to a target student index programmatically using a rapid visual scrolling animation.
 * Jumps closer if target is far, then scrolls the remaining 5 steps for smooth performance.
 */
function animatedScrollTo(targetIndex) {
    if (isAnimating) return;
    isAnimating = true;

    const total = students.length;
    let diff = targetIndex - currentIndex;

    // Shortest path calculation (wrap-around)
    diff = ((diff % total) + total) % total;
    if (diff > total / 2) {
        diff -= total;
    }

    if (diff === 0) {
        isAnimating = false;
        return;
    }

    const direction = diff > 0 ? 1 : -1;
    let steps = Math.abs(diff);

    // Limit visual scroll steps to keep the response time under 500ms
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
            setTimeout(performStep, 100); // 100ms per step
        } else {
            setTimeout(() => {
                cardsContainer.classList.remove("fast-transition");
                isAnimating = false;
            }, 100);
        }
    }

    performStep();
}

/**
 * Navigate the carousel by a given direction (-1 = left, +1 = right).
 * Uses smooth CSS transitions.
 */
function navigateCarousel(direction) {
    const total = students.length;
    if (total <= 1 || isAnimating) return;

    isAnimating = true;
    currentIndex = wrapIndex(currentIndex + direction, total);
    updateCardClasses();

    setTimeout(() => {
        isAnimating = false;
    }, 550); // Matches CSS transition duration
}

/**
 * Update the large letter indicator.
 */
function renderLetterIndicator() {
    currentLetterEl.textContent = getCurrentLetter();
}

/**
 * Full re-render wrapper.
 */
function render() {
    updateCardClasses();
}

// =============================================
// LETTER OVERLAY
// =============================================

/**
 * Build the letter grid in the overlay panel (A-Z).
 */
function buildLetterGrid() {
    letterGrid.innerHTML = "";
    const activeLetter = getCurrentLetter();

    ALPHABET.forEach(letter => {
        const cell = document.createElement("div");
        cell.className = "letter-cell";
        cell.textContent = letter;

        const hasStudents = studentsByLetter[letter] && studentsByLetter[letter].length > 0;

        if (!hasStudents) {
            cell.classList.add("disabled");
        }

        if (letter === activeLetter) {
            cell.classList.add("active-letter");
        }

        if (hasStudents) {
            cell.addEventListener("click", () => {
                // Find first student index matching this letter
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

/**
 * Open the letter dropdown.
 */
function openDropdown() {
    buildLetterGrid();
    filterDropdown.classList.add("active");
}

/**
 * Close the letter dropdown.
 */
function closeDropdown() {
    filterDropdown.classList.remove("active");
}

// =============================================
// EVENT LISTENERS
// =============================================

// Toggle dropdown on button click (stop propagation to prevent immediately closing)
letterFilterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (filterDropdown.classList.contains("active")) {
        closeDropdown();
    } else {
        openDropdown();
    }
});

// Close dropdown when clicking anywhere else outside of it
document.addEventListener("click", (e) => {
    if (!filterDropdown.contains(e.target)) {
        closeDropdown();
    }
});

// Escape key closes dropdown
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && filterDropdown.classList.contains("active")) {
        closeDropdown();
    }
});

// Arrow navigation — carousel style
arrowLeft.addEventListener("click", () => {
    navigateCarousel(-1);
});

// Right arrow navigation
arrowRight.addEventListener("click", () => {
    navigateCarousel(1);
});

// Keyboard arrow navigation
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        navigateCarousel(-1);
    } else if (e.key === "ArrowRight") {
        navigateCarousel(1);
    }
});

// =============================================
// TOUCH / SWIPE SUPPORT
// =============================================
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
const SWIPE_THRESHOLD = 50; // Minimum distance in px to register as a swipe
const SWIPE_VERTICAL_LIMIT = 100; // Max vertical movement to still count as horizontal swipe

const cardsSection = document.getElementById("cards-section");

cardsSection.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

cardsSection.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);

    // Only register horizontal swipes (not vertical scrolling)
    if (Math.abs(deltaX) > SWIPE_THRESHOLD && deltaY < SWIPE_VERTICAL_LIMIT) {
        if (deltaX < 0) {
            // Swiped left → navigate right (next)
            navigateCarousel(1);
        } else {
            // Swiped right → navigate left (prev)
            navigateCarousel(-1);
        }
    }
}

// =============================================
// CLICK ON SIDE CARDS TO NAVIGATE
// =============================================
cardsContainer.addEventListener("click", (e) => {
    const clickedCard = e.target.closest(".student-card");
    if (!clickedCard || isAnimating) return;

    // Don't navigate if clicking portfolio link
    if (e.target.closest(".portfolio-overlay")) return;

    if (clickedCard.classList.contains("card-left")) {
        navigateCarousel(-1);
    } else if (clickedCard.classList.contains("card-right")) {
        navigateCarousel(1);
    } else if (clickedCard.classList.contains("card-far-left")) {
        navigateCarousel(-2);
    } else if (clickedCard.classList.contains("card-far-right")) {
        navigateCarousel(2);
    }
});

// =============================================
// RESPONSIVE: Re-render on resize (debounced)
// =============================================
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateCardClasses();
    }, 150);
});

// =============================================
// MOBILE NAV DRAWER LISTENERS
// =============================================

// Open drawer on hamburger button click
hamburgerBtn.addEventListener("click", () => {
    mobileDrawer.classList.add("active");
    mobileDrawerOverlay.classList.add("active");
});

// Close drawer function
function closeMobileDrawer() {
    mobileDrawer.classList.remove("active");
    mobileDrawerOverlay.classList.remove("active");
}

// Close drawer on close button click
closeDrawerBtn.addEventListener("click", closeMobileDrawer);

// Close drawer on overlay backdrop click
mobileDrawerOverlay.addEventListener("click", closeMobileDrawer);

// Close drawer when pressing Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("active")) {
        closeMobileDrawer();
    }
});

// =============================================
// INITIAL RENDER
// =============================================
initCarousel();
