import type { PostActionsProps } from "../../../../../../types/PostActionsProps"

import like from "../../../../../../assets/LikeDado.png"
import noLike from "../../../../../../assets/LikeNoDado.png"
import comentario from "../../../../../../assets/Comentario.png"
import privado from "../../../../../../assets/Privado.png"
import "./PostActions.css"

const PostActions = ({ likes, liked, onToggleLike }: PostActionsProps) => {

    return (
        <div className="PostActions">
            <button onClick={onToggleLike}>
                <img src={liked ? like : noLike} alt="Like" />
            </button>

            <button>
                <img src={comentario} alt="Comentarios" />
            </button>

            <button>
                <img src={privado} alt="Enviar mensaje" />
            </button>

            <p className="LikesCount">{likes.toLocaleString()} likes</p>
        </div>
    )
}

export default PostActions