import * as React from 'react';

import { sendMessage } from '../../ipc/ipcRenderer/ipcRenderer';
import {
    messageWindowClose,
    messageWindowMaximize,
    messageWindowMinimize,
    messageToggleAlwaysOnTop
} from '../../ipc/ipcRenderer/ipcRendererMessages';
import { Icons } from '../Common/Icons/TItleBarIcons';
import { TitleBarButton } from './TitleBarButton';
import { connect } from 'react-redux';
import { rootReducerState } from '../../store/rootReducer';

interface StateProps {
    windowPinned: boolean;
}
interface Props extends StateProps {}

export const TitleBar: React.FC<Props> = ({ windowPinned }) => {
    return (
        <div className="title-bar">
            <div className="title-bar-title">Flashcard</div>
            <div className="title-bar-button-container">
                {windowPinned !== undefined && (
                    <React.Fragment>
                        <TitleBarButton
                            onClickFunction={() => sendMessage(messageToggleAlwaysOnTop())}>
                            {windowPinned ? Icons.IconPinned : Icons.IconUnpinned}
                        </TitleBarButton>
                        <TitleBarButton
                            onClickFunction={() => sendMessage(messageWindowMinimize())}>
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
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state: rootReducerState) => ({
    windowPinned: state.ui.windowPinned
});

export default connect<StateProps, null>(mapStateToProps)(TitleBar);
