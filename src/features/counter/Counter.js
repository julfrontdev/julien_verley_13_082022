import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/counterSlice";

export function Counter() {
  const { count } = useSelector((state) => state.counter);
  // const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment + 1
        </button>
        {/* display: */}
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement - 1
        </button>
        <button
          aria-label="Increment by amount value"
          onClick={() => dispatch(incrementByAmount(99))}
        >
          Increment by amount 99
        </button>
      </div>
    </div>
  );
}
