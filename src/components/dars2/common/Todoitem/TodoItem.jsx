import './TodoItem.scss'

function TodoItem({todo, onDelete}){
    return <div className="todoitem">
        <input className='todoitem__check' type="checkbox" />
        <h3 className="todoitem__title">{todo.id}| {todo.title}</h3>
        <button onClick={()=> {onDelete(todo.id)}} className='todoitem__btn'>delete</button>
    </div>
}

export default TodoItem