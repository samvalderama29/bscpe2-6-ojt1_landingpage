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
