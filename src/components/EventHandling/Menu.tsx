import MenuItem from './MenuItem';

const Menu = () => {
    const handleOrder = (itemName: string, itemPrice: number) => {
        alert(`Your order is ${itemName} for $${itemPrice}`);
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">Our Menu</h2>
                                <p className="text-orange-100 text-sm mt-1">Fresh and delicious dishes</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="divide-y divide-gray-200">
                        <MenuItem name="Pizza" price={12} onOrder={handleOrder} />
                        <MenuItem name="Burger" price={8} onOrder={handleOrder} />
                        <MenuItem name="Salad" price={6} onOrder={handleOrder} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;