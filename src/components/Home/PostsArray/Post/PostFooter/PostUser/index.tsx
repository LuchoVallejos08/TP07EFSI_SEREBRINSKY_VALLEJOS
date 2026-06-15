import type { PostUserProps } from "../../../../../../types/PostUserProps"
import "./PostUser.css"

const PostUser = ({ user, profilePicture, variant = "feed" }: PostUserProps) => {

    return (
        <div className={`PostUser ${variant}`}>
            <img src={profilePicture} alt="Foto de perfil" className="ProfileImage" />
            <div>
                <h4>{user.firstName}</h4>
                <p>@{user.username}</p>
            </div>
        </div>
    )
}

export default PostUser