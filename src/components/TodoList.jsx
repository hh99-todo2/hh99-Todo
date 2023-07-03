import React from "react";
import TodoItem from "./components/TodoItem";

// todos 배열과 clickRemoveBtnHandler, doneTodoHandler라는 props를 받는다.
// TodoList 컴포넌트를 정의한다. 이 컴포넌트는 todos, clickRemoveBtnHandler, doneTodoHandler라는 세 가지 props를 받는다. 
// 이 props는 컴포넌트를 사용하는 곳에서 전달되어야 한다.
const TodoList = ({ todos, clickRemoveBtnHandler, doneTodoHandler }) => {
    return (
        <div className="list-wrapper">
            {/* todos 배열을 순회하면서 각 todo 항목에 대한 TodoItem 컴포넌트를 생성합니다. map 함수는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 새로운 배열로 반환합니다. */}
            {todos.map((todo) => (    
                // TodoItem 컴포넌트를 생성합니다. 
                // 이 컴포넌트는 key, todo, clickRemoveBtnHandler, doneTodoHandler라는 props를 받습니다. 
                // key props는 각 항목을 구별하는 유일한 값으로 사용됩니다. 
                // todo props는 현재 순회 중인 todo 항목을 전달합니다.  
                // clickRemoveBtnHandler와 doneTodoHandler는 각각 TodoItem 컴포넌트에서 발생하는 이벤트를 처리하기 위해 전달되는 함수들입니다. 
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
