import CounterButton from "./ui/CounterButton.tsx";
import useCounter from "../hooks/useCounter.tsx";



const Counter = () => {

  const { count, increaseCount, resetCount, decreaseCount, time, lastAction } = useCounter();
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

            <p>Last Change:{` ${!lastAction ? "" : `${lastAction} at ${time}`} `}</p>
        </div>

    );
};

export default Counter;