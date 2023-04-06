import { FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { Stack } from "react-bootstrap";
import { navigationItems } from "@app/config/navigationConfig";

const Navigation: FC = () => {
  return (
    <Stack direction="horizontal" gap={3} className={styles.container}>
      {navigationItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.href}
              style={{ textDecoration: "none", color: "#4299E1" }}
            >
              <span>{!item.icon && "@"}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </Stack>
  );
};
export default Navigation;

// <div className={styles.container}>
//   <ul>
//     <li>
//       <Link href={"#"}>
//         <span>@</span>
//         <span>Home</span>
//       </Link>
//     </li>
//     <li>
//       <Link href={"#"}>
//         <span>@</span>
//         <span>About</span>
//       </Link>
//     </li>
//     <li>
//       <Link href={"#"}>
//         <span>@</span>
//         <span>Products</span>
//       </Link>
//     </li>
//   </ul>
// </div>
