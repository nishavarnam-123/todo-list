# Simple Todo List Application

A clean, beginner-friendly todo list web application built with HTML, CSS, and JavaScript.

## Features

✅ **Add Todos** - Type in the input field and click "Add" or press Enter
✅ **Mark Complete** - Check the checkbox to mark a todo as completed
✅ **Delete Todos** - Remove todos with the delete button
✅ **Display All Todos** - View all your todos in a clean, organized list
✅ **Persistent Storage** - Todos are saved in localStorage and persist after page refresh
✅ **Statistics** - Track total and completed todo counts
✅ **Responsive Design** - Works great on desktop, tablet, and mobile devices
✅ **Clean Code** - Beginner-friendly, well-commented JavaScript

## How to Use

1. **Open the Application**
   - Open `index.html` in your web browser

2. **Add a Todo**
   - Type your todo in the input field
   - Click the "Add" button or press Enter

3. **Mark as Complete**
   - Click the checkbox next to a todo to mark it as completed
   - Completed todos appear with a strikethrough and fade effect

4. **Delete a Todo**
   - Click the "Delete" button next to any todo to remove it

5. **View Statistics**
   - Check the bottom of the app to see your total and completed todos

## File Structure

```
├── index.html      # HTML structure and layout
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technical Details

### HTML (index.html)
- Semantic HTML5 structure
- Input field for new todos
- Dynamic list for displaying todos
- Statistics section

### CSS (styles.css)
- Modern gradient background
- Responsive flexbox layout
- Smooth animations and transitions
- Mobile-friendly design
- Clean, professional appearance

### JavaScript (script.js)
- **init()** - Initializes the app and loads saved todos
- **addTodo()** - Adds a new todo to the list
- **deleteTodo(id)** - Removes a todo by its ID
- **toggleTodo(id)** - Marks a todo as complete/incomplete
- **displayTodos()** - Renders todos to the DOM
- **saveTodos()** - Persists todos to localStorage
- **loadTodos()** - Retrieves todos from localStorage
- **updateStatistics()** - Updates the counter display

## localStorage

Todos are stored in the browser's localStorage as a JSON string. This means:
- Your todos persist even after closing the browser
- Clearing browser data will delete your todos
- Each domain has its own separate storage

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Keyboard Shortcuts

- **Enter** - Add a new todo (when input is focused)

## Future Enhancements

Consider adding:
- Edit todo functionality
- Drag and drop reordering
- Due dates or priorities
- Filter by completed/incomplete
- Dark mode
- Export/import todos

## Getting Started

Simply open `index.html` in your browser and start managing your todos!

---

Happy organizing! 🎯
