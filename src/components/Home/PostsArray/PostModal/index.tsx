import PostUser from "../Post/PostFooter/PostUser"
import PostInfo from "./PostInfo"
import type { PostModalProps } from "../../../../types/PostModalProps"
import "./PostModal.css"

const PostModal = ({ post, onClose }: PostModalProps) => {

    return (
        <div className="ModalOverlay" onClick={onClose}>
            <div className="ModalContent" onClick={(e) => e.stopPropagation()}>

                <img src={post.image} alt="Post ampliado" className="ModalImage" />

                <div className="ModalDetails">

                    <div className="ModalHeader">
                        <PostUser user={post.user} profilePicture={post.profilePicture} />
                        <button className="CloseButton" onClick={onClose}>✕</button>
                    </div>

                    <PostInfo
                        caption={post.caption}
                        likes={post.likes}
                        comments={post.comments}
                        user={post.user}
                    />

                </div>

            </div>
        </div>
    )
}

export default PostModal