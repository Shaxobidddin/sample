import { useState } from 'react'
import TodoItem from '../Todoitem/TodoItem'
import './TodoList.scss'

function TodoList(){
    const data=[
        {id:1,title:"Go to univer",iscomleted:true},
        {id:2,title:"make 5 mark",iscomleted:false},
        {id:3,title:"Go home",iscomleted:true},
        {id:4,title:"Go to football",iscomleted:true}
    ]
    const [todos, setTodos]=useState(data)
    const handleDelete = (id) =>{
        // console.log(id) 
        setTodos(state => state.filter(item=> item.id !== id ))
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        let todoInputEl=document.querySelector('#todo-input')
        const lastEl=todos[todos.length-1] || {id:0}
        const data={
            id: lastEl?.id+1,
            title: todoInputEl.value,
            iscomleted: false
        }
        todoInputEl.value=''
        console.log(data)
        setTodos(state=>[...state,data])
    }

    return <div className='todolist'>
        <h2>Todo App </h2>
        <form onSubmit={handleSubmit}>
            <input id='todo-input' type="text" />
            <button type='submit'>add</button>
        </form>
        {
            todos.length <= 0 ? 'Todos Not Found' : todos.map((element,index) =>{
                return(
                  <TodoItem key={index} onDelete={handleDelete} iscomleted={element.iscomleted} todo={element}/> 
                )
            })
        }
        {/* <TodoItem todo={todos[0]}/> */}
    </div>
}

export default TodoList