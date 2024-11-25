import styles from './index.module.css';
import React from 'react';
interface MainContentSectionProp {
  cover: string;
  description: string;
}

const MainContentSection = React.memo(
  ({ cover, description }: MainContentSectionProp) => {
    return (
      <>
        <div className={styles.mainContentSection}>
          <img
            className={styles.imgBook}
            src={cover}
            alt="image of the book "
          />
          <p className={styles.description}>{description}</p>
        </div>
      </>
    );
  }
);

export default MainContentSection;
