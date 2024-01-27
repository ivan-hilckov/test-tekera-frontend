import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Title from "ui/Title/Title";
import Button from "ui/Button/Button";
import styles from './Profile.module.css'

function Profile() {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  const onClick = () => {
    removeCookie('auth')
    navigate('/auth')
  }

  return (
    <div className={styles.root}>
      <Title>Вы авторизованы</Title>
      <Button color={"danger"} disabled={false} onClick={onClick}>
        Выйти
      </Button>
    </div>
  );
}

export default Profile;
