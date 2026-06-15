import type { User } from "../../../../../../types/User"
import "./PostUser.css"

type PostUserProps = {
    user: User
    profilePicture: string
}

const PostUser = ({ user, profilePicture }: PostUserProps) => {

    return (
        <div className="PostUser">
            <img src={profilePicture} alt="Foto de perfil" className="ProfileImage" />
            <div>
                <h4>{user.firstName}</h4>
                <p>@{user.username}</p>
            </div>
        </div>
    )
}

export default PostUser