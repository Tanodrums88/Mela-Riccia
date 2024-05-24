import { Fragment, useState, useEffect, useMemo, useContext } from 'react';
import { UserContext } from '../context/user.context';

import AdminHome from './adminComponents/AdminHome';
import FormHandler from './adminComponents/FormHandler';
import CurrentRecipes from './adminComponents/CurrentRecipes';
import CommentsPresent from './adminComponents/CommentsPresent';
import useFetchComments from '../util_hook/useFetchComments';

import classes from './_admin.module.scss';

const AdminHandler = () => {

    const { user } = useContext(UserContext);

    const [isShow, setIsShow] = useState(true);
    const [formIsShow, setFormIsShow] = useState(false);
    const [currentIsShow, setCurrentIsShow] = useState(false);
    const [commentsShow, setCommentsShow] = useState(false);

    const { commetsApi } = useFetchComments();

    const unapprovedReviewsFilter = commetsApi.filter(obj => {
        return (obj.approved === false)
    })

    const unapprovedReviews = useMemo(() => unapprovedReviewsFilter.length, [unapprovedReviewsFilter]);

    const [badgeIsShow, setBadgeIsShow] = useState(false);

    useEffect(() => {
        if (unapprovedReviews === 0) {
            setBadgeIsShow(false)
        } else {
            setBadgeIsShow(true)
        }
    }, [unapprovedReviews])


    const navigateAdd = () => {
        setIsShow(false);
        setFormIsShow(true);
    };
    const navigateCurrent = () => {
        setIsShow(false);
        setCurrentIsShow(true);
    };

    const navigateComments = () => {
        setIsShow(false);
        setCommentsShow(true);
    };

    const backModule = () => {
        setIsShow(true);
        setFormIsShow(false);
        setCurrentIsShow(false);
        setCommentsShow(false);
    }

    const userEmail = user._profile.data.email;

    return (
        <Fragment>
            <h1 className={classes.title}>Area Amministratore</h1>
            {!user && <h2 className={classes.errorText}>Non hai i permessi per accedere!</h2>}
            {user && (
                <>
                    {isShow &&
                        <AdminHome
                            userEmail={userEmail}
                            navigateAdd={navigateAdd}
                            navigateCurrent={navigateCurrent}
                            navigateComments={navigateComments}
                            unapprovedReviews={unapprovedReviews}
                            badgeIsShow={badgeIsShow}
                        />
                    }
                    {formIsShow && <FormHandler />}
                    {currentIsShow && <CurrentRecipes />}
                    {commentsShow && <CommentsPresent />}
                    {!isShow &&
                        <div className={classes.title}>
                            <button className={classes.btnForm} onClick={backModule}>Chiudi scheda</button>
                        </div>
                    }
                </>
            )}
        </Fragment>
    )
};

export default AdminHandler;