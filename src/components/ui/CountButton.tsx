type ButtonProps = {
    name: string;
    onClick: () => void;
    disabled?: boolean;
    addClass?: string;
}

const CountButton = ({onClick, addClass="", name, disabled= false}: ButtonProps) => {
    return (
        <button
        className={`bg-cf-dark-gray text-white rounded-lg p` + addClass}
        onClick={onClick}
        disabled={disabled}
        >
            {name}
        </button>
    );
};

export default CountButton;