import * as React from "react";
import CounterButton from "./ui/CounterButton.tsx";

const Counter = () => {
    const [count, setCount] = React.useState<number>(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4">
           <p className="text-5xl font-bold">{count}</p>

            <div className="flex justify-center items-center gap-4">
                <CounterButton
                 name={"Increase"}
                 onClick={increaseCount}
                />
                <CounterButton
                    name={"Decrease"}
                    onClick={decreaseCount}
                    disabled={count === 0}
                />
                <CounterButton
                    name={"Reset"}
                    onClick={resetCount}
                    disabled={count === 0}
                />


            </div>
        </div>

    );
};

export default Counter;