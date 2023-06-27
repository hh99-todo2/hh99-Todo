import React, { useState } from "react"; // useState를 import해주는 것 확인
import './App.css';

function App(){

  const [todos, setTodos] = useState([
    { id: 1, title: '1주 과제', body: '과제끝내기!', isDone: false },
    { id: 2, title: '1주 강의', body: '강의 수강 완료하기!', isDone: true },
  ]);


  // 제목
  const [title, setTitle] = useState('');

  // 내용
  const [body, setBody] = useState('');

  // 제목과 내용 
  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const bodyChangeHandler = function (event) {
    setBody(event.target.value)
  }

  // 추가 
  const clickAddBtnHandler = function (event) {

    const newTodo = {
      id: todos.length + 1,
      title,
      body,
      isDone: false,
    };

    // ✨불변성 유지
    setTodos([...todos, newTodo]);

  };


  // 삭제
  const clickRemoveBtnHandler = (id) => {
    const newTodo = todos.filter(function (todos) {
      return todos.id !== id;
    })
    setTodos(newTodo);
  }

  // 완료 취소
  const doneTodoHandler = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) return { ...todo, isDone: !(todo.isDone) };  // todo, todos 확인
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
            onChange={(event) => titleChangeHandler(event)}
            type="text" name="body" className="add-input" />


          <label className="label">내용</label>
          <input
            value={body}
            onChange={bodyChangeHandler}
            type="text" name="body" className="add-input" />
        </div>

        <Button clickAddBtnHandler={clickAddBtnHandler} />
      </div>


      <div className="list-container">

        <h2 className="list-title">ing ✨</h2>
        <div className="list-wrapper">
          {todos.filter((todo) => todo.isDone === false).map((todo) => {
            return (
              <div key={`ing-${todo.id}`} className='todo-container'>

                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.body}</div>

                <div className="button-set">
                  <button 
                    key={todo.id}
                    todo={todo}
                    className="todo-delete-button button"
                    onClick={()=>clickRemoveBtnHandler(todo.id)}>삭제</button>
                    
                  <button
                    key={todo.id}
                    todo={todo}
                    className="todo-delete-button button"
                    onClick={() => doneTodoHandler(todo.id)}>완료</button>
                    
                </div>
              </div>
            )
          })}
        </div>
      </div>


      <div className="list-container">
        
        <h2 className="list-title">Done👌</h2>
        <div className="list-wrapper">
          {todos.filter((todo) => todo.isDone === true).map((todo) => {
              return (
                <div key={`done-${todo.id}`} className='todo-container'>

                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>

                  <div className="button-set">
                    <button
                      key={todo.id}
                      todo={todo}
                      className="todo-delete-button button"
                      onClick={()=>clickRemoveBtnHandler(todo.id)}>삭제</button>
                      
                    <button
                      key={todo.id}
                      todo={todo}
                      className="todo-delete-button button"
                      onClick={() => doneTodoHandler(todo.id)}>취소</button>
                      
                  </div>
                </div>
              )
            })}
        </div>
      </div>

    </div>
  );
};

const Button = ({clickAddBtnHandler}) => {
  return <button onClick={clickAddBtnHandler} className="add-button">추가!</button>
}

export default App;