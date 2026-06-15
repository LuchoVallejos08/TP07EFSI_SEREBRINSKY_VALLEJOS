import type { PostInfoProps } from "../../../../../types/PostInfoProps"
import "./PostInfo.css"
import like from "../../../../../assets/LikeDado.png"
import noLike from "../../../../../assets/LikeNoDado.png"
import comentario from "../../../../../assets/Comentario.png"
import privado from "../../../../../assets/Privado.png"
import { useState } from "react"

const PostInfo = ({ caption, likes, comments, user }: PostInfoProps) => {

    const [liked, setLiked] = useState(false)

    return (
        <div className="PostInfo">

            <div className="CaptionBlock">
                <span className="Username">{user.username}</span>
                <span className="CaptionText">{caption}</span>
            </div>

            <div className="Comments">
                {comments.map((comment, i) => (
                    <p key={i}>
                        <span className="Username">user_{i}</span> {comment}
                    </p>
                ))}
            </div>

            <div className="ModalActions">
                <button onClick={() => setLiked(!liked)}>
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