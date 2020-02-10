// Add task to DOM.
const addTask = (event) => {

    // Stop event.
    event.preventDefault();

    // Select elements from DOM.
    const input = document.querySelector('#input');

    // Grab data.
    const task = input.value;

    // Remove empty screen if there is any.
    removeElementById('emptyState');

    // Add to DOM.
    addCard(task);
};


// Sreen state handler.
const initApp = (() => {

    // Get todos.
    const todos = getData();

    // Decide view.
    if (todos.length === 0) {
        emptyScreenState("You don't have any tasks");
    } else if (todos.length > 0) {
        todos.forEach((todo) => addCard(todo));
    } else {
        emptyScreenState("There was an unknown error");
    }
})();