import * as React from "react";
import CounterButton from "./ui/CounterButton.tsx";

type CounterState = {
    count: number,
    lastAction?: string,
    time?: string
}

const Counter = () => {

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const [counterState, setCounterState] = React.useState<CounterState>({
        count: 0,
        lastAction: "",
        time: "",
    })

    const increaseCount = () => {
        setCounterState({
            count: counterState.count + 1,
            lastAction: "Increase",
            time: getCurrentTime(),
        })
    }

    const decreaseCount = () => {
        if (counterState.count > 0) {
            setCounterState({
                count: counterState.count - 1,
                lastAction: "Decrease",
                time: getCurrentTime(),
            })
        }
    }

    const resetCount = () => {
        setCounterState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime(),
        })
        }

    return (
        <div className="flex flex-col justify-center items-center gap-4">
           <p className="text-5xl font-bold">{counterState.count}</p>

            <div className="flex justify-center items-center gap-4">
                <CounterButton
                 name={"Increase"}
                 onClick={increaseCount}
                />
                <CounterButton
                    name={"Decrease"}
                    onClick={decreaseCount}
                    disabled={counterState.count === 0}
                />
                <CounterButton
                    name={"Reset"}
                    onClick={resetCount}
                    disabled={counterState.count === 0}
                />
            </div>

            <p>Last Change:{` ${!counterState.lastAction ? "" : `${counterState.lastAction} at ${counterState.time}`} `}</p>
        </div>

    );
};

export default Counter;