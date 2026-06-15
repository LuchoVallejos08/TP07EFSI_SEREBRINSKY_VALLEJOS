// StoryPicture/StoryPicture.tsx
import type { StoryPictureProps } from "../../../../../types/StoryPictureProps";
import "./StoryPicture.css"

const StoryPicture = ({ avatar, username }: StoryPictureProps) => {

    return (
        <div className="StoryPicture">
            <img src={avatar} alt={username} />
        </div>
    )
}

export default StoryPicture