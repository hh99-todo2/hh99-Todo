import React from "react";

const TodoItem = ({ todo, clickRemoveBtnHandler, doneTodoHandler }) => {
    const donebutton = todo.isDone ? "취소" : "완료";

    return (
        <div key={`todo-${todo.id}`} className='todo-container'>
            <h2 className="todo-title">{todo.title}</h2>
            <div>{todo.body}</div>

            <div className="button-set">

                {/* 삭제버튼 */}
                {/* className 속성이 'todo-delete-button button'인 button 엘리먼트를 생성합니다. 
                이 버튼은 "삭제"라는 텍스트를 보여주고, 클릭 이벤트가 발생하면 clickRemoveBtnHandler 함수를 호출하여 해당 todo 항목을 삭제합니다. 
                todo.id는 각 항목을 구별하는 유일한 값입니다. */}
                <button
                    className="todo-delete-button button"
                    onClick={() => clickRemoveBtnHandler(todo.id)}
                >삭제</button>

                {/* 완료, 취소버튼 */}
                {/* className 속성이 'todo-delete-button button'인 button 엘리먼트를 생성합니다. 
                이 버튼은 donebutton 변수에 저장된 텍스트를 보여주고, 클릭 이벤트가 발생하면 doneTodoHandler 함수를 호출하여 해당 todo 항목의 완료 상태를 변경합니다. 
                todo.id는 각 항목을 구별하는 유일한 값입니다. */}
                <button
                    className="todo-delete-button button"
                    onClick={() => doneTodoHandler(todo.id)}
                >{donebutton}</button>
            </div>
        </div>
    );
};

export default TodoItem;

