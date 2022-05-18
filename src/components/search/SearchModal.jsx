import classes from "./searchModal.module.css";
const SearchModal = ({setShowSearch}) => {
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i className={`fas fa-times text-white ${classes["close-btn"]}`} onClick={setShowSearch}></i>
      </div>
    </div>
  );
};

export default SearchModal;
