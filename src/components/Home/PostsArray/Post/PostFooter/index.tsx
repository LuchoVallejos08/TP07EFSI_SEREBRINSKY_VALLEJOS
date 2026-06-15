import PostUser from "./PostUser"
import PostActions from "./PostActions"
import type { PostFooterProps } from "../../../../../types/PostFooterProps"
import "./PostFooter.css"

const PostFooter = ({ user, profilePicture, likes, liked, onToggleLike }: PostFooterProps) => {

    return (
        <div className="PostFooter">
            <PostUser user={user} profilePicture={profilePicture} />
            <PostActions likes={likes} liked={liked} onToggleLike={onToggleLike} />
        </div>
    )
}

export default PostFooter