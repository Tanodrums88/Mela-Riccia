import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

import ShareModal from './ShareModal';
import classes from './_ui.module.scss';

export default function ShareButtons(props) {

    const [showShare, setShowShare] = useState(false);

    const handleCloseShare = () => setShowShare(false);
    const handleShowShare = () => setShowShare(true);

    return (
        <>
            <div className={classes.buttonGroup}>
                <div className={classes.boxButton}>
                    <button onClick={handleShowShare}><Icon.ShareFill /></button>
                    <button onClick={props.onPrint}><Icon.PrinterFill /></button>
                </div>
            </div>
            <ShareModal
                show={showShare}
                onHide={handleCloseShare}
                el={props.el}
            />
        </>
    )
}
