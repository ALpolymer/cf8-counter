import List from "./List.tsx";

const ListWrapper = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Items List</h1>
                    <p className="text-sm text-gray-600">Manage your items and track creation time</p>
                </div>
                <List/>
            </div>
        </div>
    );
};

export default ListWrapper;