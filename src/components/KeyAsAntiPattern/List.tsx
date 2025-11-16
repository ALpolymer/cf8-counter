import ListItem from "./ListItem.tsx";
import {useState} from "react";

type ListItemData = {
    id: number,
    item?: string | number
    createdAt: string
}

const List = () => {
    const getCurrentTime = () => new Date().toLocaleTimeString();

    const [listItems, setListItems] = useState<ListItemData[]>([
        { id: 1, item: 1, createdAt: getCurrentTime() },
    ]);

    const handleItemChange = (id: number, newValue: string) => {
        setListItems(prev => prev.map(item =>
            item.id === id ? { ...item, item: newValue } : item
        ));
    };

    return (
        <div className="space-y-4">
            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                        Add New to Start
                    </button>

                    <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                        Add New to End
                    </button>

                    <button className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors shadow-sm">
                        Sort by Earliest
                    </button>

                    <button className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors shadow-sm">
                        Sort by Latest
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
                    <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <div className="col-span-1">#</div>
                        <div className="col-span-1">ID</div>
                        <div className="col-span-7">Item</div>
                        <div className="col-span-3">Created At</div>
                    </div>
                </div>

                {/* Items */}
                <div className="divide-y divide-gray-200">
                    {listItems.length > 0 ? (
                        listItems.map((listItem, index) => (
                            <ListItem
                                key={listItem.id}
                                index={index + 1}
                                id={listItem.id}
                                item={listItem.item}
                                createdAt={listItem.createdAt}
                                onChange={(newValue) => handleItemChange(listItem.id, newValue)}
                            />
                        ))
                    ) : (
                        <div className="px-6 py-12 text-center">
                            <p className="text-gray-500 text-sm">No items yet. Add your first item!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;