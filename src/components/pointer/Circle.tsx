import {
  FC,
  ReactHTMLElement,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { gsap } from "gsap";
import styles from "./circle.module.scss";

interface ICircle {
  // ref: React.ComponentPropsWithRef<Ref>;
  delay: number;
  size: string;
}
export type Ref = any;
const Circle = forwardRef<Ref, ICircle>((props, ref) => {
  const el = useRef<any>();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x: number, y: number) {
          gsap.to(el.current, { x, y });
        },
      };
    },
    [props.delay]
  );

  return <div className={`${styles.circle} ${props.size}`} ref={el}></div>;
});

export default Circle;
