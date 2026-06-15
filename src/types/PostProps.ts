import type { PostData } from "./PostData"

export type PostProps = {
    post: PostData
    onSelect: (post: PostData) => void
}