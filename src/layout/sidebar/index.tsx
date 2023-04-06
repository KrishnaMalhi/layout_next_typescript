import { SidebarPortal } from "@app/components/portal/sidebarPortal";
// import {(AnimatePresence, motion, useCycle)} from "framer-motion";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { AppActions } from "@app/store/slices/app.slice";
import styles from "./index.module.scss";
import { motion, useCycle } from "framer-motion";
import { navigationItems } from "@app/config/navigationConfig";
// import Link from "next/link";
// import MenuHemberg from "@app/components/hambergs/MenuHemberg";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const showSidebar = useAppSelector((state) => state.app.showSidebar);

  const [open, cycleOpen] = useCycle<Boolean>(false, true);

  const handlePortal = () => {
    dispatch(AppActions.toggleSidebar());
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };
  const handleCycle = () => {
    cycleOpen();
    setTimeout(() => {
      handlePortal;
    }, 500);
  };
  return (
    <>
      <SidebarPortal onClick={handlePortal}>
        {/* <div className={`${styles.container}`}>asdf as</div> */}
        <main className={styles.main}>
          {showSidebar && (
            <motion.aside
              className={styles.aside}
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                className={styles.container}
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {navigationItems.map((item, index) => {
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                    >
                      {item.label}
                    </motion.a>
                    // <li key={index}>
                    //   <Link
                    //     href={item.href}
                    //     style={{ textDecoration: "none", color: "#fff" }}
                    //   >
                    //     <span>{!item.icon && "@"}</span>
                    //     <span>{item.label}</span>
                    //   </Link>
                    // </li>
                  );
                })}
              </motion.div>
            </motion.aside>
          )}
          {/* <div className={styles.toggleBtn}>
            <MenuHemberg />
          </div> */}
          <div className={styles["btn-container"]}>
            <button onClick={handleCycle}>{open ? "Close" : "Open"}</button>
          </div>
        </main>
      </SidebarPortal>
    </>
  );
};
export default Sidebar;
