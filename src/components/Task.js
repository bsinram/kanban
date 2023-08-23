import React from 'react';
import { useDrag } from 'react-dnd';

function Task({ id, name, type, createDate }) {
  const [, ref] = useDrag({
    type: 'TASK',
    item: { id }
  });

  return (
    <div ref={ref} style={{ 
        padding: '8px', 
        margin: '8px 0', 
        border: '1px solid black', 
        borderRadius: '8px', 
        backgroundColor: '#eaeaea' 
    }}>
      <div style={{ fontWeight: 'bold' }}>{name}</div>
      <div>{type}</div>
      <div>{createDate}</div>
    </div>
  );
}