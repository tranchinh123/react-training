import styles from './index.module.css';
import iconUser from '../../assets/images/iconUser.png';
import { Book } from '../../types';
interface BookProps {
  book: Book;
}
const UserComments = ({ book }: BookProps) => {
  return (
    <>
      <div className={styles.userComment}>
        <img src={iconUser} alt="iconUser" className={styles.avatar} />
        <div className={styles.Comments}>
          {book.comments.map((comment) => (
            <div key={comment.id}>
              <div className={styles.userName}>{comment.author}</div>
              <div className={styles.comment}>{comment.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default UserComments;
