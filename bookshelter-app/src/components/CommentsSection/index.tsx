import Dropdown from '../Icons/ArrowDown';
import UserComments from '../UserComment';
import Input from '../Input';
import Button from '../Button';
import { API } from '../../constants/api';
import { edit } from '../../services/api';
import { Comment } from '../../types';
import { useState } from 'react';
import { Book } from '../../types';
import styles from './index.module.css';

interface BookProps {
  book: Book;
}

const CommentSection = ({ book }: BookProps) => {
  const [isShow, setIsShow] = useState(false);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  const handleShowComments = () => {
    setIsShow((prev) => !prev);
  };

  const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCommentId = book.comments.length + 1;
    const newComment: Comment = {
      id: newCommentId,
      author: name,
      comment: comment,
    };

    book.comments.push(newComment);

    try {
      await edit(book, API.BOOKS_ENDPOINT, book.id);
      setName('');
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  console.log(book);

  return (
    <div className={styles.commentsSection}>
      <div className={styles.Comments} onClick={handleShowComments}>
        <p className={styles.headerComment}>Comments</p>
        <Dropdown />
      </div>

      {isShow ? (
        <>
          <div className={styles.userComments}>
            <UserComments book={book} />
          </div>
          <div className={styles.leaveComment}>
            <p className={styles.headerLeaveComment}>Leave a comment</p>
            <form
              className={styles.formComment}
              action="submit"
              onSubmit={handlePostComment}
            >
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button />
            </form>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export default CommentSection;
