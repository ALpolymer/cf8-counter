type ActionButtonProps = {
    text: string;
    onClick: () => void;
}

const ActionButton = ({text, onClick}: ActionButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            {text}
        </button>
    );
};

export default ActionButton;