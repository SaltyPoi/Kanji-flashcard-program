export interface uiReducerState {
    buttonsEnabled: boolean;
    windowPinned: boolean;
}

const initalState: uiReducerState = {
    buttonsEnabled: true,
    windowPinned: false
};

export const uiReducer = (
    state: uiReducerState = initalState,
    { type, payload }
): uiReducerState => {
    switch (type) {
        case 'DISABLE_BUTTONS':
            return { ...state, buttonsEnabled: false };
        case 'ENABLE_BUTTONS':
            return { ...state, buttonsEnabled: true };
        case 'TOGGLE_WINDOW_PIN':
            return { ...state, windowPinned: !state.windowPinned };
        case 'SET_WINDOW_PIN':
            return { ...state, windowPinned: payload.windowPinned };

        default:
            return state;
    }
};
