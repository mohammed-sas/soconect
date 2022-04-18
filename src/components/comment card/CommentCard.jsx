import { usePost } from '../../context';
import classes from './commentCard.module.css';

const CommentCard = ({comment,post}) => {
    const {deleteComment}=usePost();
    const deleteHandler=async ()=>{
        try{
            await deleteComment(comment._id,post._id);
        }catch(error){
            console.log(error);
        }
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
