// PostActions.tsx
import { useState } from "react"
import type { PostActionsProps } from "../../../../../../types/PostActionsProps"

import like from "../../../../../../assets/LikeDado.png"
import noLike from "../../../../../../assets/LikeNoDado.png"
import comentario from "../../../../../../assets/Comentario.png"
import privado from "../../../../../../assets/Privado.png"
import "./PostActions.css"

const PostActions = ({ likes }: PostActionsProps) => {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }

    return (
        <div className="PostActions">
            <button onClick={handleLike}>
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