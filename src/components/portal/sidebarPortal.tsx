import { createPortal } from "react-dom";
import styles from "./index.module.scss";
import { ReactNode } from "react";

interface SidebarPortalProps {
  children: ReactNode;
  onClick: () => void;
}

// const Overlay = ({onClick}) => {
//   return (
//     <Card className={modal}>
//       <header className={header}>
//         <h2>{props.title}</h2>
//       </header>
//       <div className={content}>
//         <p>{props.message}</p>
//       </div>
//     </Card>
//   );
// };
// const Backdrop = ({ onClick }: () => any) => {
//   return <div className={styles.backdrop} onClick={onClick} />;
// };

export const SidebarPortal = (props: SidebarPortalProps) => {
  //   createPortal(
  //     // <div className={styles.overlay}>
  //     //   {props.children}
  //     //   {/* {props.onClick} */}
  //     //   {/* <div></div> */}
  //     // </div>,
  //     // document.getElementById<HTMLElement>("overlay")
  //     <Overlay
  //       onClick={props.onClick}
  //     />,
  //     document.getElementById("overlay")
  //   );
  return (
    <>
      {createPortal(
        <div className={styles.overlay}>{props.children}</div>,
        document.getElementById("sidebar")!
      )}
      {createPortal(
        <div className={styles.backdrop} onClick={props.onClick} />,
        document.getElementById("backdrop")!
      )}
    </>
  );
};
