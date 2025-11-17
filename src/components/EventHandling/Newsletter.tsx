import ActionButton from './ActionButton'

const Newsletter = () => {
    const handleSubscribe = () => {
        alert("Subscribing")
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-2">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900">Newsletter</h2>

                <p className="text-sm text-gray-600">
                    Stay updated with our latest news and exclusive offers delivered straight to your inbox.
                </p>

                <div className="pt-2">
                    <ActionButton text={"Subscribe"} onClick={handleSubscribe} />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;