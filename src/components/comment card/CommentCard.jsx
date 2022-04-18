import classes from './commentCard.module.css';

const CommentCard = ({comment}) => {
    return (
        <div className={classes["comment-card"]}>
            <div className={classes["comment-body"]}>
                <p className={`${classes["content"]} text-white`}>
                    {comment.content}
                </p>
                <i className={`fas fa-times text-primary ${classes["close-btn"]}`}></i>
            </div>
            <span className={`${classes["footer"]} text-primary`}>@{comment.username}</span>
        </div>
    )
}

export default CommentCard
