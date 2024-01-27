import { PropsWithChildren } from 'react'
import styles from "./Title.module.css";

const Title = ({ children }: PropsWithChildren)  => {
  return <h1 className={styles.root}>{ children }</h1>;
};

export default Title;
