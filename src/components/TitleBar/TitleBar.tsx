import * as React from 'react';

import { sendMessage } from '../../ipc/ipcRenderer/ipcRenderer';
import {
    messageToggleAlwaysOnTop,
    messageWindowClose,
    messageWindowMaximize,
    messageWindowMinimize,
} from '../../ipc/ipcRenderer/ipcRendererMessages';
import { Icons } from '../Common/Icons/TItleBarIcons';
import { TitleBarButton } from './TitleBarButton';

export const TitleBar: React.FC = () => {
    return (
        <div className="title-bar">
            <div className="title-bar-title">Flashcard</div>
            <div className="title-bar-button-container">
                <TitleBarButton onClickFunction={() => sendMessage(messageToggleAlwaysOnTop())}>
                    {Icons.IconPinned}
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

// ☖_☐✖
