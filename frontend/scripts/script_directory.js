/*
 * Student Directory — script_directory.js
 * Handles student data, card rendering, pagination, and letter overlay.
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
// GROUP STUDENTS BY FIRST LETTER OF LAST NAME
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
        visibleStudents.forEach((student, index) => {
            const isObject = typeof student === "object" && student !== null;
            const name = isObject ? student.name : student;
            const photo = (isObject && student.photo) ? student.photo : "../assets/placeholders/img_holder.jpg";
            const portfolio = (isObject && student.portfolio) ? student.portfolio : "";

            const card = document.createElement("div");
            card.className = "student-card";
            card.style.animationDelay = `${index * 0.1}s`;

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

