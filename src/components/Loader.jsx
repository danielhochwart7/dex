const Loader = () => {
    return (
        <div className="flex justify-center items-center py-0 space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-700"></div>
            <div className="italic font-semibold text-sm p-1">Processing...</div>
        </div>
    );
}

export default Loader;