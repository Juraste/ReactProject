import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Comments from '../Comments';

const CommentList = () => {
  const { comments } = useSelector((selector: RootState) => selector.comment);
  useEffect(() => {}, [comments]);

  return (
    <div>
      {comments.map((item, index) => {
        <Comments
          key={index}
          userName={item.userName}
          commentText={item.commentText}
        />;
      })}
    </div>
  );
};

export default CommentList;
