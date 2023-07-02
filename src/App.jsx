import React, { useState } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import Button from "./components/Button";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: '1주 과제', body: '과제끝내기!', isDone: false },
    { id: 2, title: '1주 강의', body: '강의 수강 완료하기!', isDone: true },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  const clickAddBtnHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const clickRemoveBtnHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  const doneTodoHandler = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodoList);
  }

  return (
    <div>
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className="add-group">
        <div className="input-group">
          <label className="label">제목</label>
          <input
            value={title}
            onChange={titleChangeHandler}
            type="text"
            name="body"
            className="add-input"
          />
          <label className="label">내용</label>
          <input
            value={body}
            onChange={bodyChangeHandler}
            type="text"
            name="body"
            className="add-input"
          />
        </div>
        <Button clickAddBtnHandler={clickAddBtnHandler} />
      </div>

      <div className="list-container">
        <h2 className="list-title">ing ✨</h2>
        <TodoList
          todos={todos.filter((todo) => !todo.isDone)}
          clickRemoveBtnHandler={clickRemoveBtnHandler}
          doneTodoHandler={doneTodoHandler}
        />
      </div>

      <div className="list-container">
        <h2 className="list-title">Done👌</h2>
        <TodoList
          todos={todos.filter((todo) => todo.isDone)}
          clickRemoveBtnHandler={clickRemoveBtnHandler}
          doneTodoHandler={doneTodoHandler}
        />
      </div>
    </div>
  );
};

export default App;
