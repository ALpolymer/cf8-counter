type ButtonProps = {
    name: string,
    onClick: () => void,
    disabled?: boolean,
}
const CounterButton = ({name, disabled = false, onClick}:ButtonProps) => {
    return (
        <button
            className={`${disabled ? 'bg-cf-gray' : 'bg-cf-dark-red'} text-white px-4 py-2 rounded-md`} onClick={onClick}
        >
            {name}
        </button>
    );
};

export default CounterButton;