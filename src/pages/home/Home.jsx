import classes from './home.module.css';
import Sidebar from '../../components/sidebar/Sidebar'
import Feeds from './feeds/Feeds'
const Home = () => {
    return (
        <div className={classes["container"]}>
            <Sidebar/>
            <main className={classes["user-feed"]}>
                <h1 className="centered-text text-primary">Home</h1>
                <Feeds/>
            </main>
            
        </div>
    )
}

export default Home
