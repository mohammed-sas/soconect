import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStories } from "../../redux/async thunks/userThunk";
import UserStoryIcon from "../user story icon/UserStoryIcon";
import classes from "./stories.module.css";

const Stories = () => {
  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllStories());
  }, []);
  return (
    <div className={classes["icon-list"]}>
      {stories.map((data) => {
        return <UserStoryIcon key={data.username} data={data} />;
      })}
    </div>
  );
};

export default Stories;
