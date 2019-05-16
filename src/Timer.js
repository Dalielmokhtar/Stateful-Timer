import React from 'react';
import './App.css';
import './Timer'

function Timer({ms}) {
var ss = Math.floor(ms / 1000);
var mm = Math.floor(ss / 60);
ss = ss % 60;
var hh = Math.floor(mm / 60);
mm = mm % 60;
if(ss<10)ss='0'+ss
if(mm<10)mm='0'+mm
if(hh<10)hh='0'+hh
  return (
    <div className="timer">
    <div className='Time'>
      <p>{hh}</p>
      <p>:</p>
      <p>{mm}</p>
      <p>:</p>
      <p>{ss}</p>
      </div>
      <div className='format' >
        <span>Hour</span>
        <span>Minute</span>
        <span>Second</span>
      </div>
    </div>
  );
}

export default Timer;