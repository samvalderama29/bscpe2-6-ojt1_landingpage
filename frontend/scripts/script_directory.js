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
        photo: "../assets/profile_pictures/ADLAWAN, Justin Cholo P.jpg",
        portfolio: "https://secchoo.github.io/OJT-Portfolio/"
    },
    {
        name: "AGUIRRE, Marielle Mae Baran",
        photo: "../assets/profile_pictures/AGUIRRE, Marielle Mae B.jpg",
        portfolio: "https://marielleaguirre-ojtportfolio.vercel.app/"
    },
    {
        name: "AGUSTIN, Ace Francis Valeriano",
        photo: "../assets/profile_pictures/AGUSTIN, Ace Francis V.png",
        portfolio: "https://aceagustin-ojtdocumentation.vercel.app/"
    },
    {
        name: "BACLEA-AN, Gelai Cuesta",
        photo: "../assets/profile_pictures/BACLEA-AN_Gelai C - Gelai Baclea-an.png",
        portfolio: "https://ojt-portfolio-gelai.vercel.app/"
    },
    {
        name: "BARRAMEDA, Dwayne Cañete",
        photo: "../assets/profile_pictures/BARRAMEDA, Dwayne.JPG",
        portfolio: "https://ojt-portfolio-tau.vercel.app/"
    },
    {
        name: "BAYLAN, Alexander Nykko Gomez",
        photo: "../assets/profile_pictures/BAYLAN, Alexander Nykko G.png",
        portfolio: "https://alexandernykkobaylan-ojt-portfolio.vercel.app/"
    },
    {
        name: "BIAS, Max Austine Baligasa",
        photo: "../assets/profile_pictures/BIAS, Max Austine B - Max Austine Bias.jpg",
        portfolio: "https://maxbias-ojt-portfolio.vercel.app/"
    },
    {
        name: "CARTAGENA, Aaron",
        photo: "../assets/profile_pictures/CARTAGENA, Aaron  - Aaron Cartagena.png",
        portfolio: "https://cartagena-portfolio.vercel.app/"
    },
    {
        name: "CAS, Ma. Kristina Limosnero",
        photo: "../assets/profile_pictures/CAS, Ma. Kristina L - Ma. Kristina Cas.png",
        portfolio: "https://github.com" // wala pa kay ma. kristina
    },
    {
        name: "CLARO, Kirby Christian Coronel",
        photo: "../assets/profile_pictures/claro_kirby_christian_c.jpg",
        portfolio: "https://kirbyclaro.github.io/ojt_portfolio/"
    },
    {
        name: "COMIA, Mark Lester Bordador",
        photo: "../assets/profile_pictures/COMIA, Mark Lester B - ExtincT -X.png",
        portfolio: "https://ojt-portfolio-website-weld.vercel.app/"
    },
    {
        name: "CONCEPCION, Jacey Erin Dael",
        photo: "../assets/profile_pictures/CONCEPCION, Jacey Erin D - Jacey Concepcion.jpg",
        portfolio: "https://jaceyconcepcion-ojtportfolio.vercel.app/"
    },
    {
        name: "CORA, Jian Christian Miguel",
        photo: "../assets/profile_pictures/CORA, Jian Christian M - Jian Christian Cora.jpg",
        portfolio: "https://ojt-requirements-tracker.vercel.app/"
    },
    {
        name: "DE DIOS, Daren James Acosta",
        photo: "../assets/profile_pictures/De Dios, Daren James A - Daren James De Dios.png",
        portfolio: "https://dediosojtportfolio.vercel.app/"
    },
    {
        name: "DE JUAN, Angela Marie Gatdula",
        photo: "../assets/profile_pictures/DE JUAN, Angela Marie G - Angela Marie G. De Juan.jpg",
        portfolio: "https://gelamrie-ojt-portfolio-snowy.vercel.app/"
    },
    {
        name: "DE LARA, Althea Mariell Calderon",
        photo: "../assets/profile_pictures/DE LARA, Althea.jpg",
        portfolio: "https://ojtwebiste.vercel.app/"
    },
    {
        name: "DELA CRUZ, Marwilson Tan",
        photo: "../assets/profile_pictures/DELA CRUZ, Marwilson T - Marwilson Dela Cruz.png",
        portfolio: "https://ojt-portfolio-nine.vercel.app/"
    },
    {
        name: "DELA CRUZ, Precious Nicole Javines",
        photo: "../assets/profile_pictures/DELA CRUZ, Precious Nicole J.jpg",
        portfolio: "https://preciousnicole-ojt-portfolio-precious10.vercel.app/"
    },
    {
        name: "DOMALAON, John Deniel Cruz",
        photo: "../assets/profile_pictures/DOMALAON_John Deniel C - John Deniel C. Domalaon.png",
        portfolio: "https://profile-ojt.vercel.app/"
    },
    {
        name: "ESCANILLA, Joanna Ashley Arevalo",
        photo: "../assets/profile_pictures/ESCANILLA, Joanna Ashley A.JPG",
        portfolio: "https://ojt-portfolio-git-main-ashley-escanilla.vercel.app/"
    },
    {
        name: "FERNANDO, Fernando Luis Ramos",
        photo: "../assets/profile_pictures/FERNANDO, Fernando Luis.jpg",
        portfolio: "https://ojt-gold.vercel.app/#about"
    },
    {
        name: "GELI, Jasper Matthieu Nocete",
        photo: "../assets/profile_pictures/GELI, Jasper Mathieu N - Jasper Mathieu Geli.jpg",
        portfolio: "https://jaspermathieugeli-ojt1-documents.vercel.app/"
    },
    {
        name: "ILANO, Victoria Yuki Mori",
        photo: "../assets/profile_pictures/ILANO, Victoria Yuki M.png",
        portfolio: "https://ilano-ojt-portfolio.vercel.app/"
    },
    {
        name: "KADOI, Amalia Sefrioto",
        photo: "../assets/profile_pictures/KADOI, Amalia S.png",
        portfolio: "https://ojt-portfolio-website-yagw.vercel.app/"
    },
    {
        name: "LARGA, Jann Earl Matthew Sombilon",
        photo: "../assets/profile_pictures/LARGA, Jann Earl Matthew S.png",
        portfolio: "https://rb.gy/e0eh5s"
    },
    {
        name: "LAYSON, Adrian Capuno",
        photo: "../assets/profile_pictures/LAYSON, Adrian C - Layson Adrian C..png",
        portfolio: "https://adrian-layson.github.io/ojt-portfolio/"
    },
    {
        name: "MAAÑO, Vince Anthony Nacario",
        photo: "../assets/profile_pictures/MAAÑO, Vince Anthony N - Vince Maaño.jpg",
        portfolio: "https://github.com" //wala pa kay vince
    },
    {
        name: "MENDEZ, Mark Joseph Reyes",
        photo: "../assets/profile_pictures/Mendez, Mark Joseph R - Mark Joseph Mendez.png",
        portfolio: "https://mendez-portfolio-one.vercel.app/"
    },
    {
        name: "NINOLLA, John Lenon Inosanto",
        photo: "../assets/profile_pictures/NINOLLA, John Lenon I - John Lenon Ninolla.jpg",
        portfolio: "https://ninolla-internship-portfolio-website.vercel.app/"
    },
    {
        name: "NONOD, Abegail Estorninos",
        photo: "../assets/profile_pictures/Nonod, Abegail E. - Abegail Nonod.png",
        portfolio: "https://abegail-nonod-ojt1-portfolio.vercel.app/" // 
    },
    {
        name: "OBATAY, Gabriel Josh Alba",
        photo: "../assets/profile_pictures/OBATAY, GABRIEL JOSH A. - Gabriel Josh A. Obatay.png",
        portfolio: "https://ojt-portfolio-joshobatay.vercel.app/"
    },
    {
        name: "OCAMPO, Jacin Kurt Salvador",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://ojt-portfolio-with-digital-ledger.vercel.app"
    },
    {
        name: "PAZ, Gabriel John Mikhael Hernandez",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://pazgabrielojtportfolio-bdkcq25mv-fema.vercel.app/"
    },
    {
        name: "PEDRIGAL, Francisco Moreno",
        photo: "../assets/profile_pictures/Pedrigal, Francisco III M - Francisco Pedrigal III.jpg",
        portfolio: "https://ojt-portfolio-fabong.vercel.app/"
    },
    {
        name: "PINEDA, Princess Mikee Oliva",
        photo: "../assets/profile_pictures/Pineda, Mikee O - Mikee Pineda.jpg",
        portfolio: "https://mikee-pineda-ojtportfolio.vercel.app/"
    },
    {
        name: "PIQUERO, Paula Bianca Antig",
        photo: "../assets/profile_pictures/PIQUERO, Paula Bianca A - Paula Bianca Piquero.jpg",
        portfolio: "https://ojtportfolio-snowy.vercel.app/"
    },
    {
        name: "PON-AN, Carlos Alberto Isidoro",
        photo: "../assets/profile_pictures/PON-AN_Carlos Alberto I - Carlos Alberto Pon-an.png",
        portfolio: "https://ponan-portfolio.vercel.app/"
    },
    {
        name: "RIVERA, Chloie Nicole Laureles",
        photo: "../assets/profile_pictures/RIVERA, Chloie Nicole L - Chloie Nicole Rivera.jpg",
        portfolio: "https://chloienicolerivera-ojt-portfolio.lovable.app/"
    },
    {
        name: "ROGADO, Gerald Tan",
        photo: "../assets/profile_pictures/ROGADO, Gerald T. - Gerald Rogado.jpg",
        portfolio: "https://gerald-rogado-portfolio.vercel.app/"
    },
    {
        name: "ROMERO, Karl Tristan Fernandez",
        photo: "../assets/profile_pictures/ROMERO, Karl Tristan F.png",
        portfolio: "https://karl-romero-portfolio-initial.vercel.app/"
    },
    {
        name: "SALINAS, Nykesha Dela Cruz",
        photo: "../assets/profile_pictures/SALINAS, Nykesha D - Nykesha Salinas.jpg",
        portfolio: "https://nykeshasalinas-ojt1portfolio.vercel.app/"
    },
    {
        name: "SANARES, Jaden Salac",
        photo: "../assets/profile_pictures/SANARES, Jaden S - Jaden Sanares.jpg",
        portfolio: "https://jadensanares-ojtdocumentation.vercel.app/"
    },
    {
        name: "SOGUILON, Kelvin Vicente",
        photo: "../assets/profile_pictures/SOGUILON, Kelvin V.png",
        portfolio: "https://kelvinsoguilon.github.io/ojt_portfolio/#"
    },
    {
        name: "SOLOMON, Justin Royse Liquigan",
        photo: "../assets/profile_pictures/SOLOMON, Justin Royse L.png",
        portfolio: "https://justinroyselsolomon-ojt-portfolio.vercel.app/"
    },
    {
        name: "TALAMOR, Shella Mandar",
        photo: "../assets/profile_pictures/TALAMOR_Shella Mae M - Shella Talamor.png",
        portfolio: "https://website-portfolio-git-main-talamor-shellas-projects.vercel.app/"
    },
    {
        name: "TAN, Kinn Iago Racaza",
        photo: "../assets/profile_pictures/TAN, Kinn Iago R - Kinn Tan.png",
        portfolio: "https://spoo.me/Kinn-OJT"
    },
    {
        name: "TANYAG, Jasmin Lorchano",
        photo: "../assets/profile_pictures/TANYAG, Jasmin L - Jasmin Tanyag.jpg",
        portfolio: "https://tanyag-jasmin-ojt-portfolio.vercel.app/"
    },
    {
        name: "TUBOG, Kyrie Eleison Quiliope",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://tubog-ojt-portfolio.vercel.app/"
    },
    {
        name: "VALDERAMA, Samantha Angel Eda",
        photo: "../assets/profile_pictures/VALDERAMA, Samantha Angel E.jpg",
        portfolio: "https://personal-website-git-200a25-samantha-angel-valderamas-projects.vercel.app/"
    },
    {
        name: "VASQUEZ, John Carlo Rances",
        photo: "../assets/placeholders/img_holder.jpg",
        portfolio: "https://johncarlovasquez-ojt-portfolio.vercel.app/" // 
    },
    {
        name: "VILLARITO, Aira Elbanbuena",
        photo: "../assets/profile_pictures/VILLARITO, Aira E - Aira Villarito.jpg",
        portfolio: "https://ojtportfoliovillaritoaira.vercel.app/"
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
    adjustCardNameFontSizes();
}

/**
 * Automatically adjust font sizes of student names if they overflow their containers.
 */
function adjustCardNameFontSizes() {
    const names = document.querySelectorAll(".card-name");
    names.forEach(nameEl => {
        nameEl.style.fontSize = ""; // Reset to CSS default
        let fontSize = parseFloat(window.getComputedStyle(nameEl).fontSize);
        let attempts = 0;
        // Decrease font size iteratively if the text overflows the container
        while (nameEl.scrollHeight > nameEl.clientHeight && fontSize > 8 && attempts < 20) {
            fontSize -= 0.5;
            nameEl.style.fontSize = fontSize + "px";
            attempts++;
        }
    });
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
