type MenuItemProps = {
    name: string;
    price: number;
    onOrder: (name: string, price: number) => void;
}

const MenuItem = ({name, price, onOrder}: MenuItemProps) => {
    return (
        <div className="px-8 py-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between gap-4">
                {/* Item Info */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {name}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Available
                        </span>
                    </div>
                </div>

                {/* Price and Order Button */}
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                            ${price}
                        </div>
                        <div className="text-xs text-gray-500">
                            per item
                        </div>
                    </div>

                    <button
                        onClick={() => onOrder(name, price)}
                        className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;