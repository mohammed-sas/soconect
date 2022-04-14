import classes from './createPostModal.module.css';
const CreatePostModal = ({setShowModal}) => {
    return (
        <div className={classes["modal-container"]}>
            <div className={classes["modal"]}>
            <i class={`fas fa-times text-primary ${classes["close-btn"]}`} onClick={setShowModal}></i>
                <h3 className="text-primary">Create Post</h3>
                <textarea className={classes["text-area"]} name="post" placeholder="What's the buzz?"></textarea>
                <button className="btn btn-primary">Post</button>
            </div>
        </div>
    )
}

export default CreatePostModal
