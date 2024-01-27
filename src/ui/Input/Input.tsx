import { PropsWithChildren, useState } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

const EyeIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M7.16196 3.39488C7.4329 3.35482 7.7124 3.33333 8.00028 3.33333C11.4036 3.33333 13.6369 6.33656 14.3871 7.52455C14.4779 7.66833 14.5233 7.74023 14.5488 7.85112C14.5678 7.93439 14.5678 8.06578 14.5487 8.14905C14.5233 8.25993 14.4776 8.3323 14.3861 8.47705C14.1862 8.79343 13.8814 9.23807 13.4777 9.7203M4.48288 4.47669C3.0415 5.45447 2.06297 6.81292 1.61407 7.52352C1.52286 7.66791 1.47725 7.74011 1.45183 7.85099C1.43273 7.93426 1.43272 8.06563 1.45181 8.14891C1.47722 8.25979 1.52262 8.33168 1.61342 8.47545C2.36369 9.66344 4.59694 12.6667 8.00028 12.6667C9.37255 12.6667 10.5546 12.1784 11.5259 11.5177M2.00028 2L14.0003 14M6.58606 6.58579C6.22413 6.94772 6.00028 7.44772 6.00028 8C6.00028 9.10457 6.89571 10 8.00028 10C8.55256 10 9.05256 9.77614 9.41449 9.41421"
        stroke="#98A2B3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ErrorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <g clip-path="url(#a)">
        <path
          stroke="#F04438"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33"
          d="M8 5.33V8m0 2.67h0M14.68 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

type Props = {
  label: string;
  name: string;
  type: "text" | "password";
  hasError?: boolean;
  value: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  name,
  type,
  hasError = false,
  value,
  onChange,
}: PropsWithChildren<Props>) {
  const [inputType, setInputType] = useState(type);

  const onEyeClick = () => {
    if (type === "password") {
      setInputType((value) => (value === "password" ? "text" : "password"));
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value ? e.target.value : '');
  };

  return (
    <div className={styles.root}>
      <label className={styles.labal}>{label}</label>
      <div className={styles.fld}>
        <input
          type={inputType}
          className={clsx(styles.input, { [styles.invalid]: hasError })}
          name={name}
          id={name}
          value={value}
          onChange={onInputChange}
        />
        {type === "password" && !hasError ? (
          <EyeIcon className={styles.eye} onClick={onEyeClick} />
        ) : null}
        {hasError ? <ErrorIcon className={styles.errorIcon} /> : null}
      </div>
      {hasError ? <p className={styles.error}>Пароль введён неверно</p> : null}
    </div>
  );
}

export default Input;
