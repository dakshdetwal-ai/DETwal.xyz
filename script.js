// ======================================
// DETwal Main Website Script
// ======================================


// Scroll to a section smoothly
function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// Change navbar background when scrolling

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(5, 7, 13, 0.96)";

    } else {

        navbar.style.background =
            "rgba(5, 7, 13, 0.88)";

    }

});
