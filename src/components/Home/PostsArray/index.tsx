// PostsArray.tsx
import { useState, useEffect } from "react"
import Post from "./Post"
import type { CatPost } from "../../../types/CatPost"

const API_KEY = "live_D2QAMddCywb22GzCJdPxMeRTutHHBbKr6qMkDHZQt1lH1TmSd6Kc5ZQHNTz0MYDp"

const PostsArray = () => {
    const [posts, setPosts]     = useState<CatPost[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError]     = useState<string | null>(null)

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const res = await fetch(
                    "https://api.thecatapi.com/v1/images/search?limit=9&has_breeds=1",
                    { headers: { "x-api-key": API_KEY } }
                )
                if (!res.ok) throw new Error("Error al obtener los datos")
                const data: CatPost[] = await res.json()
                setPosts(data)
            } catch (err) {
                setError((err as Error).message)
            } finally {
                setLoading(false)
            }
        }

        fetchCats()
    }, [])

    if (loading) return <p>Cargando...</p>
    if (error)   return <p>Error: {error}</p>

    return (
        <div className="PostsArray">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostsArray