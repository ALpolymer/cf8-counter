type UserDetailsProps = {
    name: string;
    isOnline: boolean;
    hideOffline: boolean;
    isPremium?: boolean;
}

const UserDetails = ({name, isOnline, hideOffline, isPremium = false}: UserDetailsProps) => {
    if (hideOffline && !isOnline) {
        return null;
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                        {isPremium && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                ⭐ Premium
                            </span>
                        )}
                    </div>
                </div>

                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    isOnline
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                }`}>
                    <span className={`h-2 w-2 rounded-full ${
                        isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}></span>
                    {isOnline ? 'Online' : 'Offline'}
                </span>
            </div>

            <div className="mt-4">
                {isOnline ? (
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                        Send Message
                    </button>
                ) : (
                    <div className="text-center py-2 px-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">User is currently offline</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDetails;