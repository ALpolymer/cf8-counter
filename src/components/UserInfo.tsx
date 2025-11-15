type UserInfoProps = {
    id?: number;
    name: string;
    age: number;
    city: string;
    email: string;
}

const UserInfo = ({name, age, city, email}: UserInfoProps) => {
    return (
        <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">
                {name}
            </h3>
            <div className="space-y-2">
                <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">Age:</span> {age}
                </p>
                <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">City:</span> {city}
                </p>
                <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">Email:</span>{" "}
                    <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-700 hover:underline">
                        {email}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default UserInfo;