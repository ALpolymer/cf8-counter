import ListItem from "./ListItem.tsx";
import {useState} from "react";

type ListItemData = {
    id: number,
    createdAt: string
}

let nextId = 1;

const List = () => {
    const getCurrentTime = () => new Date().toLocaleTimeString();


    const [listItems, setListItems] = useState<ListItemData[]>([
        { id: nextId,  createdAt: getCurrentTime() },
    ]);

    const handleAddNewToEnd = () =>{
        nextId++;
        setListItems([
            ...listItems,
            { id: nextId , createdAt: getCurrentTime() },
        ])

    }

    const handleAddNewToStart = () =>{
        nextId++;
        setListItems(
            [
                { id: nextId , createdAt: getCurrentTime() },
                ...listItems
            ]
        )
    }

    const sortByEarliest = () =>{
        const sortedList = [...listItems];
        sortedList.sort((a, b) => a.id - b.id);
        setListItems(sortedList);
    }

    const sortByLatest = () =>{
        const sortedList = [...listItems];
        sortedList.sort((a, b) => b.id - a.id);
        setListItems(sortedList);
    }



    return (
        <div className="space-y-4">
            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <button
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                        onClick={handleAddNewToStart}
                    >
                        Add New to Start
                    </button>

                    <button
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                        onClick={handleAddNewToEnd}
                    >
                        Add New to End
                    </button>

                    <button
                        className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors shadow-sm"
                        onClick={sortByEarliest}
                    >
                        Sort by Earliest
                    </button>

                    <button className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 text-sm font-medium rounded-lg transition-colors shadow-sm"
                            onClick={sortByLatest}
                    >
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
                            //Index Anti-Pattern
                            <ListItem
                                key={index}
                                index={index}
                                id={listItem.id}
                                createdAt={listItem.createdAt}
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