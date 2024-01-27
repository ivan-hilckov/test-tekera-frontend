import { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type Props = {
  color: "default" | "danger";
  disabled: boolean;
  onClick?: () => void;
};

function Button({
  color,
  disabled,
  children,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={clsx(styles.root, {
        [styles.default]: color === "default",
        [styles.danger]: color === "danger",
      })}
      onClick={onClick}
      disabled={disabled}
      type={'submit'}
    >
      {children}
    </button>
  );
}

export default Button;
