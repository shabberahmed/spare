import React, { useState } from 'react'

const App = () => {
  const [state,setState]=useState('');

  return (
    <div>
      <h1>{state}</h1>
      <input type="text" defaultValue={'hello'} onChange={(e)=>setState(e.target.value)}/>
    </div>
  )
}

export default App