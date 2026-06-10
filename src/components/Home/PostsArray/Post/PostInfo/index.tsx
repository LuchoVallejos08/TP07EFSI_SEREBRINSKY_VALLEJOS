import type { PostInfoProps } from "../../../../../types/PostInfoProps"

const PostInfo = ({ breed }: PostInfoProps) => {

    if (!breed) return <p>Sin información de raza</p>

    return (
        <div className="PostInfo">
            <h3>{breed.name}</h3>
            <p>{breed.description}</p>
        </div>
    )
}

export default PostInfo