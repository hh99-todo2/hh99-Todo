import React,{useState} from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [user,setUser] = useState([
    {id:0,title:'node',body:'learning',isDone:false},
    {id:1,title:'python',body:'learning',isDone:true}
  ])
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')

  const titleHandler = (e)=>{    
    setTitle(e.target.value)
  }

  const bodyHandler = (e)=>{
    setBody(e.target.value)
  }

  const AddHandler = (e)=>{
  e.preventDefault()
  const addObj = {
    id: user.length + 1,
    title,
    body,
    isDone: false
  }
  setUser([...user, addObj])
}


  return (
    <div className='layout'>
      <div className='header'>
        <p>To do List </p>
        <p>React</p>
      </div>
      <div>
      <form  onSubmit={AddHandler} className="Form-data">
        <div className='dataBox'>
          <label>
            제목 &nbsp;
            <input
              className="inputBox"
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
              type="text"
              value={body}
              onChange={bodyHandler}
            />
          </label>
          <button type='submit' className="addBtn">Add</button>
        </form>
      </div>

      <div >
      <h1 className="list-title">Working.. 🔥</h1>
      <div>
        {user.filter((e)=>e.isDone === false).map((v)=>{
          return(
            <div key={v.id} >
              <Todo v={v} user={user} setUser={setUser}/>
            </div>
          )
        })}
      </div>
      <div>
      <h1 className="list-title">Done.. 🎉</h1>
      <div>
      {user.filter((e)=>e.isDone === true).map((v)=>{
          return(
            <div key={v.id} >
              <Todo v={v} user={user} setUser={setUser}/>
            </div>
          )
        })}
      </div>

      </div>
      </div>
    </div>
  )
}

export default App