import PostUser from "../Post/PostFooter/PostUser"
import PostInfo from "./PostInfo"
import type { PostModalProps } from "../../../../types/PostModalProps"
import "./PostModal.css"

const PostModal = ({ post, onClose, onToggleLike }: PostModalProps) => {

    return (
        <div className="ModalOverlay" onClick={onClose}>
            <div className="ModalContent" onClick={(e) => e.stopPropagation()}>

                <img src={post.image} alt="Post ampliado" className="ModalImage" />

                <div className="ModalDetails">

                    <div className="ModalHeader">
                        <PostUser user={post.user} profilePicture={post.profilePicture} variant="modal" />
                        <button className="CloseButton" onClick={onClose}>✕</button>
                    </div>

                    <PostInfo
                        caption={post.caption}
                        likes={post.likes}
                        liked={post.liked}
                        comments={post.comments}
                        user={post.user}
                        onToggleLike={() => onToggleLike(post.id)}
                    />

                </div>

            </div>
        </div>
    )
}

export default PostModal