import {FC, memo} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {ReactComponent as Like} from '../../images/like_active.svg';
import {counterSlice} from '../../store/reducers/CounterSlice';

import './App.scss';

const App: FC = memo(() => {
  const count = useAppSelector(state => state.counterReducer.count);
  const {increment, decrement} = counterSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="page">
      <Like />
      <div className="page__image" />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </div>
  );
});

export default App;
