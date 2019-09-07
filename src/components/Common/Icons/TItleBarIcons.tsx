import * as React from 'react';

const IconClose: JSX.Element = (
    <svg id="close" height="48" width="48">
        <line x1="11" y1="11" x2="37" y2="37" />
        <line x1="11" y1="37" x2="37" y2="11" />
        <line x1="11" y1="11" x2="37" y2="37" />
        <line x1="11" y1="37" x2="37" y2="11" />
    </svg>
);

const IconMaximize: JSX.Element = (
    <svg id="maximize" height="48" width="48">
        <line x1="12" y1="10" x2="12" y2="38" />
        <line x1="10" y1="36" x2="38" y2="36" />
        <line x1="36" y1="38" x2="36" y2="10" />
        <line x1="38" y1="12" x2="10" y2="12" />
    </svg>
);

const IconMinimize: JSX.Element = (
    <svg id="minimize" height="48" width="48">
        <line x1="10" y1="36" x2="38" y2="36" />
    </svg>
);

// TODO change svg
const IconPinned: JSX.Element = (
    <svg id="minimize" height="48" width="48">
        <line x1="23" y1="10" x2="23" y2="32" />
        <line x1="25" y1="10" x2="25" y2="32" />
    </svg>
);

export const Icons = {
    IconClose,
    IconMaximize,
    IconMinimize,
    IconPinned
};
