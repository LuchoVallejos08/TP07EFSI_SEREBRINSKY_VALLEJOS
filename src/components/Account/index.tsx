import type { AccountProps } from "../../types/AccountProps"
import "./Account.css"

const Account = ({ posts }: AccountProps) => {

    const profilePosts = posts.slice(0, 6)
    console.log(posts)
    console.log("ACCOUNT:", posts.length)
    return (
        <div className="Account">

            <div className="AccountHeader">

                <img
                    src={posts[0]?.profilePicture}
                    alt="Profile"
                    className="ProfilePicture"
                />

                <div className="AccountInfo">

                    <div className="TopRow">
                        <h2>@nao_sere</h2>

                        <button className="EditButton">
                            Editar perfil
                        </button>

                        <button className="SettingsButton">
                            ⚙
                        </button>
                    </div>

                    <div className="Stats">
                        <span>
                            <strong>{profilePosts.length}</strong> publicaciones
                        </span>

                        <span>
                            <strong>121k</strong> seguidores
                        </span>

                        <span>
                            <strong>900</strong> seguidos
                        </span>
                    </div>

                    <div className="Bio">
                        <h4>Nao Sere</h4>

                        <p>
                            📸 Fotografía
                        </p>

                        <p>
                            🌎 Buenos Aires
                        </p>

                        <p>
                            ✨ Capturando momentos desde React
                        </p>
                    </div>

                </div>

            </div>

            <hr />

            <div className="PostsGrid">

                {profilePosts.map((post) => (
                    <img
                        key={post.id}
                        src={post.image}
                        alt={post.caption}
                        className="PostImage"
                    />
                ))}

            </div>

        </div>
    )
}

export default Account