document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNavList = document.getElementById('main-nav-list');
    const navLinks = document.querySelectorAll('#main-nav-list li a[href^="#"]'); // Select only links within the nav list

    // --- Toggle Mobile Menu ---
    if (mobileMenuToggle && mainNavList) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNavList.classList.toggle('mobile-nav-active');

            // Optional: Change button icon (e.g., to 'X')
            if (mainNavList.classList.contains('mobile-nav-active')) {
                mobileMenuToggle.innerHTML = '×'; // Change to 'X' icon
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenuToggle.innerHTML = '☰'; // Change back to hamburger
                 mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Function to close mobile menu ---
    const closeMobileMenu = () => {
        if (mainNavList && mainNavList.classList.contains('mobile-nav-active')) {
            mainNavList.classList.remove('mobile-nav-active');
            mobileMenuToggle.innerHTML = '☰'; // Reset hamburger icon
             mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // --- Smooth Scrolling for Navigation Links (and close mobile menu) ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close the mobile menu after clicking a link
                closeMobileMenu();
            }
        });
    });

    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Optional: Close menu if clicked outside ---
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNavList.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle) {
            closeMobileMenu();
        }
    });


    console.log("Adoration Chambers site initialized with responsive nav.");

});