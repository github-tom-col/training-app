import styles from './style/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  function HandleClick(){
    setValue("X")
  }
  return <button className="square" onClick={HandleClick}>{value}</button>
}

export default function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.square}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.square}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.square}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
