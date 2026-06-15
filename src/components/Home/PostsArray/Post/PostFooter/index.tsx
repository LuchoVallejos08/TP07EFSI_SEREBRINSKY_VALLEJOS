import PostUser from "./PostUser"
import PostActions from "./PostActions"
import type { PostFooterProps } from "../../../../../types/PostFooterProps"
import "./PostFooter.css"



const PostFooter = ({ user, profilePicture, likes }: PostFooterProps) => {

    return (
        <div className="PostFooter">
            <PostUser user={user} profilePicture={profilePicture} />
            <PostActions likes={likes} />
        </div>
    )
}

export default PostFooter