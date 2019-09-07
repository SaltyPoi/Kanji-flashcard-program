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
    <svg id="pinned" height="500" width="500">
        <svg id="pin" height="500" width="500">
            <line x1="140" y1="180" x2="320" y2="360" />
            <line x1="211" y1="289" x2="100" y2="400" />
            <polygon points="216,204 280,90 410,220 296,284" />
        </svg>
    </svg>
);

export const Icons = {
    IconClose,
    IconMaximize,
    IconMinimize,
    IconPinned
};
