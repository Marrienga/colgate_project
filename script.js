// List of 15 people
const people = [
    "Mwangi",
    "Weyne",
    "Rockiiy",
    "Joy",
    "Vallary",
    "Purity",
    "Buckley",
    "Fred",
    "Alex",
    "Peter",
    "Ian Bota...",
    "Pending...",
    "Pending...",
    "Pending...",
    "Pending..."
];

const listContainer = document.getElementById('people-list');

// Generate the list with buttons
function generateList() {
    people.forEach((name, index) => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <span class="list-number">${index + 1}.</span>
            <button id="btn-${index}" onclick="revealName(${index})">
                Reveal Name
            </button>
            <span id="name-${index}" class="person-name hidden">${name}</span>
        `;

        listContainer.appendChild(listItem);
    });
}

// Reveal the name
function revealName(index) {
    const nameSpan = document.getElementById(`name-${index}`);
    const button = document.getElementById(`btn-${index}`);

    nameSpan.classList.remove('hidden');      // Show name
    button.textContent = "Back";              // Change button
    button.onclick = function () {
        resetName(index);
    };
}

// Reset back to default
function resetName(index) {
    const nameSpan = document.getElementById(`name-${index}`);
    const button = document.getElementById(`btn-${index}`);

    nameSpan.classList.add('hidden');         // Hide name
    button.textContent = "Reveal Name";       // Restore button
    button.onclick = function () {
        revealName(index);
    };
}

// Initialize list
generateList();
