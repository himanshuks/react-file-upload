// Use {} to extract function to be used directly from modules
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h5>Using Simple Function and React Hooks</h5>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export const CounterHooks = () => {

  // Destructing is done
  // useState is a hook used to work with states in function component
  // Left side - Variable and function
  // Right side - Initial value set to zero
  const [count, setCount] = useState(0);

  return (
    <div>
      <h5>Using ES6 format function and React Hooks</h5>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  );
};

// Below can be used to export multiple functions
// export default {Counter, CounterHooks}