import type { PostPictureProps } from "../../../../../types/PostPictureProps"

const PostPicture = ({ url }: PostPictureProps) => {

    return (
        <div className="PostPicture">
            <img src={url} alt="cat post" />
        </div>
    )
}

export default PostPicture