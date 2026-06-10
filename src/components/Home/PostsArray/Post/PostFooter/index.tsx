import PostInfo from "./PostInfo";
import PostActions from "./PostActions";

import type { PostInfoProps } from "../../../../../types/PostInfoProps";

const PostFooter = ({ breed }: PostInfoProps) => {

    return (
        <div className="PostFooter">
            <PostActions />
            <PostInfo breed={breed} />
        </div>
    );
};

export default PostFooter;