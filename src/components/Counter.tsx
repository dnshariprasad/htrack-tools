import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { increment, decrement } from "../slices/counterSlice";
import { ButtonComponent } from "./ButtonComponent";
import { LabledTextComponent } from "./LabledTextComponent";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="counter-container">
      <h3>Counter</h3>
      <LabledTextComponent lable="Count is.." value={count.toString()} />
      <ButtonComponent
        buttonClass="left-button"
        lable="Increment"
        onButtonClick={() => dispatch(increment())}
      />
      <ButtonComponent
        buttonClass="right-button"
        lable="Decrement"
        onButtonClick={() => dispatch(decrement())}
      />
    </div>
  );
};

export default Counter;
