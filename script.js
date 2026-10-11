/* LOADING */

const loader = document.getElementById("loader");

document.body.classList.add("no-scroll");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.classList.remove("no-scroll");

    }, 900);

});



/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");


        if (
            navMenu.classList.contains("open")
        ) {

            menuBtn.textContent = "×";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}



/* DARK / LIGHT MODE */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("theme");


if (themeBtn) {

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☾";

    } else {

        themeBtn.textContent = "☼";

    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            themeBtn.textContent = "☾";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.textContent = "☼";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}



/* NAVBAR SCROLL */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}, {
    passive: true
});



/* SCROLL REVEAL */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ACTIVE NAVIGATION */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}, {
    passive: true
});



/* PROJECT PREVIEW */

const projectPreviews =
    document.querySelectorAll(
        ".project-preview"
    );


projectPreviews.forEach(preview => {


    preview.addEventListener(
        "mousemove",
        event => {

            if (
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
            ) {
                return;
            }


            const rect =
                preview.getBoundingClientRect();


            const x =
                (event.clientX - rect.left)
                / rect.width - 0.5;


            const y =
                (event.clientY - rect.top)
                / rect.height - 0.5;


            preview.style.transform =
                `perspective(900px)
                 rotateX(${y * -2}deg)
                 rotateY(${x * 2}deg)
                 translateY(-6px)`;

        }
    );


    preview.addEventListener(
        "mouseleave",
        () => {

            preview.style.transform = "";

        }
    );

});



/* HERO PHOTO */

const heroPhoto =
    document.querySelector(".hero-photo");


if (heroPhoto) {


    heroPhoto.addEventListener(
        "mousemove",
        event => {

            if (
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
            ) {
                return;
            }


            const rect =
                heroPhoto.getBoundingClientRect();


            const x =
                (event.clientX - rect.left)
                / rect.width - 0.5;


            const y =
                (event.clientY - rect.top)
                / rect.height - 0.5;


            heroPhoto.style.transform =
                `perspective(800px)
                 rotateX(${y * -3}deg)
                 rotateY(${x * 3}deg)`;

        }
    );


    heroPhoto.addEventListener(
        "mouseleave",
        () => {

            heroPhoto.style.transform = "";

        }
    );

}

/* GREETING OTOMATIS DI ATAS FOTO */

function updateGreeting() {
    const greeting = document.getElementById("greeting");
    const emoji = document.querySelector(".greeting-emoji");

    if (!greeting || !emoji) return;

    const hour = new Date().getHours();

    if (hour >= 4 && hour < 11) {
        greeting.textContent = "Good morning!";
        emoji.textContent = "☀️";
    } else if (hour >= 11 && hour < 15) {
        greeting.textContent = "Good afternoon!";
        emoji.textContent = "🌤️";
    } else if (hour >= 15 && hour < 18) {
        greeting.textContent = "Good evening!";
        emoji.textContent = "🌇";
    } else {
        greeting.textContent = "Good night!";
        emoji.textContent = "🌙";
    }
}

updateGreeting();

