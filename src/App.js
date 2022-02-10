import React, { useState } from 'react';
import { data } from './dat.js'
import { FaCheck } from 'react-icons/fa';
import './index.css';
const App = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(data);
  const [isempty, setIsempty] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const task = { id: new Date().getTime().toString(), name }
      setIsempty(false)
      setTasks((tasks) => {
        return [...tasks, task]
      })
      setName('')
    }

    else {
      setIsempty(true)
      alert("Can't add empty task")

    }
  }
  const eliminateTasks = (id) => {
    let newtasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(newtasks);
  }
  return (
    <section className="list">
      <h2>To-do List</h2>
      {tasks.length ? <p>{tasks.length} tasks to complete today</p> : <p>Hurray, you've completed all tasks for today</p>}
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' className={isempty ? 'red' : 'list-input'} value={name} onChange={(e) => setName(e.target.value)}></input>
          <button type='submit' className='btn1'>Add Task</button>
        </form>
      </article>
      {tasks.map((tasks) => {
        const { id, name } = tasks;
        return (
          <>
            <div key={id} className="item">
              <p>{name}</p>
              <button className='btn' onClick={() => eliminateTasks(id)}><FaCheck /></button>
            </div>
          </>
        )
      })}
      <button className='btn' onClick={() => setTasks([])}>Completed all</button>
    </section>
  );
}

export default App;
