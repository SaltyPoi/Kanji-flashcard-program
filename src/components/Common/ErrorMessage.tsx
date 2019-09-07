import * as React from 'react';

interface Props {
    error: string;
}

export const ErrorMessage: React.FC<Props> = ({ error }) => {
    return <div className="error-message">{error}</div>;
};
