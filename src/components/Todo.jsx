import React from 'react'

function Todo({v,user,setUser}) {
    console.log(v);
    const removeHandler =(id)=>{
        const removeList = user.filter((user)=>user.id !== id)
        setUser(removeList)
      }
      
      const chek =(id)=>{
        setUser(
          user.map((v)=>{
            if(v.id===id){
              return{...v, isDone: !v.isDone};
            }
            return v;
          })
        )
      }
  return (
    <div className='listBox'>
    <div className='sqBox'>
    <h2>{v.title}</h2>
    <div>{v.body}</div> 
    <br />
    <button onClick={()=>removeHandler(v.id)}>삭제</button>
    <button onClick={()=>chek(v.id)} >
        {v.isDone === false ? '완료':'취소'}
    </button>
    </div>
  </div>
  )
}

export default Todo