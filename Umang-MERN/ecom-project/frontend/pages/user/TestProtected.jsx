function TestProtected() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center">

            <div className="text-center">

                <h1 className="text-4xl font-bold">
                    Protected Page
                </h1>

                <p className="mt-3 text-gray-600">
                    You are logged in and can access this page.
                </p>

            </div>

        </div>
    );
}

export default TestProtected;