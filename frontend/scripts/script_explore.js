/**
 * Shared Header and Footer — script_header_footer.js
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

document.addEventListener("DOMContentLoaded", async () => {
    const searchInput = document.getElementById("student-search");
    const suggestionsBox = document.getElementById("search-suggestions");

    if (!searchInput || !suggestionsBox) return;

    try {
        const response = await fetch("students.json");
        const students = await response.json();

        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();

            suggestionsBox.innerHTML = "";

            if (!query) {
                suggestionsBox.style.display = "none";
                return;
            }

            const surnameMatches = students.filter(student => {
                const surname = student.name
                    .split(",")[0]
                    .trim()
                    .toLowerCase();

                return surname.startsWith(query);
            });

            const firstNameMatches = students.filter(student => {
                const surname = student.name
                    .split(",")[0]
                    .trim()
                    .toLowerCase();

                if (surname.startsWith(query)) return false;

                const remainingNames = student.name
                    .split(",")
                    .slice(1)
                    .join(" ")
                    .toLowerCase()
                    .trim();

                return remainingNames
                    .split(/\s+/)
                    .some(part => part.startsWith(query));
            });

            const matches = surnameMatches.slice(0, 5);

            if (matches.length === 0) {
                suggestionsBox.style.display = "none";
                return;
            }

            matches.forEach(student => {
                const item = document.createElement("div");

                item.className = "search-suggestion-item";
                item.textContent = student.name;

                item.addEventListener("click", () => {
                    window.location.href = student.portfolio;
                });

                suggestionsBox.appendChild(item);
            });

            suggestionsBox.style.display = "block";
        });

        document.addEventListener("click", (event) => {
            if (!suggestionsBox.contains(event.target) &&
                event.target !== searchInput) {
                suggestionsBox.style.display = "none";
            }
        });

    } catch (error) {
        console.error("Error loading students.json:", error);
    }
});