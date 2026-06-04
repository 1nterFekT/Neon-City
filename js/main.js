const title = document.getElementById("title");
const hero = document.querySelector(".hero");
const images = document.querySelectorAll(".statue_img");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    title.style.transform = `translate(${x * 15}px, ${y * 6}px)`;

    images.forEach((img, i) => {
        const dir = i === 0 ? -1 : 1;

        img.style.transform = `translate(${x * 50 * dir}px, ${y * 15}px)`;
    });

    hero.style.backgroundPosition = `${50 + x * 4}% center`;
});

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove("open");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("open");
        }
    });
});
