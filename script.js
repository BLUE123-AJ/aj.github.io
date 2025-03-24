document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".section");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.id === sectionId) {
                section.classList.add("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = event.target.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // Show home section by default
    showSection("home");
});
