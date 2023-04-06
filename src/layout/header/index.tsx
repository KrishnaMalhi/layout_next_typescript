import { FC, useCallback, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import styles from "./index.module.scss";
import Navigation from "../navigation";
import MenuHemberg from "@app/components/hambergs/MenuHemberg";

const Header: FC = () => {
  const [scrollY, setScrollY] = useState(false);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY > 140) {
      console.log(scrollY);
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [scrollY]);

  return (
    <div
      className={`${styles.container} ${scrollY && styles["scroll-action"]}`}
    >
      <Stack direction="horizontal" gap={3}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height="60"
            fill="currentColor"
            color="#4299E1"
            className="bi bi-cpu-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
          </svg>
        </div>
        <div className="ms-auto">
          <Navigation />
        </div>
        <div className="vr" />
        <div className={styles.toggleBtn}>
          <MenuHemberg />
        </div>
      </Stack>
    </div>
  );
};
export default Header;
