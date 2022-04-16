import classes from "./postCard.module.css";

const PostCard = ({ post }) => {
  return (
    <div className={classes["post-container"]}>
      <div className="avatar avatar-text">
        <span>{post.username.substring(0, 2).toUpperCase()}</span>
      </div>
      <div className={classes["post-body-container"]}>
        <div className={classes["username-id-container"]}>
          <div className={classes["username-body"]}>
            <span className="text-white">@{post.username}</span>
            <span className="text-white">3h</span>
          </div>
          <span>
            <i className="fas fa-ellipsis-h text-white"></i>
          </span>
        </div>
        <div className="tweet-body">
          <p className="text-white">{post.content}</p>
        </div>
        <div className={classes["post-footer"]}>
          <span>
            <i className="far fa-comment text-white"></i>
            <span className="text-white">0</span>
          </span>
          <span>
            <i className="far fa-heart text-white"></i>
            <span className="text-white">{post.likes.likeCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
