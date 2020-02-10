// Create a tile and added to DOM.
const addBox = (data) => {

    // Select element from DOM.
    const tasks = document.querySelector('#tasks');

    // Create element 
    const element = document.createElement('div');

    // Add classes
    element.classList.add('tile', 'is-child', 'notification', 'is-danger', 'box');

    // Add content
    element.innerHTML = `
    <button class="delete"></button>
    <p class="title is-4">${data}</p>
    <p>Almost before we knew it, we had left the ground.</p>`;

    // Append to DOM.
    tasks.appendChild(element);
}

// Add task to DOM.
const addTask = (event) => {

    // Stop event.
    event.preventDefault();

    // Select elements from DOM.
    const input = document.querySelector('#input');

    // Grab data.
    const task = input.value;

    // Add to DOM.
    addBox(task);
}
