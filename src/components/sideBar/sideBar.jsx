import React from "react";
import styles from './sideBar.module.scss';
import Button from "../../components/button/button";

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.logoContainer}>
        <p> PROJSA </p>
      </div>
      <div className={styles.navButtonsContainer}>
        <Button title="Home" route="" />
        <Button title="Discover" route="Discover" />
      </div>
    </div>
  );
}
