import type { User } from "./User"
import type { Comment } from "./PostData"

export type PostInfoProps = {
    caption: string
    likes: number
    liked: boolean
    comments: Comment[]
    user: User
    onToggleLike: () => void
}