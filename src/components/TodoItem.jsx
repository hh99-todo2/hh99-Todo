import React from "react";

const TodoItem = ({ todo, clickRemoveBtnHandler, doneTodoHandler }) => {
    const donebutton = todo.isDone ? "취소" : "완료";

    return (
        <div key={`todo-${todo.id}`} className='todo-container'>
            <h2 className="todo-title">{todo.title}</h2>
            <div>{todo.body}</div>

            <div className="button-set">

                {/* 삭제버튼 */}
                <button
                    className="todo-delete-button button"
                    onClick={() => clickRemoveBtnHandler(todo.id)}
                >삭제</button>

                {/* 완료, 취소버튼 */}
                <button
                    className="todo-delete-button button"
                    onClick={() => doneTodoHandler(todo.id)}
                >{donebutton}</button>
            </div>
        </div>
    );
};

export default TodoItem;

