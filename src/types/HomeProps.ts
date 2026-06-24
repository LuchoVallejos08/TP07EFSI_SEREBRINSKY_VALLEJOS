import type { PostData } from "./PostData"
import type { Dispatch, SetStateAction } from "react"

export type HomeProps = {
    posts: PostData[]
    setPosts: Dispatch<SetStateAction<PostData[]>>
    
}