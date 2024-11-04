import styles from './index.module.css';
import iconUser from '../../assets/images/iconUser.png';
import { Book } from '../../types';
interface CommentProps {
  book: Book;
}
const UserComments = ({ book }: CommentProps) => {
  return (
    <>
      {book.comments.map((comment) => (
        <div className={styles.userComment}>
          <div className={styles.Comments}>
            <img src={iconUser} alt="iconUser" className={styles.avatar} />
            <div key={comment.id}>
              <div className={styles.userName}>{comment.author}</div>
              <div className={styles.comment}>{comment.comment}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default UserComments;
