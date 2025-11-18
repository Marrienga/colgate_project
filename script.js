// List of 15 people
const people = [
    "Alex Mwaki",
    "Purity Lorine",
    "Rockiiy Mshai",
    "Peter ",
    "Vallary",
    "Joy",
    "Buckley",
    "Debby",
    "Weyne",
    "Mwangi",
    "Fred",
    "Daggy",
    "William King",
    "Anna Scott",
    "Thomas Green"
];

const listContainer = document.getElementById('people-list');

// Function to generate the list items
function generateList() {
    people.forEach((name, index) => {
        const listItem = document.createElement('li');
        
        // The display element starts hidden
        listItem.innerHTML = `
            <span class="list-number">${index + 1}.</span> 
            <button onclick="revealName(${index})">Reveal Name</button>
            <span id="name-${index}" class="person-name hidden">
                ${name}
            </span>
        `;
        
        listContainer.appendChild(listItem);
    });
}

// Function to reveal the name
function revealName(index) {
    const nameSpan = document.getElementById(`name-${index}`);
    const button = nameSpan.previousElementSibling; // Get the button element

    // Show the name and hide/disable the button
    nameSpan.classList.remove('hidden');
    button.textContent = 'Revealed';
    button.disabled = true;
    button.classList.add('revealed-button');
}

// Initialize the list when the page loads
generateList();