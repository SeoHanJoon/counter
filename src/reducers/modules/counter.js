import { createAction, handleActions } from 'redux-actions';

// 액션 선언
const COUNTER_PLUS = 'counter/COUNTER_PLUS';
const COUNTER_MINUS = 'counter/COUNTER_MINUS';

// 초기값 설정
const initialState = {
  number: 0,
};

// 액션 크리에이터 정의
export const plus = createAction(COUNTER_PLUS);
export const minus = createAction(COUNTER_MINUS);

export default handleActions(
  {
    [COUNTER_PLUS]: (state) => {
      return { ...state, number: state.number + 1 };
    },
    [COUNTER_MINUS]: (state) => {
      return { ...state, number: state.number - 1 };
    },
  },
  initialState,
);
