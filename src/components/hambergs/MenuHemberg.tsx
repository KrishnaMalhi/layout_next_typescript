// import { useDispatch } from "react-redux";
import { useAppDispatch } from "@app/store/hooks";
import styles from "./menuHemburg.module.scss";
import { AppActions } from "@app/store/slices/app.slice";

const MenuHemberg = () => {
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(AppActions.toggleSidebar());
  };

  return (
    <div className={styles.container} onClick={handleToggle}>
      <div className={`${styles.line_1}`}></div>
      <div className={`${styles.line_2}`}></div>
      <div className={`${styles.line_3}`}></div>
    </div>
  );
};
export default MenuHemberg;
