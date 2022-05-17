import classes from "./storyModal.module.css";
import logo from "../../assets/logo-32x32.png";
import { useState } from "react";

const StoryModal = ({ setShowStory, userStories }) => {
    const [index,setIndex] = useState(0);
    const [storyData,setStoryData] = useState(userStories[0]);
    const rightClickHandler=()=>{
        if(userStories[index+1]){
        setStoryData(userStories[index+1]);
        setIndex(index+1);
        }
    }
    const leftClickHandler=()=>{
        if(userStories[index-1]){
        setStoryData(userStories[index-1]);
        setIndex(index-1);
        }
    }
  return (
    <div className={classes["modal-container"]}>
      <img src={logo} alt="logo" className={classes["logo"]} />
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowStory}
        ></i>
        <div className={classes["content"]}>
            <p>
                {storyData.content}
            </p>
        </div>
        <div className={classes["footer"]}>
        {userStories[index-1] && <i className="fas fa-chevron-circle-left" onClick={leftClickHandler}></i>}
        {userStories[index+1] && <i className="fas fa-chevron-circle-right" onClick={rightClickHandler}></i>}
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
