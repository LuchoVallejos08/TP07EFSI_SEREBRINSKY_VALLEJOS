import { useState } from "react";

import like from "../../../../../../assets/LikeDado.png";
import noLike from "../../../../../../assets/LikeNoDado.png";
import comentario from "../../../../../../assets/Comentario.png";
import privado from "../../../../../../assets/Privado.png";

const PostActions = () => {

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <button onClick={handleLike}>
                <img src={liked ? like : noLike} alt="Like" />
            </button>

            <button>
                <img src={comentario} alt="Comentarios" />
            </button>

            <button>
                <img src={privado} alt="Enviar mensaje" />
            </button>
        </div>
    );
};

export default PostActions;