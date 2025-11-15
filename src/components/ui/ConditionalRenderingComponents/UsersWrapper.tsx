import {useState} from "react";
import UserDetails from "./UserDetails";

const UsersWrapper = () => {
    const [showOffLine, setShowOffLine] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Users</h1>
                    <button
                        onClick={() => setShowOffLine(!showOffLine)}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm"
                    >
                        {showOffLine ? "Show All Users" : "Hide Offline Users"}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <UserDetails
                        name={"Alex"}
                        isOnline={true}
                        isPremium={true}
                        hideOffline={showOffLine}
                    />
                    <UserDetails
                        name={"John"}
                        isOnline={false}
                        hideOffline={showOffLine}
                    />

                    <UserDetails
                        name={"Michael"}
                        isOnline={false}
                        hideOffline={showOffLine}
                        isPremium={true}
                    />

                    <UserDetails
                        name={"John"}
                        isOnline={true}
                        hideOffline={showOffLine}
                        isPremium={false}
                    />

                </div>
            </div>
        </div>
    );
};

export default UsersWrapper;