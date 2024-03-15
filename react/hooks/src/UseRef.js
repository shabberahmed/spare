import React, { useEffect, useRef } from "react";

const App = () => {
  const myRef = useRef();

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.color = "red";
    }
  }, []);
  return (
    <div>
      <h1>App</h1>
      <input type="text" ref={myRef} />
    </div>
  );
};

export default App;
