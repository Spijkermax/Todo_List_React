import React from 'react';

const TodoListItem = ({ todo, onRemovePressed }) => (
<div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div>
        <button>Mark as Completed</button>
        <button onClick={() => onRemovePressed(todo.text)}>Remove</button>
    </div>
</div>
)
export default TodoListItem;