import type { PostData } from "./PostData"

export type PostModalProps = {
    post: PostData
    onClose: () => void
    onToggleLike: (postId: string) => void
}