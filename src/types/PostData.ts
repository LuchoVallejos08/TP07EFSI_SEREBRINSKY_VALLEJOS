import type { User } from "./User"

export type Comment = {
    username: string
    text: string
}

export type PostData = {
    id: string
    user: User
    profilePicture: string
    image: string
    caption: string
    likes: number
    liked: boolean
    comments: Comment[]
}