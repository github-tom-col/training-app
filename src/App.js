import './App.css';
import { useState } from 'react';

function Square({value}) {
  function HandleClick(){
    console.log("click")
  }
  return <button className="square" onClick={HandleClick}>{value}</button>
}

export default function Board() {
  return (
    <div className='parent-board'>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </div>
  );
}
