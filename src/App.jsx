import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ShowTask from './components/ShowTask'
import AddTask from './components/AddTask'


function App() {
   const [tasklist, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task,setTask] = useState({})
   
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);
 
  // useEffect(() => {
  //   localStorage.getItem("tasklist", JSON.stringify(tasklist))
  // }, [tasklist]);
  return (
    <div className='App'>
        <Header />
        <AddTask 
            tasklist={tasklist} 
            setTaskList={setTaskList}
            task={task}
            setTask={setTask}
          />
        <ShowTask 
            tasklist={tasklist}
            setTaskList={setTaskList}
            task={task}
            setTask={setTask}
         />
    </div>
)
}

export default App
