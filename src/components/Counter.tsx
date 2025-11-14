import * as React from "react";

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
                <button onClick={increaseCount} className="bg-cf-dark-red text-white px-4 py-2 rounded-md"
                >
                    Increase
                </button>

                <button
                    onClick={decreaseCount} className={`${count === 0 ? `disabled: bg-cf-gray`: `bg-cf-dark-red`} text-white px-4 py-2 rounded-md`}
                >
                    Decrease
                </button>

                <button onClick={resetCount} className={`${count === 0 ? `disabled: bg-cf-gray`: `bg-cf-dark-red`} text-white px-4 py-2 rounded-md`}
                >
                    Reset
                </button>

            </div>
        </div>

    );
};

export default Counter;