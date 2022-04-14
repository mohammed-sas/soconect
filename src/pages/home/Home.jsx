import classes from './home.module.css';
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
    return (
        <div className={classes["container"]}>
            <Sidebar/>
            <main className={classes["user-feed"]}>
                <h1 className="text-primary">Home</h1>
            </main>
            
        </div>
    )
}

export default Home
