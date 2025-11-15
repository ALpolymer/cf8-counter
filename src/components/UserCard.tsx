import UserInfo from "./UserInfo"

type UserInfoProps = {
    id?: number;
    name: string;
    age: number;
    city: string;
    email: string;
}


const UserCard = ({id, ...rest}: UserInfoProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                User {id} Details
            </h2>
            <UserInfo {...rest} />
        </div>
    );
};

export default UserCard;