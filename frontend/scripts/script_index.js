/**
 * Landing page — script_index.js
 * Handles the responsive mobile navigation drawer toggle.
 */

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileDrawerOverlay = document.getElementById("mobile-drawer-overlay");
    const closeDrawerBtn = document.getElementById("close-drawer-btn");

    if (hamburgerBtn && mobileDrawer && mobileDrawerOverlay && closeDrawerBtn) {
        // Open drawer on hamburger button click
        hamburgerBtn.addEventListener("click", () => {
            mobileDrawer.classList.add("active");
            mobileDrawerOverlay.classList.add("active");
        });

        // Close drawer function
        const closeMobileDrawer = () => {
            mobileDrawer.classList.remove("active");
            mobileDrawerOverlay.classList.remove("active");
        };

        // Close drawer on close button click
        closeDrawerBtn.addEventListener("click", closeMobileDrawer);

        // Close drawer on overlay backdrop click
        mobileDrawerOverlay.addEventListener("click", closeMobileDrawer);

        // Close drawer when pressing Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mobileDrawer.classList.contains("active")) {
                closeMobileDrawer();
            }
        });
    }
});

// Class Directory Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.cd-prev-btn');
    const nextBtn = document.querySelector('.cd-next-btn');
    const sideCards = document.querySelectorAll('.cd-side-card');
    const activeCard = document.querySelector('.cd-active-card');
    const container = document.querySelector('.cd-carousel-container');

    if (prevBtn && nextBtn && sideCards.length > 0 && container && activeCard) {

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        letters.push('Class');

        // Starting position (21 = 'V', so the left side shows V, W, X, Y, Z and center shows Class)
        let currentIndex = 21;

        /**
         * Set or update the image inside a card.
         * Side cards use skeleton spines, active card uses letter book covers.
         */
        function setCardImage(card, letter, isCenter) {
            let img = card.querySelector('.cd-card-img');

            if (letter && letter.length === 1 && letter >= 'A' && letter <= 'Z') {
                const src = isCenter
                    ? `../assets/letters/${letter}.png`
                    : `../assets/skeletons/${letter}.png`;

                if (!img) {
                    img = document.createElement('img');
                    img.className = 'cd-card-img';
                    card.appendChild(img);
                }
                img.src = src;
                img.alt = isCenter ? `Book cover ${letter}` : `Book spine ${letter}`;
                card.style.backgroundColor = 'transparent';
            } else if (letter === 'Class') {
                const src = isCenter
                    ? `../assets/letters/26.png`
                    : `../assets/skeletons/26.png`;

                if (!img) {
                    img = document.createElement('img');
                    img.className = 'cd-card-img';
                    card.appendChild(img);
                }
                img.src = src;
                img.alt = isCenter ? `Book cover Class Intro` : `Book spine Class Intro`;
                card.style.backgroundColor = 'transparent';
            } else {
                if (img) img.remove();
                card.style.backgroundColor = isCenter ? '#ffffff' : '#f8f9fa';
            }
        }

        function updateCards() {
            const allCards = Array.from(container.children);
            const activeCardIndex = allCards.findIndex(card => card.classList.contains('cd-active-card'));
            const totalVisible = sideCards.length + 1;

            let displayLetters = [];
            for (let i = 0; i < totalVisible; i++) {
                let letterIndex = (currentIndex + i) % letters.length;
                displayLetters.push(letters[letterIndex]);
            }

            const centerLetter = displayLetters[activeCardIndex];

            // Update side cards with skeleton spines
            sideCards.forEach((card, i) => {
                let letter;
                if (i < activeCardIndex) {
                    letter = displayLetters[i];
                } else {
                    letter = displayLetters[i + 1];
                }
                card.setAttribute('data-letter', letter);
                setCardImage(card, letter, false);
            });

            // Update center card with letter book cover
            activeCard.setAttribute('data-letter', centerLetter);
            setCardImage(activeCard, centerLetter, true);
        }

        updateCards();

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % letters.length;
            updateCards();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + letters.length) % letters.length;
            updateCards();
        });
    }
});