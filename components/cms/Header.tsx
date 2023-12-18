import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import style from "@/styles/cms/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={style["header"]} id="Header">
        <div className={style["header-title"]}>Hounslow Recycling Hub</div>
        <br />
        <div className={style["header-description"]}>
          Content Management System
        </div>
        <div className={style["header-account"]}>
          <div className={style["header-account-user"]}>Welcome User!</div>
          <Button variant="contained" endIcon={<LogoutIcon />}>
            Sign out
          </Button>
        </div>
      </div>
    </>
  );
}
