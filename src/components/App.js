import React, { useState } from 'react';
import Column from './Column';
import FinishedWork from './FinishedWork';

function App() {
  // State for tasks in the columns
  const [tasks, setTasks] = useState([]);


  // State for tasks that have been finished
  const [finishedTasks, setFinishedTasks] = useState([]);

  // Function to add a new task
  const addTask = () => {
    const taskName = prompt('Enter task name:');
    if (!taskName) return;  // Exit if no task name is provided

    const taskType = prompt('Enter task type:');
    if (!taskType) return;  // Exit if no task type is provided

    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      type: taskType,
      column: 'todo',
      createDate: new Date().toLocaleString()
    };

    setTasks([...tasks, newTask]);
};



  // Function to move a task to a different column
  const moveTask = (taskId, newColumn) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, column: newColumn } : task
      )
    );
  };

  // Function to finish the day and move "done" tasks to finishedTasks
  const finishTheDay = () => {
    const doneTasks = tasks.filter(task => task.column === 'done');
    const updatedTasks = tasks.filter(task => task.column !== 'done');

    const datedTasks = doneTasks.map(task => ({
      ...task,
      finishedDate: new Date().toLocaleString()
    }));

    setFinishedTasks([...finishedTasks, ...datedTasks]);
    setTasks(updatedTasks);
};


  return (
    <div className="App" style={{ padding: '40px', backgroundColor: '#f4f4f4' }}>
      
      {/* Button to add a new task */}
       <button onClick={addTask} style={{ position: 'absolute', top: '10px', left: '10px' }}>Add Task</button>

      {/* Container for the three columns */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <Column id="todo" title="To Do" tasks={tasks.filter(task => task.column === 'todo')} moveTask={moveTask} />
        <Column id="in-progress" title="In Progress" tasks={tasks.filter(task => task.column === 'in-progress')} moveTask={moveTask} />
        <Column id="done" title="Done" tasks={tasks.filter(task => task.column === 'done')} moveTask={moveTask} finishTheDay={finishTheDay} />
      </div>

      {/* Finished Work table */}
      <FinishedWork tasks={finishedTasks} />
    </div>
  );
}

export default App;