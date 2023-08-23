import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';

function Column({ id, title, tasks, moveTask, finishTheDay }) {
  // Drag and drop configuration for the column
  const [, ref] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      moveTask(item.id, id);
    },
  });

  return (
    <div ref={ref} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: 'calc(33.33% - 32px)', 
        minHeight: '300px', 
        margin: '16px', 
        padding: '16px', 
        border: '1px solid black', 
        borderRadius: '8px' 
    }}>
      <h2>{title}</h2>
      <div style={{ flex: 1 }}>
      {tasks.map(task => (
  <Task 
    key={task.id} 
    id={task.id} 
    name={task.name} 
    type={task.type} 
    createDate={new Date(task.createDate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
  />
))}

      </div>
      
      {/* "Total Tasks" tracker */}
      <div style={{ marginTop: 'auto' }}>
        Total Tasks: {tasks.length}
      </div>
      
      {/* "Finish the Day" button for the "Done" column */}
      {id === 'done' && <button onClick={finishTheDay} style={{ marginTop: '10px' }}>Finish the Day</button>}
    </div>
  );
}

export default Column;
