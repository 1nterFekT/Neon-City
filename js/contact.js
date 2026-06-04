const form = document.getElementById("form");
const message = document.getElementById("message");

document.addEventListener("mousemove", (e) => {
    document.body.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #1a1a1a, #000)`;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "REQUEST SENT TO NEON CITY NETWORK";
});
