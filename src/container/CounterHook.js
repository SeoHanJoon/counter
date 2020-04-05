import React, { useState } from 'react';
import Header from '../components/header';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const calc = (val = 1) => setNumber(number + val);

  return (
    <>
      <Header />
      <h1>Counter Hook</h1>
      <div>현재 카운터는 {number} 입니다.</div>
      <div>
        <button type="button" onClick={() => calc(1)}>
          ( + )
        </button>
        <button type="button" onClick={() => calc(-1)}>
          ( - )
        </button>
      </div>
    </>
  );
};

export default Counter;
