/**
 * Class List — script_class_list.js
 * Renders the FEMALE / MALE student name lists and handles mobile nav drawer.
 * Depends on student_database.js being loaded first (provides femaleNames, maleNames).
 */

document.addEventListener('DOMContentLoaded', () => {
    // =============================================
    // RENDER CLASS LIST
    // =============================================
    const container = document.getElementById('class-list-content');

    if (container && typeof femaleNames !== 'undefined' && typeof maleNames !== 'undefined') {
        // FEMALE section
        const femaleSection = document.createElement('div');
        femaleSection.className = 'class-list-section';

        const femaleHeading = document.createElement('p');
        femaleHeading.className = 'section-heading';
        femaleHeading.textContent = 'FEMALE';
        femaleSection.appendChild(femaleHeading);

        femaleNames.forEach(name => {
            const p = document.createElement('p');
            p.className = 'student-name';
            p.textContent = name;
            femaleSection.appendChild(p);
        });

        container.appendChild(femaleSection);

        // Spacer between sections
        const spacer = document.createElement('div');
        spacer.className = 'section-spacer';
        container.appendChild(spacer);

        // MALE section
        const maleSection = document.createElement('div');
        maleSection.className = 'class-list-section';

        const maleHeading = document.createElement('p');
        maleHeading.className = 'section-heading';
        maleHeading.textContent = 'MALE';
        maleSection.appendChild(maleHeading);

        maleNames.forEach(name => {
            const p = document.createElement('p');
            p.className = 'student-name';
            p.textContent = name;
            maleSection.appendChild(p);
        });

        container.appendChild(maleSection);
    }

    // =============================================
    // MOBILE NAV DRAWER
    // =============================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    if (hamburgerBtn && mobileDrawer && mobileDrawerOverlay && closeDrawerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
            mobileDrawerOverlay.classList.add('active');
        });

        const closeMobileDrawer = () => {
            mobileDrawer.classList.remove('active');
            mobileDrawerOverlay.classList.remove('active');
        };

        closeDrawerBtn.addEventListener('click', closeMobileDrawer);
        mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
                closeMobileDrawer();
            }
        });
    }
});