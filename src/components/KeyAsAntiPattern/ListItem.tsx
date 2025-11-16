type ListItemProps = {
    index: number,
    id: number,
    item?: string | number,
    createdAt: string,
    onChange?: (value: string) => void;
}

const ListItem = ({id, createdAt, item, index, onChange}: ListItemProps) => {
    return (
        <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
            <div className="grid grid-cols-12 gap-4 items-center">
                {/* Index */}
                <div className="col-span-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                        {index}
                    </span>
                </div>

                {/* ID */}
                <div className="col-span-1">
                    <span className="text-sm font-mono text-gray-500">
                        {id}
                    </span>
                </div>

                {/* Item Input */}
                <div className="col-span-7">
                    <input
                        type="text"
                        placeholder="Enter item..."
                        value={item ?? ''}
                        onChange={(e) => onChange?.(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    />
                </div>

                {/* Created At */}
                <div className="col-span-3">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-600 font-medium">
                            {createdAt}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;