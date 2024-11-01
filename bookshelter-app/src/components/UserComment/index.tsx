import styles from './index.module.css';
const UserComments = () => {
  return (
    <>
      <div className={styles.userComment}>
        <img src="../src/images/iconUser.pgn" alt="" />
        <div className={styles.userName}>David</div>
        <div className={styles.comment}>
          Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum
        </div>
      </div>
    </>
  );
};
export default UserComments;
