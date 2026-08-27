// Get DOM elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');

// Array to store todos
let todos = [];

// Initialize the app
function init() {
    // Load todos from localStorage
    loadTodos();
    
    // Display todos
    displayTodos();
    
    // Update statistics
    updateStatistics();
    
    // Add event listeners
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
}

// Add a new todo
function addTodo() {
    const text = todoInput.value.trim();
    
    // Validate input
    if (text === '') {
        alert('Please enter a todo!');
        return;
    }
    
    // Create todo object
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    
    // Add to todos array
    todos.push(todo);
    
    // Save to localStorage
    saveTodos();
    
    // Clear input
    todoInput.value = '';
    todoInput.focus();
    
    // Update display
    displayTodos();
    updateStatistics();
}

// Delete a todo
function deleteTodo(id) {
    // Filter out the todo with matching id
    todos = todos.filter(todo => todo.id !== id);
    
    // Save to localStorage
    saveTodos();
    
    // Update display
    displayTodos();
    updateStatistics();
}

// Toggle todo completion status
function toggleTodo(id) {
    // Find and update the todo
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    
    // Save to localStorage
    saveTodos();
    
    // Update display
    displayTodos();
    updateStatistics();
}

// Display all todos
function displayTodos() {
    // Clear the list
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        // Show empty state
        emptyState.classList.add('show');
        return;
    }
    
    // Hide empty state
    emptyState.classList.remove('show');
    
    // Create list item for each todo
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        // Add completed class if todo is completed
        if (todo.completed) {
            li.classList.add('completed');
        }
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(todo.id));
        
        // Create text span
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        
        // Append elements to list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        // Append list item to list
        todoList.appendChild(li);
    });
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    } else {
        todos = [];
    }
}

// Update statistics
function updateStatistics() {
    const completed = todos.filter(todo => todo.completed).length;
    totalCount.textContent = todos.length;
    completedCount.textContent = completed;
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
