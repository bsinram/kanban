import React from 'react';

function FinishedWork({ tasks }) {
  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Finished Work</h3>
      <table border="1" style={{ width: '100%', borderRadius: '8px' }}>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Type</th>
            <th>Create Date</th>
            <th>Finished Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.type}</td>
              <td>{task.createDate}</td>
              <td>{task.finishedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinishedWork;
