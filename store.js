const localStorageKey = 'todos';

// Helper function que ayuda a guardar información en Local Storage.
const saveData = (data, event) => {

    // Mostar mensaje en consola.
    console.log(`A word has been ${event.toLowerCase()}`)

    // Guardar en local storage.
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}

// Obtener toda la información de Local Storage y regresarla como un array.
const getData = () => {
    // Constante que contiene resultados de Local Storage.
    const localStorageData = localStorage.getItem(localStorageKey);

    // Comprobar que la información no sea nula
    if (localStorageData === null) {
        return [];
    } else {
        return JSON.parse(localStorageData);
    }
}

// Guardar información en Local Storage.
const addData = (todo) => {

    // Obtener todas las tareas ya existentes.
    const todos = getData();

    // Agregar tarea a el array.
    todos.push(todo);

    // Guardar en Local Storage.
    saveData(todos, 'Added');
}

// Eliminar elemento de Local Storage.
const deleteData = () => {

    // Obtener todas las tareas ya existentes.
    const todos = getData();

    // Encontrar todo y modificarlo.
    todos.forEach((todo, index) => {
        // Verificar que el id del todo sea el mismo que el del elemento.
        if (todo.id === id) {
            todos.splice(index, 1);
        }
    });

    // Guardar en Local Storage.
    saveData(todos, 'Deleted');
}