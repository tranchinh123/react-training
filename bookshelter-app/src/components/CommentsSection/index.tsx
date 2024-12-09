import Dropdown from '../Icons/ArrowDown';
import Input from '../Input';
import Button from '../Button';
import { API } from '../../constants/api';
import { edit } from '../../services/api';
import { Comment } from '../../types';
import React, { useState, useRef, lazy, Suspense, useCallback } from 'react';
import { Book } from '../../types';
import styles from './index.module.css';
import { useToast } from '../../hooks/useToast';
import { ValidationErrors, validateForm } from '../../validator/validator';
import SkeletonCommentSection from '../Skeleton/SkeletonCommentSection';
import ErrorComponent from '../../error/ErrorComponent';
import ErrorBoundary from '../../error/ErrorBoundary';
import { areEqual } from '../../utils/areEqual';

const UserComments = lazy(() => import('../UserComment'));

interface BookProps {
  book: Book;
}

const CommentSection = React.memo(({ book }: BookProps) => {
  const [isShow, setIsShow] = useState(false);
  const [comments, setComments] = useState<Comment[]>(book.comments);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const handleShowComments = useCallback(() => {
    setIsShow((prev) => !prev);
  }, []);

  const handlePostComment = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrors({});

      const name = nameRef.current?.value || '';
      const comment = commentRef.current?.value || '';

      const newErrors = validateForm(name, comment);

      if (newErrors.name || newErrors.comment) {
        setErrors(newErrors);
        return;
      }

      const newCommentId = book.comments.length + 1;

      const newComment: Comment = {
        id: newCommentId,
        author: name,
        comment: comment,
      };

      const updatedComments = [...comments, newComment];
      setComments(updatedComments);

      try {
        const result = await edit(
          { ...book, comments: updatedComments },
          API.BOOKS_ENDPOINT,
          book.id
        );

        if (result && 'error' in result) {
          showToast('Failed to fetch data to get book', 'error');
        } else {
          showToast('Post comment success', 'success');
          if (nameRef.current) nameRef.current.value = '';
          if (commentRef.current) commentRef.current.value = '';
        }
      } catch (error) {
        console.error('Error adding comment:', error);
        showToast('An unexpected error occurred. Please try again.', 'error');
      }
    },
    [book, showToast]
  );

  return (
    <div className={styles.commentsSection}>
      <div className={styles.Comments} onClick={handleShowComments}>
        <p className={styles.headerComment}>Comments</p>
        <Dropdown />
      </div>

      {isShow && (
        <Suspense fallback={<SkeletonCommentSection />}>
          <div className={styles.userComments}>
            <ErrorBoundary fallback={<ErrorComponent />}>
              <UserComments comments={comments} />
            </ErrorBoundary>
          </div>
          <div className={styles.leaveComment}>
            <p className={styles.headerLeaveComment}>Leave a comment</p>
            <form
              className={styles.formComment}
              action="submit"
              onSubmit={handlePostComment}
            >
              <Input label="Name" ref={nameRef} />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}

              <Input label="Comment" ref={commentRef} />
              {errors.comment && (
                <span className={styles.error}>{errors.comment}</span>
              )}
              <Button />
            </form>
          </div>
        </Suspense>
      )}
    </div>
  );
}, areEqual);

export default CommentSection;
