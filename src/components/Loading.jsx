import React from 'react';

const Loading = ({ minHeight = "min-h-[60vh]" }) => {
    return (
        <div className={`flex justify-center items-center ${minHeight}`}>
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
        </div>
    );
};

export default Loading;
