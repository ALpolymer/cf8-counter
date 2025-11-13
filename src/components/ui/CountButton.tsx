type ButtonProps = {
    name: string;
    onClick: () => void;
    disabled?: boolean;
    addClass?: string;
}

const CountButton = ({onClick, addClass="", name, disabled= false}: ButtonProps) => {
    return (
        <button
        className={`bg-cf-dark-gray, text-white, py-2, px-4` + addClass}
        onClick={onClick}
        disabled={disabled}
        >
            {name}
        </button>
    );
};

export default CountButton;