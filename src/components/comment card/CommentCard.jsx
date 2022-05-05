import classes from './commentCard.module.css';
import { deleteComment } from "../../redux/async thunks/postThunk";
import { useDispatch } from "react-redux";
const CommentCard = ({comment,post}) => {
    const dispatch = useDispatch();
    const deleteHandler=async ()=>{
        dispatch(deleteComment(comment._id,post._id)); 
    }
    return (
        <div className={classes["comment-card"]}>
            <div className={classes["comment-body"]}>
                <p className={`${classes["content"]} text-white`}>
                    {comment.content}
                </p>
                <i className={`fas fa-times text-primary ${classes["close-btn"]}`} onClick={deleteHandler}></i>
            </div>
            <span className={`${classes["footer"]} text-primary`}>@{comment.username}</span>
        </div>
    )
}

export default CommentCard
