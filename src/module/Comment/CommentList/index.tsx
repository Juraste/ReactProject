import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Comments from "../Comments";

const CommentList = () => {
    const { comments, commentId } = useSelector((selector: RootState) => selector.comment);
    useEffect(() => {
        if (comments.length > 1) {
            comments.shift();
        }
    }, [comments]);

    return (
        <div>
            {comments.map((item) => {
                <Comments
                    key={commentId}
                    userName={item.userName}
                    commentText={item.commentText} />
            })}
        </div>
    );
}

export default CommentList;