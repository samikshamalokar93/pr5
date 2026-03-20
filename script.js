// Welcome message
window.onload = function () {
    alert("Welcome to Fresh Supermarket 🛒");
};

// Change heading color on click
document.querySelectorAll("h2").forEach(item => {
    item.addEventListener("click", function () {
        this.style.color = "orange";
    });
});

// Show today's offer automatically
const offerText = document.querySelector("h2:nth-of-type(3) + p");

if (offerText) {
    const today = new Date().getDay();

    // Sunday = 0
    if (today === 0) {
        offerText.innerText = "🎉 Special Sunday Offer: Extra 20% OFF on fruits & vegetables!";
    }
}