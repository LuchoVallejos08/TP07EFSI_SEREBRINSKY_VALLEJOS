// Post/Post.tsx — ya no fetchea, solo distribuye
import PostPicture from "./PostPicture"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import type { CatPost } from "../../../../types/CatPost"

type PostProps = {
    post: CatPost
}

const Post = ({ post }: PostProps) => {

    return (
        <div className="Post">
            <PostHeader />
            <PostPicture url={post.url} />
            <PostFooter breed={post.breeds[0]} />        
            </div>
    )
}

export default Post