import React, { useState } from 'react';

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <span>Counter: {count}</span>
      </p>
      <p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </p>
    </div>
  );
};

export default CounterHooks;
