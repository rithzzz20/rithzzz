document.addEventListener("DOMContentLoaded", () => {
    const giftBox = document.getElementById("giftBox");
    const message1 = document.getElementById("message1");
    const message2 = document.getElementById("message2");
    const nextButton1 = document.getElementById("nextButton1");

    // Function to start the custom confetti (hearts and stars) across the full page
    const startConfetti = () => {
        (function frame() {
            confetti({
                particleCount: 10,
                angle: 90,
                spread: 45,
                origin: { x: Math.random(), y: 0 }, // Starts from the top of the page
                shapes: ['circle'], // Using circle for hearts
                colors: ['#ff69b4', '#ff1493', '#ffc0cb'], // Pink shades
                gravity: 1, // Making it fall all the way to the bottom
            });
            confetti({
                particleCount: 10,
                angle: 90,
                spread: 45,
                origin: { x: Math.random(), y: 0 }, // Starts from the top
                shapes: ['star'], // Stars shape
                colors: ['#ff69b4', '#ff1493', '#ffc0cb'], // Pink shades
                gravity: 1, // Making it fall to the bottom of the page
            });
    
            requestAnimationFrame(frame); // Continue confetti indefinitely
        })();
    };

    // Event listener for clicking on the gift box (First Page)
    giftBox.addEventListener("click", () => {
        giftBox.style.display = "none"; // Hide the gift box
        message1.classList.remove("hidden"); // Show the first message
        startConfetti(); // Start confetti when the gift is clicked
    });

    // Event listener for the first next button (Message 1 to Message 2)
    nextButton1.addEventListener("click", () => {
        message1.style.display = "none"; // Hide the first message
        message2.classList.remove("hidden"); // Show the second message
    });
});
