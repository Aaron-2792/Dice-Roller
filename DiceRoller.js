function rollDice() {
    console.log("Rolling dice..."); // Debugging log
    for (let i = 1; i <= 5; i++) {
        let die = document.getElementById(`die${i}`);
        if (die) {
            die.value = Math.floor(Math.random() * 6) + 1;
        } else {
            console.error(`Element die${i} not found`);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let rollButton = document.getElementById("rollButton");
    
    if (rollButton) {
        rollButton.addEventListener("click", rollDice);

        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                rollDice();
            }
        });

        rollDice(); // Ensure dice roll on page load
    } else {
        console.error("Roll button not found");
    }
});
