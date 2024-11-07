import Dropdown from '../Icons/ArrowDown';
import UserComments from '../UserComment';
import Input from '../Input';
import Button from '../Button';
import { API } from '../../constants/api';
import { edit } from '../../services/api';
import { Comment } from '../../types';
import { useState, useRef } from 'react';
import { Book } from '../../types';
import styles from './index.module.css';
import { useToast } from '../../contexts/ToastContext';

interface BookProps {
  book: Book;
}

const CommentSection = ({ book }: BookProps) => {
  const [isShow, setIsShow] = useState(false);
  const [comments, setComments] = useState<Comment[]>(book.comments);
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const handleShowComments = () => {
    setIsShow((prev) => !prev);
  };

  const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCommentId = book.comments.length + 1;

    const newComment: Comment = {
      id: newCommentId,
      author: nameRef.current?.value || '',
      comment: commentRef.current?.value || '',
    };

    setComments((prevComments) => [...prevComments, newComment]);
    book.comments.push(newComment);

    try {
      await edit(book, API.BOOKS_ENDPOINT, book.id, showToast);
      if (nameRef.current) nameRef.current.value = '';
      if (commentRef.current) commentRef.current.value = '';
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  console.log(comments);

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
              <Input label="Name" ref={nameRef} />
              <Input label="Comment" ref={commentRef} />
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
