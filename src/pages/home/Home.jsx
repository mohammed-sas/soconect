import classes from "./home.module.css";
import Feeds from "./feeds/Feeds";
const Home = () => {
  return (
    <main className={classes["user-feed"]}>
      <h1 className="centered-text text-primary">Home</h1>
      <Feeds />
    </main>
  );
};

export default Home;
