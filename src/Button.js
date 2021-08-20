import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store";

const Button = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.counter);

  const onIncrease = () => {
    dispatch(counterActions.increment(5));
  };

  const onDecrease = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={onIncrease}>increment</button>
      <button onClick={onDecrease}>decrement</button>
    </div>
  );
};
export default Button;
