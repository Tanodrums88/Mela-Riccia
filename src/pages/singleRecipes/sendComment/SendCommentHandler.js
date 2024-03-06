import { useState, useRef, useEffect } from 'react'
import { Modal } from "react-bootstrap";

import FormComment from './FormComment';
import ModalCommentError from './ModalCommentError';
import ModalCommentSending from './ModalCommentSending';
import CommentIsSent from './CommentIsSent';

import classes from '../singleRecipe.module.scss';

function SendCommentHandler({ recipe }) {

    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const name = recipe.map((e) => (e.name));

    const [showComment, setShowComment] = useState(false);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

    const handleCloseComment = () => setShowComment(false) && setIsSent(false);
    const handleShowComment = () => setShowComment(true);

    const [valutation, setValutation] = useState('0');
    const [useNameIsValid, setUserNameIsValid] = useState(false);
    const [reviewIsValid, setReviewIsValid] = useState(false);
    const selectValutation = (event) => {
        setValutation(event.target.value)
    }

    const userNameRef = useRef();
    const reviewRef = useRef();

    const userNameChange = (e) => {
        setUserNameIsValid(e.target.value)
    }
    const reviewChange = (e) => {
        setReviewIsValid(e.target.value)
    }

    useEffect(() => {
        if (valutation !== '0' && useNameIsValid && reviewIsValid) {
            setButtonIsDisabled(false);
        } else {
            setButtonIsDisabled(true);
        }
    }, [valutation, useNameIsValid, reviewIsValid])




    const url = `https://react-http-88-default-rtdb.europe-west1.firebasedatabase.app/comments.json`;

    async function sendComment() {

        var data = new Date();
        var gg, mm, aaaa, Hh, Mm;
        gg = data.getDate() + "/";
        mm = data.getMonth() + 1 + "/";
        aaaa = data.getFullYear();
        Hh = data.getHours() + ":";
        Mm = data.getMinutes(2);
        const date = gg + mm + aaaa + ' alle ore ' + Hh + Mm;

        const comment = {
            name: name.toString(),
            user: userNameRef.current.value,
            valutation: valutation,
            review: reviewRef.current.value,
            approved: false,
            date: date
        }

        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('An error occurred while updating the comment');
            }
            setIsSent(true);

            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false);
    }

    let content;

    if (!isSent) {
        content =
            <FormComment
                selectValutation={selectValutation}
                userNameRef={userNameRef}
                userNameChange={userNameChange}
                reviewRef={reviewRef}
                reviewChange={reviewChange}
                handleCloseComment={handleCloseComment}
                sendComment={sendComment}
                buttonIsDisabled={buttonIsDisabled}
            />
    }

    if (error) {
        content =
            <ModalCommentError
                error={error}
                handleCloseComment={handleCloseComment}
            />
    }

    if (isLoading) {
        content = <ModalCommentSending />
    }

    if (isSent) {
        content =
            <CommentIsSent
                handleCloseComment={handleCloseComment}
            />
    }
    return (
        <>
            <div className={classes.sendComment}>
                <h2>Hai provato questa ricetta? <br />Dicci cosa ne pensi e lascia una recensione.</h2>
                <button className={classes.btnComment} onClick={handleShowComment}>Lascia una recensione</button>
            </div>
            <Modal show={showComment} onHide={handleCloseComment} centered size='lg'>
                {content}
            </Modal>
        </>
    )
}

export default SendCommentHandler