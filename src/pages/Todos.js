// 메인페이지

import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import './Todo.css';
import Todo from '../components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTodo,
} from '../redux/modules/todos';

function Todos() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.todos);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };

    const bodyHandler = (e) => {
        setBody(e.target.value);
    };

    const AddHandler = (e) => {
        e.preventDefault();
        if (title === '') return alert('제목을 입력하세요.');
        if (body === '') return alert('내용을 입력하세요.');
        dispatch(
            addTodo({
                title: title,
                body: body,
                isDone: false,
            })
        );
        setTitle('');
        setBody('');
    };

    return (
        <div className="layout">
            <div className="header">
                <p>To do List </p>
                <p>React</p>
            </div>
            <form onSubmit={AddHandler} className="Form-data">
                <div className="dataBox">
                    <label>
                        제목 &nbsp;
                        <input
                            className="inputBox"
                            maxLength="10"
                            type="text"
                            value={title}
                            onChange={titleHandler}
                        />
                    </label>
                </div>
                <label>
                    내용 &nbsp;
                    <input
                        className="inputBox"
                        maxLength="12"
                        type="text"
                        value={body}
                        onChange={bodyHandler}
                    />
                </label>
                <button type="submit" className="addBtn">
                    Add
                </button>
            </form>
            <div>
                <h1 className="list-title">Working.. 🔥</h1>
                <div className='list-container'>
                    {todoList
                        .filter((e) => e.isDone === false)
                        .map((v) => {
                            return (
                                <div key={v.id}>
                                    <Todo  v={v}/>
                                </div>
                            ); 
                        })}
                </div>
                <div>
                    <h1 className="list-title">Done.. 🎉</h1>
                    <div className='list-container'>
                        {todoList
                            .filter((e) => e.isDone === true)
                            .map((v) => {
                                return (
                                    <div key={v.id}>
                                        <Todo v={v}/>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todos;

