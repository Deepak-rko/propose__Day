// Play background music on page load
window.onload = function() {
    document.getElementById("bg-music").play();
};
function playMusic() {
    const music = document.getElementById("bg-music");
    music.play().catch(error => console.log("Autoplay blocked, user needs to interact!"));
    document.getElementById("play-music").style.display = "none"; // Hide button after play
}

window.onload = function() {
    document.getElementById("play-music").style.display = "block"; // Show button on load
};

// Create Falling Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate Hearts at Intervals
setInterval(createHeart, 300);

// Handle Yes Button Click
document.getElementById("yes-button").addEventListener("click", function() {
    document.querySelector(".proposal-container").classList.add("hidden");
    document.getElementById("thank-you-message").classList.remove("hidden");
});

// Handle No Button Run Away Effect
document.getElementById("no-button").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
    this.style.left = x + "px";
    this.style.top = y + "px";
});
