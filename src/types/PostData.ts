// types/PostData.ts
import type { User } from "./User"

export type PostData = {
    id: string
    user: User
    profilePicture: string
    image: string
    caption: string
    likes: number
    comments: string[]
}