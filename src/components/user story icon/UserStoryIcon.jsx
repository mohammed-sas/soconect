import classes from "./userStoryIcon.module.css";
import { useToggle } from "../../hooks/useToggle";
import StoryModal from "../story modal/StoryModal";
const UserStoryIcon = ({ data }) => {
  const [showStory, setShowStory] = useToggle(false);
  return (
    <>
      <div className={classes["icon"]} onClick={setShowStory}>
        <span className={classes["user-name"]}>
          {data.username.substring(0, 2).toUpperCase()}
        </span>
      </div>
      {showStory && (
        <StoryModal userStories={data.data} setShowStory={setShowStory} />
      )}
    </>
  );
};

export default UserStoryIcon;
