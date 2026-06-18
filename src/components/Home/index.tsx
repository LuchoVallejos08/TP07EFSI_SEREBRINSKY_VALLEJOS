import HomeTitle from "./HomeTitle";
import StoriesArray from "./StoriesArray";
import PostsArray from "./PostsArray";
import "./Home.css";
import type { HomeProps } from "../../types/HomeProps"

const Home = ({ posts, setPosts }: HomeProps) => {
    return (
        <div className="Home">
            <div>
                <HomeTitle text="Stories" />
                <StoriesArray />
            </div>

            <div>
                <HomeTitle text="Trending" />
                <PostsArray posts={posts} setPosts={setPosts}/>
            </div>
        </div>
    );
};

export default Home;