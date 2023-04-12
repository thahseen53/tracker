
export default function ShowTask({tasklist,setTaskList,task,setTask }) {

    function handleDelete (id){
        const updatedTask = tasklist.filter(todo=> todo.id !== id)
        setTaskList(updatedTask)
    }
    function handleEdit(id){
        const taskSelected = tasklist.find(task=>task.id === id)
        setTask(taskSelected)
    }
  return (
    <section className="showTask">
        <p className="head">
            <span>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </span>
            <button className="clearAll" onClick={()=> setTaskList([])}>Clear All</button>
        </p>
        <ul>

            {tasklist.map(todo=>{
                return <li key={todo.id}> 
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={()=>handleEdit(todo.id)}></i>
                        <i className="bi bi-trash" onClick={()=>handleDelete(todo.id)}></i>
                     </li>
            })}
         </ul>
    </section>
  )
}
