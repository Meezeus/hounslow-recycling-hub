import style from "@/styles/cms/Header.module.css";

type Props = {
  user: any
  signOut: any
}

export default function UserHeader(props : Props) {
    return (
      <>
        <div className={style["user-info-bar-header"]} id="log-in-header">
            <div className={style["header-description"]}>
                {`${props.user.username}      `}
                <button onClick={props.signOut}>Sign out</button>
            </div>
        </div>
      </>
    );
  }

