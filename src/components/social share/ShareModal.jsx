import classes from "./shareModal.module.css";
import { ShareSocial } from "react-share-social";

const shareSocialstyle = {
  background: "#434343",
  borderRadius: 2,
  border: 0,
  color: "white",
  padding: "1rem",
};
const ShareModal = ({ post, setShowShareModal }) => {
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowShareModal}
        ></i>
        <ShareSocial
          style={shareSocialstyle}
          url={`https://soco-soconect.netlify.app/posts/${post._id}`}
          socialTypes={["twitter", "linkedin"]}
        />
      </div>
    </div>
  );
};

export default ShareModal;
