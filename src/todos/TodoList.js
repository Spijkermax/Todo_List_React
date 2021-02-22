import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { removeTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <TodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
    </div>
);
const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),

})

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);