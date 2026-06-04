const cards = document.querySelectorAll(".figure-card");

let current = 0;

function getIndex(i) {
    return (i + cards.length) % cards.length;
}

function update() {
    const prev = getIndex(current - 1);
    const next = getIndex(current + 1);

    cards.forEach((card, i) => {
        card.classList.remove("active", "left", "right", "hidden");

        if (i === current) {
            card.classList.add("active");
        } else if (i === prev) {
            card.classList.add("left");
        } else if (i === next) {
            card.classList.add("right");
        } else {
            card.classList.add("hidden");
        }
    });
}

function next() {
    current = getIndex(current + 1);
    update();
}

function prev() {
    current = getIndex(current - 1);
    update();
}

document.getElementById("next").addEventListener("click", next);

document.getElementById("prev").addEventListener("click", prev);

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (e.key === "ArrowRight" || key === "d" || key === "в") {
        next();
    }

    if (e.key === "ArrowLeft" || key === "a" || key === "ф") {
        prev();
    }
});

update();
