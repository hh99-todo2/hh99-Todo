// 삭제, 취소, 완료 변경
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, doneTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';
import '../pages/Todo.css';

function Todo({ v, user, setUser }) {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.todos);

    //삭제
    const removeHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    // 취소 완료
    const chek = (id) => {
        dispatch(doneTodo(id));
    };

    return (
        <div className="listBox">
            <div className="sqBox">
                <Link to={{ pathname: `/detail/${v.id}`, state: { v } }}>
                    자세히보기
                </Link>
                <div>
                    <h3>{v.title}</h3>
                    <div>{v.body}</div>
                </div>
                <div className="button-set">
                    <button onClick={() => removeHandler(v.id)}>삭제</button>
                    <button onClick={() => chek(v.id)}>
                        {v.isDone === false ? '완료' : '취소'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;
