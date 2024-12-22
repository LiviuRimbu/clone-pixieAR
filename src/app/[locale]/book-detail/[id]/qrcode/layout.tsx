import React from "react";

const BookLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-[100vh] bg-transparent">
            {children}
        </div>
    );
};

export default BookLayout;
