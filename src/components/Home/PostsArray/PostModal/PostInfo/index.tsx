import type { PostInfoProps } from "../../../../../types/PostInfoProps"
import "./PostInfo.css"
import like from "../../../../../assets/LikeDado.png"
import noLike from "../../../../../assets/LikeNoDado.png"
import comentario from "../../../../../assets/Comentario.png"
import privado from "../../../../../assets/Privado.png"

const PostInfo = ({ caption, likes, liked, comments, user, onToggleLike }: PostInfoProps) => {

    return (
        <div className="PostInfo">

            <div className="CaptionBlock">
                <span className="Username AuthorUsername">{user.username}</span>
                <span className="CaptionText">{caption}</span>
            </div>

            <div className="Comments">
                {comments.map((comment, i) => (
                    <p key={i}>
                        <span className="Username">{comment.username}</span> {comment.text}
                    </p>
                ))}
            </div>

            <div className="ModalActions">
                <button onClick={onToggleLike}>
                    <img src={liked ? like : noLike} alt="Like" />
                </button>
                <button>
                    <img src={comentario} alt="Comentarios" />
                </button>
                <button>
                    <img src={privado} alt="Enviar mensaje" />
                </button>
            </div>

            <p className="LikesCount">{likes.toLocaleString()} Me gusta</p>

        </div>
    )
}

export default PostInfo