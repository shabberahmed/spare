import React from 'react';

const One = (props) => {
  const data = props.value;

  return (
    <div>
      {data.map((val, index) => (
        <li key={index}>{index}:{val.name}</li>
      ))}
    </div> 
  );
};

export default One;
