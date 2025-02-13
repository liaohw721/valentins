document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    // Create the Christmas card
    const card = document.createElement("div");
    card.classList.add("christmas-card");
    card.innerHTML = `
        <h1>Happy Valentines Day!❤️😆</h1>
        <p>To my dearest, there are countless words to express how much I wish you happiness. In short, I love you so much.❤️</p>
        <p>Your dear, <br>Henry Liao</p>

        <p class="countdown">wait me <span id="timer">15</span> seconds...</p>
    `;

    // Append the card to the body
    document.body.appendChild(card);

    // Track the state (whether the card is visible or hidden)
    let cardVisible = false;
    let musicPlayed = false;

    // Reference the audio element
    const backgroundMusic = document.getElementById("background-music");

    // Add click event to the box
    box.addEventListener("click", () => {
        if (!cardVisible) {
            // Show the card
            card.style.display = "flex";
            cardVisible = true;

            // Play music if not already played
            if (!musicPlayed) {
                backgroundMusic.play();
                musicPlayed = true;
            }

            // Start countdown and redirect after 15 seconds
            let timeLeft = 15;
            const timerElement = document.getElementById("timer");

            const countdown = setInterval(() => {
                timeLeft--;
                timerElement.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    window.location.href = "nextpage.html"; // Change to your desired page
                }
            }, 1000); // Update every second
        }
    });

    // Add click event to the card
    card.addEventListener("click", () => {
        if (cardVisible) {
            // Hide the card with animation
            card.classList.add("hidden");
            setTimeout(() => {
                card.style.display = "none";
                card.classList.remove("hidden");
            }, 1000); // Match the animation duration (1s)
            cardVisible = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Heart and sparkle effect
    function createFloatingElements() {
        const container = document.querySelector(".snow");
        const symbols = ["❤️", "✨"]; // Heart and sparkle symbols

        for (let i = 0; i < 100; i++) { // Adjust number of elements here
            const element = document.createElement("div");
            element.classList.add("floating-element");
            element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)]; // Randomly select heart or sparkle

            // Set random size, position, and animation
            element.style.fontSize = `${Math.random() * 1.5 + 1}em`; // Random size between 1em and 2.5em
            element.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            element.style.animationDuration = `${Math.random() * 3 + 7}s`; // Random animation speed between 7s and 10s
            element.style.animationDelay = `${Math.random() * 5}s`; // Random delay before floating starts

            container.appendChild(element);
        }
    }

    // Call function to create elements
    createFloatingElements();
});
