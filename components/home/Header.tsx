import style from "@/styles/home/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={style["navbar-offset"]}></div>
      <div className={style["header"]} id="Header">
        <div className={style["header-title"]}>Hounslow Recycling Hub</div>
        <div className={style["header-description"]}>
          Your go-to stop for all recycling things in the London Borough of
          Hounslow!
        </div>
      </div>
    </>
  );
}
