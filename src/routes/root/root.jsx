import { Link, Outlet } from "react-router-dom";
import styles from "./root.module.scss";
import { AiFillHome } from "react-icons/ai";
import SideBar from '../../components/sideBar/sideBar';

export default function Root() {
  return (
    <div className={styles.rootContainer}>
      <SideBar />
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  );
}
