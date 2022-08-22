import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action/index";
export default function Counts() {
  const count = useSelector((state) => state.changeNumber);
  localStorage.setItem("count", count);
  const dispatch = useDispatch();
  return (
    <>
      <h2>counter js</h2>
      <h3>Count:{count}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decremnt</button>
    </>
  );
}
