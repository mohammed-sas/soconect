import classes from "../following/followingModal.module.css";
import { useSelector } from "react-redux"; 


const FollowingHashtag = ({setShowHashtags}) => {
    const user = useSelector(state=>state.user);
  const { hashtag } = user;
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-primary ${classes["close-btn"]}`}
          onClick={setShowHashtags}
        ></i>
        <h3 className="text-primary">Following</h3>
        <div className={classes["hashtag-list"]}>
          {hashtag.map((hash) => {
            return (
              <h3 className="text-white" key={hash}>
                  #{hash}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FollowingHashtag
