// Post/Post.tsx — ya no fetchea, solo distribuye
import PostPicture from "./PostPicture"
import PostInfo from "./PostInfo"
import type { CatPost } from "../../../../types/CatPost"

type PostProps = {
    post: CatPost
}

const Post = ({ post }: PostProps) => {

    return (
        <div className="Post">
            <PostPicture url={post.url} />
            <PostInfo breed={post.breeds[0]} />
        </div>
    )
}

export default Post