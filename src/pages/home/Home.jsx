import classes from "./home.module.css";
import Feeds from "./feeds/Feeds";
import {Stories} from '../../components/index'

const Home = () => {
 
  return (
    <main className={classes["user-feed"]}>
      <h1 className="centered-text text-purple-400">Home</h1>
      <Stories/>
      <Feeds />
    </main>
  );
};

export default Home;
