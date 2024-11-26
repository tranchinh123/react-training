import React from 'react';
import styles from './index.module.css';
import iconUser from '../../assets/images/iconUser.png';
import { Comment } from '../../types';
import isEqual from 'react-fast-compare';

interface CommentProps {
  comments: Comment[];
}

const areEqual = (prevProps: CommentProps, nextProps: CommentProps) => {
  return isEqual(prevProps.comments, nextProps.comments);
};

const UserComments = React.memo(({ comments }: CommentProps) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className={styles.userComment}>
          <div className={styles.Comments}>
            <img src={iconUser} alt="iconUser" className={styles.avatar} />
            <div>
              <div className={styles.userName}>{comment.author}</div>
              <div className={styles.comment}>{comment.comment}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}, areEqual);

export default UserComments;
