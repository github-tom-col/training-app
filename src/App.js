import './App.css';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(count)
    setCount(count + 1);
    console.log(count)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default MyButton;
