import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BiSearch, BiSearchAlt} from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import styles from "./button.module.scss";


export default function Button({ route, title }) {
  const location = useLocation();
  const pathName = location.pathname;
  const isSelected = pathName == ("/" + route);

  const handleButtonIcon = () => {
    switch (title) {
      case "Home":
        return isSelected ? <AiFillHome size={24} /> : <AiOutlineHome size={24} />;
        break;
      case "Discover":
        return isSelected ? <BiSearchAlt size={24} /> : <BiSearch size={24} />;
      default:
        return <AiFillHome size={24} />;
        break;
    }
  }


  return (
    <div className={styles.navButtonContainer}>
      <div className={styles.navButtonIconContainer}>{handleButtonIcon()}</div>
      <div className={styles.navButtonTextContainer}>
        <Link to={route} className={`${styles.navButtonText} ${isSelected ? styles.navButtonSelectedText : null}`}> {title} </Link>
      </div>
    </div>
  );
}
