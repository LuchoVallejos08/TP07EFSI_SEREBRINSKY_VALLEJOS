// StoryName/StoryName.tsx
import type { StoryNameProps } from "../../../../../types/StoryNameProps";
import "./StoryName.css"

const StoryName = ({ username }: StoryNameProps) => {

    return (
        <div className="StoryName">
            <p>{username}</p>
        </div>
    )
}

export default StoryName