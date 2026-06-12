// Story/Story.tsx
import StoryPicture from "./StoryPicture"
import StoryName from "./StoryName"

type StoryProps = {
    username: string
    avatar:   string
}

const Story = ({ username, avatar }: StoryProps) => {

    return (
        <div className="Story">
            <StoryPicture avatar={avatar} username={username} />
            <StoryName username={username} />
        </div>
    )
}

export default Story