// types/PostInfoProps.ts
import type { User } from "./User"

export type PostInfoProps = {
    caption: string
    likes: number
    comments: string[]
    user: User
}