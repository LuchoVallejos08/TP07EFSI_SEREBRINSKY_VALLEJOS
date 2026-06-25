import type { AccountProps } from "../../types/AccountProps"
import "./Account.css"
import logoPerfil from '../../assets/mujer.jfif'

import { useState } from "react"
import PostModal from "../Home/PostsArray/PostModal"
import type { PostData } from "../../types/PostData"

const Account = ({ posts }: AccountProps) => {

    
    const profilePosts = posts.slice(0, 9)
    console.log(posts)
    console.log("ACCOUNT:", posts.length)

    const [selectedPost, setSelectedPost] = useState<PostData | null>(null)

    return (
        <div className="Account">

            <div className="AccountHeader">

                <img
                    src={logoPerfil}
                    alt="Profile"
                    className="ProfilePicture"
                />

                <div className="ProfileInfo">

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
                            <strong>12M</strong> seguidores
                        </span>

                        <span>
                            <strong>900</strong> seguidos
                        </span>
                    </div>

                    <div className="Bio">
                        <h4>Nao Sere</h4>

                        <p>
                            Amo EFSI ❤️❤️❤️
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
                    onClick={() => setSelectedPost(post)}
                />
                ))}

            </div>

            {selectedPost && (
    <PostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onToggleLike={() => {}}
    />
)}

        </div>
    )
}

export default Account