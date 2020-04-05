import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header';

import { CounterReducer } from '../reducers/actionCreators';

const Counter = ({}) => {
  const { number } = useSelector((state) => state.counter);

  return (
    <>
      <Header />
      <h1>Counter Redux</h1>
      <div>현재 카운터는 {number} 입니다.</div>
      <div>
        <button type="button" onClick={CounterReducer.plus}>
          ( + )
        </button>
        <button type="button" onClick={CounterReducer.minus}>
          ( - )
        </button>
      </div>
    </>
  );
};

// export default Counter;
export default Counter;
