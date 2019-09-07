import * as React from 'react';

import { sendMessage } from '../../ipc/ipcRenderer/ipcRenderer';
import {
    messageWindowClose,
    messageWindowMaximize,
    messageWindowMinimize
} from '../../ipc/ipcRenderer/ipcRendererMessages';
import { Icons } from '../Common/Icons/TItleBarIcons';
import { TitleBarButton } from './TitleBarButton';
import { connect } from 'react-redux';
import { rootReducerState } from '../../store/rootReducer';
import { checkAndSetWindowPin } from '../../store/actions/uiActions';

interface StateProps {
    windowPinned: boolean;
}

interface DispatchProps {
    checkAndSetWindowPin: () => void;
}

interface Props extends StateProps, DispatchProps {}

export const TitleBar: React.FC<Props> = ({ windowPinned, checkAndSetWindowPin }) => {
    return (
        <div className="title-bar">
            <div className="title-bar-title">Flashcard</div>
            <div className="title-bar-button-container">
                <TitleBarButton
                    onClickFunction={() => {
                        checkAndSetWindowPin();
                    }}>
                    {windowPinned ? Icons.IconPinned : Icons.IconUnpinned}
                </TitleBarButton>
                <TitleBarButton onClickFunction={() => sendMessage(messageWindowMinimize())}>
                    {Icons.IconMinimize}
                </TitleBarButton>
                <TitleBarButton
                    onClickFunction={() => sendMessage(messageWindowMaximize())}
                    disabled>
                    {Icons.IconMaximize}
                </TitleBarButton>
                <TitleBarButton onClickFunction={() => sendMessage(messageWindowClose())}>
                    {Icons.IconClose}
                </TitleBarButton>
            </div>
        </div>
    );
};

const mapStateToProps = (state: rootReducerState) => ({
    windowPinned: state.ui.windowPinned
});

export default connect<StateProps, DispatchProps>(mapStateToProps, { checkAndSetWindowPin })(
    TitleBar
);
