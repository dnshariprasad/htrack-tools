import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { increment, decrement, incrementAsync } from "../slices/counterSlice";
import { ButtonComponent } from "./ButtonComponent";
import { LabledTextComponent } from "./LabledTextComponent";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  return (
    <div className="counter-container">
      <h3>Counter</h3>
      <LabledTextComponent lable="Count is.." value={count.toString()} />
      <ButtonComponent
        lable="Increment"
        onButtonClick={() => dispatch(increment())}
      />
      <ButtonComponent
        lable="Decrement"
        onButtonClick={() => dispatch(decrement())}
      />
       <ButtonComponent
        lable="Increment Async"
        onButtonClick={() => dispatch(incrementAsync(10))}
      />
    </div>
  );
};

export default Counter;
