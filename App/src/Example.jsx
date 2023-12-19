import { useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  console.log(count);

  function Hi() {
    console.log(count);
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => Hi()}>
        Click me
      </button>
    </div>
  );
}