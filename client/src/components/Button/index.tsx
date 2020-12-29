import React from 'react';
import styles from './Button.module.css';

interface Props {
  text: string
  onClick: () => void
}
const Button = (props: Props) => {
  const { text, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick} > { text }</button>
  )
};

export default Button;