document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const messageContainer = document.getElementById("message-container");
    const finalMessage = document.getElementById("final-message"); // Final message div
    const buttons = document.querySelectorAll(".button.yes");
    const pleaseButton = document.querySelector(".button.please"); // "Please" button in final message
    const noButton = document.querySelector(".button.no"); // "No" button in final message
    let clickCount = 0;

    // Handle envelope click
    envelope.addEventListener("click", () => {
        envelope.style.display = "none";
        messageContainer.style.display = "block";
        createIcons();
    });

    // Handle heart icon click
    const heartIcon = document.querySelector(".heart-img");
    heartIcon.addEventListener("click", () => {
        heartIcon.classList.add("clicked");
        setTimeout(() => heartIcon.classList.remove("clicked"), 300);
    });

    // Handle "Yes" button clicks and moving the buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            clickCount++;
            moveButton(button);

            if (clickCount === 6) {
                messageContainer.style.display = "none"; // Hide the initial message container
                finalMessage.style.display = "block"; // Show the final message
            }
        });
    });

    // Function to move buttons to a random position
    function moveButton(button) {
        const moveX = Math.random() * 100 - 50; // Random X movement
        const moveY = Math.random() * 100 - 50; // Random Y movement

        button.style.setProperty('--move-x', `${moveX}vw`);
        button.style.setProperty('--move-y', `${moveY}vh`);
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 500);
    }

    // Handle "No" button click and text change with movement
    if (noButton) {
        const texts = ["Please?", "Payag kana po please?", "Nood lang po us", "Kahit nood then uwi na you po"];
        let currentTextIndex = 0;

        noButton.addEventListener("click", () => {
            noButton.innerText = texts[currentTextIndex];
            moveButton(noButton); // Move button on text change
            currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop through the texts
        });
    }

    // Handle "Please" button click in final message (surprise animation)
    if (pleaseButton) {
        pleaseButton.addEventListener("click", () => {
            pleaseButton.classList.add('surprise'); // Apply surprise animation class
            setTimeout(() => {
                pleaseButton.classList.remove('surprise'); // Remove animation class
                finalMessage.innerHTML = "<h1>Thank you, see you on Sunday!!</h1>"; // Change text to "Thank you, see you on Sunday!!"
            }, 1000); // Animation duration (1 second)
        });
    }

    // Function to create additional heart and other icons (for the initial message)
    function createIcons() {
        for (let i = 0; i < 20; i++) {
            const icon = document.createElement("div");
            icon.className = "heart";
            icon.style.left = Math.random() * 100 + "vw";
            icon.style.animationDelay = Math.random() * 5 + "s";
            document.body.appendChild(icon);
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const messageContainer = document.getElementById("message-container");
    const finalMessage = document.getElementById("final-message"); // Final message div
    const buttons = document.querySelectorAll(".button.yes");
    const pleaseButton = document.querySelector(".button.please"); // "Please" button in final message
    const noButton = document.querySelector(".button.no"); // "No" button in final message
    let clickCount = 0;

    // Handle envelope click
    envelope.addEventListener("click", () => {
        envelope.style.display = "none";
        messageContainer.style.display = "block";
        createIcons();
    });

    // Handle heart icon click
    const heartIcon = document.querySelector(".heart-img");
    heartIcon.addEventListener("click", () => {
        heartIcon.classList.add("clicked");
        setTimeout(() => heartIcon.classList.remove("clicked"), 300);
    });

    // Handle "Yes" button clicks and moving the buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            clickCount++;
            moveButton(button);

            if (clickCount === 6) {
                messageContainer.style.display = "none"; // Hide the initial message container
                finalMessage.style.display = "block"; // Show the final message
            }
        });
    });

    // Function to move buttons to a random position
    function moveButton(button) {
        const moveX = Math.random() * 100 - 50; // Random X movement
        const moveY = Math.random() * 100 - 50; // Random Y movement

        button.style.setProperty('--move-x', `${moveX}vw`);
        button.style.setProperty('--move-y', `${moveY}vh`);
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 500);
    }

    // Handle "No" button click and text change with movement
    if (noButton) {
        const texts = ["Please?", "Payag kana po please?", "Nood lang po us", "Kahit nood then uwi na you po"];
        let currentTextIndex = 0;

        noButton.addEventListener("click", () => {
            noButton.innerText = texts[currentTextIndex];
            moveButton(noButton); // Move button on text change
            currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop through the texts
        });
    }

    // Handle "Please" button click in final message (surprise animation)
    if (pleaseButton) {
        pleaseButton.addEventListener("click", () => {
            pleaseButton.classList.add('surprise'); // Apply surprise animation class
            setTimeout(() => {
                pleaseButton.classList.remove('surprise'); // Remove animation class
                finalMessage.innerHTML = "<h1>Thank you, see you on Sunday!!</h1>"; // Change text to "Thank you, see you on Sunday!!"
            }, 1000); // Animation duration (1 second)
        });
    }

    // Function to create additional heart and other icons (for the initial message)
    function createIcons() {
        for (let i = 0; i < 20; i++) {
            const icon = document.createElement("div");
            icon.className = "heart";
            icon.style.left = Math.random() * 100 + "vw";
            icon.style.animationDelay = Math.random() * 5 + "s";
            document.body.appendChild(icon);
        }
    }
});
