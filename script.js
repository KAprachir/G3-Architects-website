// Select the button
const exploreBtn = document.querySelector(".btn-primary");

// Add click event
exploreBtn.addEventListener("click", function () {
    alert("Welcome to G3 Architects! 👋");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        navbar.style.backgroundColor = "#ffffff";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.backgroundColor = "transparent";
    }
});

const counters = document.querySelectorAll(".fact-number");

counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
