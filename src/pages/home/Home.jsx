import classes from './home.module.css';
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
    return (
        <div className={classes["container"]}>
            <Sidebar/>
            
        </div>
    )
}

export default Home
