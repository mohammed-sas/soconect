import classes from './commentCard.module.css';
import { deleteComment } from "../../redux/async thunks/postThunk";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const CommentCard = ({comment,post}) => {
    const dispatch = useDispatch();
    const deleteHandler=async ()=>{
        dispatch(deleteComment({commentId:comment._id,postId:post._id})); 
        toast.success("Comment Deleted");
    }
    return (
        <div className={classes["comment-card"]}>
            <div className={classes["comment-body"]}>
                <p className={`${classes["content"]} text-white`}>
                    {comment.content}
                </p>
                <i className={`fas fa-times text-purple-400 ${classes["close-btn"]}`} onClick={deleteHandler}></i>
            </div>
            <span className={`${classes["footer"]} text-purple-400`}>@{comment.username}</span>
        </div>
    )
}

export default CommentCard
