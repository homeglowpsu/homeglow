 // script.js

/*
document.addEventListener("DOMContentLoaded", () => {
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const toQuestion2 = document.getElementById("toQuestion2");
    const backToQuestion1 = document.getElementById("backToQuestion1");

    const locationLink = document.querySelector(".top-right-links ul li:first-child");

    // Highlight the Location link
    function highlightLocation() {
        locationLink.classList.add("highlighted");
    }

    // Remove Highlight (if needed for other pages)
    function unhighlightLocation() {
        locationLink.classList.remove("highlighted");
    }

    // Initially highlight Location
    highlightLocation();

    // Navigate to Question 2
    toQuestion2.addEventListener("click", () => {
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    });

    // Navigate back to Question 1
    backToQuestion1.addEventListener("click", () => {
        question2.classList.add("hidden");
        question1.classList.remove("hidden");
    });
});
*/


// script.js
/*
document.addEventListener("DOMContentLoaded", () => {
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const question3 = document.getElementById("question3");
    const toQuestion2 = document.getElementById("toQuestion2");
    const backToQuestion1 = document.getElementById("backToQuestion1");
    const toQuestion3 = document.getElementById("toQuestion3");
    const backToQuestion2 = document.getElementById("backToQuestion2");

    const locationLink = document.getElementById("locationLink");

    // Highlight Location link
    locationLink.classList.add("highlighted");

    // Navigation logic
    toQuestion2.addEventListener("click", () => {
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    });

    backToQuestion1.addEventListener("click", () => {
        question2.classList.add("hidden");
        question1.classList.remove("hidden");
    });

    toQuestion3.addEventListener("click", () => {
        question2.classList.add("hidden");
        question3.classList.remove("hidden");
    });

    backToQuestion2.addEventListener("click", () => {
        question3.classList.add("hidden");
        question2.classList.remove("hidden");
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const question3 = document.getElementById("question3");
    const toQuestion2 = document.getElementById("toQuestion2");
    //const question3 = document.getElementById("question3");
    const question4 = document.getElementById("question4");
    const toQuestion4 = document.getElementById("toQuestion4");
    const backToQuestion3 = document.getElementById("backToQuestion3");
    const backToQuestion1 = document.getElementById("backToQuestion1");
    const toQuestion3 = document.getElementById("toQuestion3");
    const backToQuestion2 = document.getElementById("backToQuestion2");
    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("addressError");
    const selectedOptions = document.getElementById("selectedOptions");
    const optionButtons = document.querySelectorAll(".option-btn");

    const locationLink = document.getElementById("locationLink");

    if (locationLink) {
        // Highlight Location link
        locationLink.classList.add("highlighted");
    }

    // Navigation logic
    if (toQuestion2) {
        toQuestion2.addEventListener("click", () => {
            question1.classList.add("hidden");
            question2.classList.remove("hidden");
        });
    }

    if (backToQuestion1) {
        backToQuestion1.addEventListener("click", () => {
            question2.classList.add("hidden");
            question1.classList.remove("hidden");
        });
    }

    if (toQuestion3) {
        toQuestion3.addEventListener("click", () => {
            question2.classList.add("hidden");
            question3.classList.remove("hidden");
        });
    }

    if (backToQuestion2) {
        backToQuestion2.addEventListener("click", () => {
            question3.classList.add("hidden");
            question2.classList.remove("hidden");
        });
    }
     // Address Validation
    toQuestion4.addEventListener("click", () => {
        if (addressInput.value.trim() === "") {
            addressError.classList.remove("hidden");
        } else {
            addressError.classList.add("hidden");
            question3.classList.add("hidden");
            question4.classList.remove("hidden");
        }
    });

      // Back to Question 3
    backToQuestion3.addEventListener("click", () => {
        question4.classList.add("hidden");
        question3.classList.remove("hidden");
    });

    // Add and Remove Selected Renovation Options
    optionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const option = button.dataset.option;

            // Check if option is already added
            const existingOption = Array.from(selectedOptions.children).find(
                (li) => li.textContent.includes(option)
            );

            if (!existingOption) {
                const li = document.createElement("li");
                li.textContent = option;

                // Remove button
                const removeBtn = document.createElement("button");
                removeBtn.textContent = "X";
                removeBtn.addEventListener("click", () => {
                    li.remove();
                });

                li.appendChild(removeBtn);
                selectedOptions.appendChild(li);
            }
        });
    });

});

*/


// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Define elements
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const question3 = document.getElementById("question3");
    const question4 = document.getElementById("question4");

    const toQuestion2 = document.getElementById("toQuestion2");
    const backToQuestion1 = document.getElementById("backToQuestion1");
    const toQuestion3 = document.getElementById("toQuestion3");
    const backToQuestion2 = document.getElementById("backToQuestion2");
    const toQuestion4 = document.getElementById("toQuestion4");
    const backToQuestion3 = document.getElementById("backToQuestion3");

    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("addressError");

    const ownershipRadios = document.getElementsByName("ownership");
    const ownershipError = document.getElementById("ownershipError");

    const propertyTypeRadios = document.getElementsByName("propertyType");
    const propertyTypeError = document.getElementById("propertyTypeError");

    const optionButtons = document.querySelectorAll(".option-btn");
    const selectedOptions = document.getElementById("selectedOptions");
    const grandTotalElement = document.getElementById("grandTotal");
    const profitElement = document.getElementById("profit");

    let totalCost = 0;

    // Highlight Location link
    const locationLink = document.getElementById("locationLink");
    if (locationLink) {
        locationLink.classList.add("highlighted");
    }

    // Navigation logic
    if (toQuestion2) {
        toQuestion2.addEventListener("click", () => {
            if (validateOwnershipSelection()) {
                question1.classList.add("hidden");
                question2.classList.remove("hidden");
            }
        });
    }

    if (backToQuestion1) {
        backToQuestion1.addEventListener("click", () => {
            question2.classList.add("hidden");
            question1.classList.remove("hidden");
        });
    }

    if (toQuestion3) {
        toQuestion3.addEventListener("click", () => {
            if (validatePropertyTypeSelection()) {
                question2.classList.add("hidden");
                question3.classList.remove("hidden");
            }
        });
    }

    if (backToQuestion2) {
        backToQuestion2.addEventListener("click", () => {
            question3.classList.add("hidden");
            question2.classList.remove("hidden");
        });
    }

    if (toQuestion4) {
        toQuestion4.addEventListener("click", () => {
            if (validateAddressInput()) {
                question3.classList.add("hidden");
                question4.classList.remove("hidden");
            }
        });
    }

    if (backToQuestion3) {
        backToQuestion3.addEventListener("click", () => {
            question4.classList.add("hidden");
            question3.classList.remove("hidden");
        });
    }

    // Validate ownership selection
    function validateOwnershipSelection() {
        let isSelected = false;
        ownershipRadios.forEach((radio) => {
            if (radio.checked) {
                isSelected = true;
            }
        });

        if (!isSelected) {
            ownershipError.classList.remove("hidden");
        } else {
            ownershipError.classList.add("hidden");
        }

        return isSelected;
    }

    // Validate property type selection
    function validatePropertyTypeSelection() {
        let isSelected = false;
        propertyTypeRadios.forEach((radio) => {
            if (radio.checked) {
                isSelected = true;
            }
        });

        if (!isSelected) {
            propertyTypeError.classList.remove("hidden");
        } else {
            propertyTypeError.classList.add("hidden");
        }

        return isSelected;
    }

    // Address validation
    function validateAddressInput() {
        if (addressInput && addressInput.value.trim() === "") {
            addressError.classList.remove("hidden");
            return false;
        } else {
            addressError.classList.add("hidden");
            return true;
        }
    }

    // Add and Remove Selected Renovation Options
    optionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const option = button.dataset.option;
            const cost = parseInt(button.dataset.cost);

            // Check if option is already added
            const existingOption = Array.from(selectedOptions.children).find(
                (li) => li.textContent.includes(option)
            );

            if (!existingOption) {
                const li = document.createElement("li");
                li.textContent = `${option} - ${cost.toLocaleString()} USD`;

                // Remove button
                const removeBtn = document.createElement("button");
                removeBtn.textContent = "X";
                removeBtn.style.marginLeft = "10px";
                removeBtn.addEventListener("click", () => {
                    li.remove();
                    totalCost -= cost;
                    updateTotals();
                });

                li.appendChild(removeBtn);
                selectedOptions.appendChild(li);

                // Add to total cost
                totalCost += cost;
                updateTotals();
            }
        });
    });

    // Update Total and Profit
    function updateTotals() {
        grandTotalElement.textContent = totalCost.toLocaleString();
        const profit = (totalCost * 0.05).toFixed(2);
        profitElement.textContent = profit.toLocaleString();
    }
});



