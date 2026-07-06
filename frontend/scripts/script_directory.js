/**
 * Student Directory — script_directory.js
 * Handles student data, card rendering, pagination, and letter overlay.
 */

// =============================================
// STUDENT DATA
// =============================================
const students = [
    "ADLAWAN, Justin Cholo Pamida",
    "AGUIRRE, Marielle Mae Baran",
    "AGUSTIN, Ace Francis Valeriano",
    "BACLEA-AN, Gelai Cuesta",
    "BARRAMEDA, Dwayne Cañete",
    "BAYLAN, Alexander Nykko Gomez",
    "BIAS, Max Austine Baligasa",
    "CARTAGENA, Aaron",
    "CAS, Ma. Kristina Limosnero",
    "CLARO, Kirby Christian Coronel",
    "COMIA, Mark Lester Bordador",
    "CONCEPCION, Jacey Erin Dael",
    "CORA, Jian Christian Miguel",
    "DE DIOS, Daren James Acosta",
    "DE JUAN, Angela Marie Gatdula",
    "DE LARA, Althea Mariell Calderon",
    "DELA CRUZ, Marwilson Tan",
    "DELA CRUZ, Precious Nicole Javines",
    "DOMALAON, John Deniel Cruz",
    "ESCANILLA, Joanna Ashley Arevalo",
    "FERNANDO, Fernando Luis Ramos",
    "GELI, Jasper Matthieu Nocete",
    "ILANO, Victoria Yuki Mori",
    "KADOI, Amalia Sefrioto",
    "LARGA, Jann Earl Matthew Sombilon",
    "LAYSON, Adrian Capuno",
    "MAAÑO, Vince Anthony Nacario",
    "MENDEZ, Mark Joseph Reyes",
    "NINOLLA, John Lenon Inosanto",
    "NONOD, Abegail Estorninos",
    "OBATAY, Gabriel Josh Alba",
    "OCAMPO, Jacin Kurt Salvador",
    "PAZ, Gabriel John Mikhael Hernandez",
    "PEDRIGAL, Francisco Moreno",
    "PINEDA, Princess Mikee Oliva",
    "PIQUERO, Paula Bianca Antig",
    "PON-AN, Carlos Alberto Isidoro",
    "RIVERA, Chloie Nicole Laureles",
    "ROGADO, Gerald Tan",
    "ROMERO, Karl Tristan Fernandez",
    "SALINAS, Nykesha Dela Cruz",
    "SANARES, Jaden Salac",
    "SOGUILON, Kelvin Vicente",
    "SOLOMON, Justin Royse Liquigan",
    "TALAMOR, Shella Mandar",
    "TAN, Kinn Iago Racaza",
    "TANYAG, Jasmin Lorchano",
    "TUBOG, Kyrie Eleison Quiliope",
    "VALDERAMA, Samantha Angel Eda",
    "VASQUEZ, John Carlo Rances",
    "VILLARITO, Aira Elbanbuena"
];

// =============================================
// GROUP STUDENTS BY FIRST LETTER OF LAST NAME
// =============================================
const studentsByLetter = {};

students.forEach(name => {
    const firstLetter = name.charAt(0).toUpperCase();
    if (!studentsByLetter[firstLetter]) {
        studentsByLetter[firstLetter] = [];
    }
    studentsByLetter[firstLetter].push(name);
});

// Full alphabet for overlay
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// =============================================
// STATE
// =============================================
let currentLetter = "A";
let currentPage = 0;
const CARDS_PER_PAGE = 3;

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
// RENDERING
// =============================================

/**
 * Get how many cards to show based on viewport width.
 */
function getCardsPerPage() {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 768) return 2;
    return CARDS_PER_PAGE;
}

/**
 * Render student cards for the current letter and page.
 */
function renderCards() {
    const studentsForLetter = studentsByLetter[currentLetter] || [];
    const perPage = getCardsPerPage();
    const startIndex = currentPage * perPage;
    const visibleStudents = studentsForLetter.slice(startIndex, startIndex + perPage);

    cardsContainer.innerHTML = "";

    if (studentsForLetter.length === 0) {
        const emptyDiv = document.createElement("div");
        emptyDiv.className = "empty-state";
        emptyDiv.innerHTML = `<p>No students with last name starting with "${currentLetter}"</p>`;
        cardsContainer.appendChild(emptyDiv);
    } else {
        visibleStudents.forEach((name, index) => {
            const card = document.createElement("div");
            card.className = "student-card";
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img class="student-photo" src="../assets/placeholders/img_holder.jpg" alt="Photo of ${name}">
                </div>
                <p class="card-name">${name}</p>
            `;

            cardsContainer.appendChild(card);
        });
    }

    updateArrows();
}

/**
 * Update the large letter indicator.
 */
function renderLetterIndicator() {
    currentLetterEl.textContent = currentLetter;
}

/**
 * Show/hide navigation arrows based on pagination bounds.
 */
function updateArrows() {
    const studentsForLetter = studentsByLetter[currentLetter] || [];
    const perPage = getCardsPerPage();
    const totalPages = Math.ceil(studentsForLetter.length / perPage);

    if (currentPage <= 0) {
        arrowLeft.classList.add("hidden");
    } else {
        arrowLeft.classList.remove("hidden");
    }

    if (currentPage >= totalPages - 1 || studentsForLetter.length === 0) {
        arrowRight.classList.add("hidden");
    } else {
        arrowRight.classList.remove("hidden");
    }
}

/**
 * Full re-render: letter indicator + cards.
 */
function render() {
    renderLetterIndicator();
    renderCards();
}

// =============================================
// LETTER OVERLAY
// =============================================

/**
 * Build the letter grid in the overlay panel (A-Z).
 */
function buildLetterGrid() {
    letterGrid.innerHTML = "";

    ALPHABET.forEach(letter => {
        const cell = document.createElement("div");
        cell.className = "letter-cell";
        cell.textContent = letter;

        const hasStudents = studentsByLetter[letter] && studentsByLetter[letter].length > 0;

        if (!hasStudents) {
            cell.classList.add("disabled");
        }

        if (letter === currentLetter) {
            cell.classList.add("active-letter");
        }

        if (hasStudents) {
            cell.addEventListener("click", () => {
                currentLetter = letter;
                currentPage = 0;
                render();
                closeDropdown();
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

// Arrow navigation
arrowLeft.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderCards();
    }
});

arrowRight.addEventListener("click", () => {
    const studentsForLetter = studentsByLetter[currentLetter] || [];
    const perPage = getCardsPerPage();
    const totalPages = Math.ceil(studentsForLetter.length / perPage);

    if (currentPage < totalPages - 1) {
        currentPage++;
        renderCards();
    }
});

// Responsive: re-render on resize (debounced)
let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reset page if current page would be out of bounds at new size
        const studentsForLetter = studentsByLetter[currentLetter] || [];
        const perPage = getCardsPerPage();
        const totalPages = Math.ceil(studentsForLetter.length / perPage);
        if (currentPage >= totalPages) {
            currentPage = Math.max(0, totalPages - 1);
        }
        renderCards();
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
render();

// Re-render cards on window resize to update visible count dynamically
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const studentsForLetter = studentsByLetter[currentLetter] || [];
        const perPage = getCardsPerPage();
        const maxPage = Math.max(0, Math.ceil(studentsForLetter.length / perPage) - 1);
        if (currentPage > maxPage) {
            currentPage = maxPage;
        }
        renderCards();
    }, 100);
});

