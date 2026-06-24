import { useState, useEffect } from "react"
import axios from "axios"
import Post from "./Post"
import PostModal from "./PostModal"
import type { PostData } from "../../../types/PostData"
import "./PostsArray.css"

const API_KEY = "live_D2QAMddCywb22GzCJdPxMeRTutHHBbKr6qMkDHZQt1lH1TmSd6Kc5ZQHNTz0MYDp"
const LIMIT = 30

const CAPTIONS = [
    "Un día perfecto ☀️",
    "Nuevas aventuras 🌍",
    "Momentos que quedan 📸",
    "Disfrutando la vida 🌿",
    "Vibes del finde 🔥",
    "Gatito del día 🐱",
    "Alguien dijo miau? 😻",
    "Día de relax 🧘‍♂️",
    "Feliz como un gato 🐾",
    "¡Pura ternura! 🥰",
    "Amor gatuno ❤️",
    "Gatito explorador 🐈",
]

const COMMENT_TEXTS = [
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

const PostsArray = ({posts, setPosts}) => {
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
                const allUsers  = usersData.users

                const combined: PostData[] = allUsers.map((user: any, index: number) => {

                    const commenters = allUsers.filter((u: any) => u.id !== user.id)

                    const comments = COMMENT_TEXTS.map((text, i) => ({
                        username: commenters[i % commenters.length].username,
                        text
                    }))

                    return {
                        id:             user.id.toString(),
                        user,
                        profilePicture: catsData[index].url,
                        image:          catsData[index + LIMIT].url,
                        caption:        CAPTIONS[index % CAPTIONS.length],
                        likes:          Math.floor(Math.random() * 5000) + 100,
                        liked:          false,
                        comments
                    }
                })

                setPosts(combined)
            } catch (err) {
                setError((err as Error).message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleToggleLike = (postId: string) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? {
                        ...post,
                        liked: !post.liked,
                        likes: post.liked ? post.likes - 1 : post.likes + 1
                      }
                    : post
            )
        )

        setSelectedPost((prevSelected) =>
            prevSelected && prevSelected.id === postId
                ? {
                    ...prevSelected,
                    liked: !prevSelected.liked,
                    likes: prevSelected.liked ? prevSelected.likes - 1 : prevSelected.likes + 1
                  }
                : prevSelected
        )
    }

    if (loading) return <p>Cargando...</p>
    if (error)   return <p>Error: {error}</p>

    return (
        <div className="PostsArray">
            {posts.map((post) => (
                <Post key={post.id} post={post} onSelect={setSelectedPost} onToggleLike={handleToggleLike} />
            ))}

            {selectedPost && (
                <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} onToggleLike={handleToggleLike} />
            )}
        </div>
    )
}

export default PostsArray