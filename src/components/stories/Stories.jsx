import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllStories } from "../../redux/async thunks/userThunk";


const Stories = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllStories());
    })
    return (
        <div>
            
        </div>
    )
}

export default Stories
