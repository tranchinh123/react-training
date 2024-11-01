import Dropdown from '../Icons/ArrowDown';
import UserComments from '../UserComment';
import Input from '../Input';
import { useState } from 'react';
import styles from './index.module.css';

const CommentSection = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowComments = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <div className={styles.commentsSection}>
      <div className={styles.Comments} onClick={handleShowComments}>
        <p className={styles.headerComment}>Comments</p>
        <Dropdown />
      </div>

      {isShow ? (
        <>
          <div className={styles.userComments}>
            <UserComments />
          </div>
          <div className={styles.leaveComment}>
            <p className={styles.headerLeaveComment}>Leave a comment</p>
            <Input />
            <Input />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export default CommentSection;
