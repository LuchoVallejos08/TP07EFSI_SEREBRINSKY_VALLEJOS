import { useState, useEffect } from "react"
import axios from "axios"
import Story from "./Story"
import "./StoriesArray.css"

const API_KEY = "live_D2QAMddCywb22GzCJdPxMeRTutHHBbKr6qMkDHZQt1lH1TmSd6Kc5ZQHNTz0MYDp"
const LIMIT = 30

type StoryData = {
    id: string
    username: string
    avatar: string
}

const StoriesArray = () => {
    const [stories, setStories] = useState<StoryData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError]     = useState<string | null>(null)

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const [usersRes, catsRes] = await Promise.all([
                    axios.get(`https://dummyjson.com/users?limit=${LIMIT}`),
                    axios.get(`https://api.thecatapi.com/v1/images/search?limit=${LIMIT}&api_key=${API_KEY}`)
                ])

                const usersData = usersRes.data
                const catsData  = catsRes.data

                const combined: StoryData[] = usersData.users.map((user: any, index: number) => ({
                    id:       user.id.toString(),
                    username: `@${user.username}`,
                    avatar:   catsData[index].url
                }))

                setStories(combined)
            } catch (err) {
                setError((err as Error).message)
            } finally {
                setLoading(false)
            }
        }

        fetchStories()
    }, [])

    if (loading) return <p>Cargando...</p>
    if (error)   return <p>Error: {error}</p>

    return (
        <div className="StoriesArray">
            {stories.map((story) => (
                <Story key={story.id} username={story.username} avatar={story.avatar} />
            ))}
        </div>
    )
}

export default StoriesArray