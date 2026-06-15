// types/PostModalProps.ts
import type { PostData } from "./PostData"

export type PostModalProps = {
    post: PostData
    onClose: () => void
}