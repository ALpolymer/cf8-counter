import * as React from "react";

type CounterState = {
    count: number,
    lastAction?: string,
    time?: string
}



const UseCounter = () => {
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

    return {
        count: counterState.count,
        lastAction: counterState.lastAction,
        time: counterState.time,
        increaseCount,
        decreaseCount,
        resetCount,
    }
};

export default UseCounter;