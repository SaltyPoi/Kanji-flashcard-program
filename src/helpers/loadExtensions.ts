import { BrowserWindow } from 'electron';
import * as os from 'os';
import * as path from 'path';

const chromeExtensionsDir = 'Appdata/Local/Google/Chrome/User Data/Default/Extensions';

export function loadExtensions() {
    //Load react
    console.log('Loading react extension');
    try {
        BrowserWindow.addDevToolsExtension(
            path.join(os.homedir(), chromeExtensionsDir, 'fmkadmapgofadopljbjfkapdkoienihi/4.0.6_0')
        );
        console.log('React extension loaded');
    } catch (e) {
        console.error(e);
    }

    //Load redux
    console.log('Loading redux extension');
    try {
        BrowserWindow.addDevToolsExtension(
            path.join(
                os.homedir(),
                chromeExtensionsDir,
                'lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0'
            )
        );
        console.log('Redux extension loaded');
    } catch (e) {
        console.error(e);
    }
}
