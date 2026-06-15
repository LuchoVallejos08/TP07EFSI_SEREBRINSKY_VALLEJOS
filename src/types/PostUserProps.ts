import type { User } from "./User"

export type PostUserProps = {
    user: User
    profilePicture: string
    variant?: "feed" | "modal"
}