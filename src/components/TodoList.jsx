import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, clickRemoveBtnHandler, doneTodoHandler }) => {
    return (
        <div className="list-wrapper">
            {todos.map((todo) => (
                <TodoItem
                    key={`todo-${todo.id}`}
                    todo={todo}
                    clickRemoveBtnHandler={clickRemoveBtnHandler}
                    doneTodoHandler={doneTodoHandler}
                />
            ))}
        </div>
    );
};

export default TodoList;
