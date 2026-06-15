import type { User } from "./User"

export type PostFooterProps = {
    user: User
    profilePicture: string
    likes: number
    liked: boolean
    onToggleLike: () => void
}