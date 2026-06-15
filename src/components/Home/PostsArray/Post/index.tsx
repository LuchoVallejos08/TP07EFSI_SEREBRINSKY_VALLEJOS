import PostPicture from "./PostPicture"
import PostFooter from "./PostFooter"
import type { PostData } from "../../../../types/PostData"
import "./Post.css"

type PostProps = {
    post: PostData
    onSelect: (post: PostData) => void
    onToggleLike: (postId: string) => void
}

const Post = ({ post, onSelect, onToggleLike }: PostProps) => {

    return (
        <div className="Post">
            <PostPicture image={post.image} onClick={() => onSelect(post)} />
            <PostFooter
                user={post.user}
                profilePicture={post.profilePicture}
                likes={post.likes}
                liked={post.liked}
                onToggleLike={() => onToggleLike(post.id)}
            />
        </div>
    )
}

export default Post