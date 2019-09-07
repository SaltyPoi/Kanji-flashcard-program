import * as React from 'react';

export const DragHandler: React.FC = ({ children }) => {
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div className="drag-handler" onDrop={handleDrop} onDragOver={handleDragOver}>
            {children}
        </div>
    );
};
