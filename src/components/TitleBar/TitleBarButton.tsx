import * as React from 'react';

interface Props {
    text?: string;
    onClickFunction: () => void;
    disabled?: boolean;
}

export const TitleBarButton: React.FC<Props> = ({ children, onClickFunction, disabled }) => {
    return (
        <button onClick={onClickFunction} disabled={disabled}>
            {children}
        </button>
    );
};
