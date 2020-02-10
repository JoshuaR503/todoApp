// Select tasks element from DOM.
const tasks = document.querySelector('#tasks');

// Create a tile and added to DOM.
const addCard = (data) => {

    // Create element 
    const element = document.createElement('div');

    // Add classes
    element.classList.add('tile', 'is-child', 'notification', 'is-danger', 'box');

    // Add content
    element.innerHTML = `
    <button class="delete"></button>
    <p class="title is-4">${data.title}</p>
    <p>Almost before we knew it, we had left the ground.</p>`;

    // Append to DOM.
    tasks.appendChild(element);
};


// Empty Screen state.
const emptyScreenState = (message) => {

    // Create element.
    const element = document.createElement('div');

    // Add id.
    element.id = 'emptyState';

    // Add classes.
    element.classList.add('notification', 'has-text-centered');

    // Add content.
    element.innerHTML = message;

    // Append to DOM.
    tasks.appendChild(element);
}

// Remove element from DOM.
const removeElementById = (id) => {
    
    // Grab element from DOM.
    const element = document.querySelector(`#${id}`);

    // If element is in the DOM, delete it.
    if (element) {
        tasks.removeChild(element);    
    }
}