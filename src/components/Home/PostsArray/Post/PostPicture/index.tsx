// PostPicture.tsx
import type { PostPictureProps } from "../../../../../types/PostPictureProps"
import "./PostPicture.css"

const PostPicture = ({ image, onClick }: PostPictureProps) => {

    return (
        <div className="PostPicture" onClick={onClick}>
            <img src={image} alt="cat post" />
        </div>
    )
}

export default PostPicture