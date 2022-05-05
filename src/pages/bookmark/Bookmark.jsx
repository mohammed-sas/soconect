import { PostCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import classes from "./bookmark.module.css";
import { useEffect } from "react";
import {getUser} from '../../redux/async thunks/userThunk';
const Bookmark = () => {
  const user= useSelector(state=>state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    (async ()=>{
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(getUser(user._id));
    })()
  },[]);
  return (
    <main className={classes["bookmarks-container"]}>
      <h1 className="centered-text text-primary">Bookmark</h1>
      <div className={classes["bookmark-list"]}>
        {user.bookmarks.map((bookmark) => {
          return <PostCard key={bookmark._id} post={bookmark} />;
        })}
      </div>
    </main>
  );
};

export default Bookmark;
