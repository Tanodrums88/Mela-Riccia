import * as Icon from 'react-bootstrap-icons';
import classes from '../_Header.module.scss';

const AdminMode = () => {
    return (
        <div className={classes.boxAdminMode}>
            <Icon.PersonFillCheck size={'40px'} color='#03FFA7' />
        </div>
    )
};

export default AdminMode;