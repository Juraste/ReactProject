import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { comment } from '../../../model/comment';
import { RootState } from '../../../store';
import Comments from '../Comments';

const CommentList = () => {
  const { comments } = useSelector((selector: RootState) => selector.comment);

  return (
    <div>
      {comments.map((item, index) => {
        return (
          <Comments
            key={index}
            userName={item.userName}
            commentText={item.commentText}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
