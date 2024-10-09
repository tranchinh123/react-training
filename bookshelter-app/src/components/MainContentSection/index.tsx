import styles from './index.module.css';

interface MainContentSectionProp {
  cover: string;
  description: string;
}

const MainContentSection = ({ cover, description }: MainContentSectionProp) => {
  return (
    <div className={styles.mainContent}>
      <img className={styles.imgBook} src={cover} alt="image of the book " />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MainContentSection;
