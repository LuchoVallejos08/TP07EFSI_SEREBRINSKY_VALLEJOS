import HomeTitle from "./HomeTitle";
import StoriesArray from "./StoriesArray";
import PostsArray from "./PostsArray";
import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <div>
                <HomeTitle text="Stories" />
                <StoriesArray />
            </div>

            <div>
                <HomeTitle text="Trending" />
                <PostsArray />
            </div>
        </div>
    );
};

export default Home;