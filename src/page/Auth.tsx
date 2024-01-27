import { useState } from "react";
import { useCookies } from "react-cookie";
import Title from "ui/Title/Title";
import Input from "ui/Input/Input";
import Button from "ui/Button/Button";
import styles from "./Auth.module.css";

function Auth() {
  const [cookies, setCookie] = useCookies(["auth"]);
  const [phone, setPhone] = useState("+79999000012");
  const [password, setPassword] = useState("TestPassword123");

  const onPhoneChange = (value: string) => {
    setPhone(value);
  };
  const onPasswordChange = (value: string) => {
    setPassword(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("phone >>>", phone);
    console.log("password >>>", password);

    const response = await fetch("https://cs-api.tkr.dev/api/v1/auth/login", {
      method: "POST",
      headers: {
        "X-Api-Key":
          "ef74042a938c97c9f9723b4588a8bdb6a2a7dea653101002fdde9d797c0cab19",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: phone,
        password: password,
      }),
    });
    const { token } = await response.json();
    
    setCookie('auth', token)
    
    console.log(token);
  };

  console.log(cookies.auth)

  return (
    <div className={styles.root}>
      <Title>Авторизация</Title>
      <form action="" onSubmit={onSubmit}>
        <Input
          name="phone"
          type={"text"}
          label="Номер телефона"
          value={phone}
          onChange={onPhoneChange}
        />
        <Input
          name="phone"
          type={"password"}
          label="Пароль"
          value={password}
          onChange={onPasswordChange}
        />
        <Button color={"default"} disabled={false}>
          Войти
        </Button>
      </form>
    </div>
  );
}

export default Auth;
