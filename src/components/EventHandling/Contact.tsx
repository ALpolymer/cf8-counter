import ActionButton from "./ActionButton.tsx";

const Contact = () => {
    const handleSendMessage = () => {
        alert("Sending message");
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md">
            <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>

                <p className="text-sm text-gray-600">
                    Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <div className="pt-2">
                    <ActionButton text={"Send Message"} onClick={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Contact;