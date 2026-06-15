import { useState, useEffect } from "react"
import axios from "axios"
import Post from "./Post"
import PostModal from "./PostModal"
import type { PostData } from "../../../types/PostData"
import "./PostsArray.css"

const API_KEY = "live_D2QAMddCywb22GzCJdPxMeRTutHHBbKr6qMkDHZQt1lH1TmSd6Kc5ZQHNTz0MYDp"
const LIMIT = 10

const CAPTIONS = [
    "Un día perfecto ☀️",
    "Nuevas aventuras 🌍",
    "Momentos que quedan 📸",
    "Disfrutando la vida 🌿",
    "Vibes del finde 🔥",
]

const PostsArray = () => {
    const [posts, setPosts]     = useState<PostData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError]     = useState<string | null>(null)
    const [selectedPost, setSelectedPost] = useState<PostData | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersRes, catsRes] = await Promise.all([
                    axios.get(`https://dummyjson.com/users?limit=${LIMIT}`),
                    axios.get(`https://api.thecatapi.com/v1/images/search?limit=${LIMIT * 2}&api_key=${API_KEY}`)
                ])

                const usersData = usersRes.data
                const catsData  = catsRes.data

                const combined: PostData[] = usersData.users.map((user: any, index: number) => ({
                    id:             user.id.toString(),
                    user,
                    profilePicture: catsData[index].url,
                    image:          catsData[index + LIMIT].url,
                    caption:        CAPTIONS[index % CAPTIONS.length],
                    likes:          Math.floor(Math.random() * 5000) + 100,
                     liked:          false,   // ← nuevo
                    comments: [
                        "Qué buena foto!",
                        "Me encanta 😍",
                        "Genial 🔥",
                        "Increíble!",
                        "Que tierno 🥰",
                        "Gatitooo! 🐱",
                        "Quiero uno así!",
                        "Demasiado lindo 😻",
                        "¡Me derrito! 🧊",
                        "¡Es un amor! ❤️"
                    ]
                }))

                setPosts(combined)
            } catch (err) {
                setError((err as Error).message)
            } finally {
                setLoading(false)
            }

        }

        

        fetchData()
    }, [])

    if (loading) return <p>Cargando...</p>
    if (error)   return <p>Error: {error}</p>

    return (
    <div className="PostsArray">
        {posts.map((post) => (
            <Post key={post.id} post={post} onSelect={setSelectedPost} />
        ))}

        {selectedPost && (
            <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
    </div>
)
}

export default PostsArray