import PostPicture from "./PostPicture"
import PostFooter from "./PostFooter"
import type { PostData } from "../../../../types/PostData"
import "./Post.css"

type PostProps = {
    post: PostData
    onSelect: (post: PostData) => void
}

const Post = ({ post, onSelect }: PostProps) => {

    return (
        <div className="Post">
            <PostPicture image={post.image} onClick={() => onSelect(post)} />
            <PostFooter
                user={post.user}
                profilePicture={post.profilePicture}
                likes={post.likes}
            />
        </div>
    )
}

export default Post