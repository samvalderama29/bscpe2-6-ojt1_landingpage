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
    const container = document.querySelector('.cd-carousel-container');
    
    // Ensure the elements exist on the page before running logic
    if (prevBtn && nextBtn && sideCards.length > 0 && container) {
        
        // Full A-Z array with 'Class' included at the end
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        letters.push('Class'); 
        
        // Starting position (22 = 'W', so the left side shows V, W, X, Y, Z)
        let currentIndex = 22; 

        function updateCards() {
            // Find how many cards are placed BEFORE the center active card in your HTML
            const allCards = Array.from(container.children);
            const activeCardIndex = allCards.findIndex(card => card.classList.contains('cd-active-card'));
            
            // Total letters we need to display (all side cards + 1 center card)
            const totalVisible = sideCards.length + 1; 

            // Create an array of the currently visible letters
            let displayLetters = [];
            for (let i = 0; i < totalVisible; i++) {
                let letterIndex = (currentIndex + i) % letters.length;
                displayLetters.push(letters[letterIndex]);
            }

            // Loop through your side cards and assign the correct letter
            sideCards.forEach((card, i) => {
                if(i < activeCardIndex) {
                    card.setAttribute('data-letter', displayLetters[i]);
                } else {
                    card.setAttribute('data-letter', displayLetters[i + 1]); 
                }
            });
        }

        // Initialize the letters on page load
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