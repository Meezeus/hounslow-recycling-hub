import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import style from "@/styles/home/Header.module.css";

type HeaderProps = {
  displayEvents: boolean;
  showFlatVersion: boolean;
  toggle(): void;
};

export default function Header(props: HeaderProps) {
  const [isInput, setIsInput] = useState(false);
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const iconClick = () => {
    setIsInput(true);
  };
  const onBlur = () => {
    setIsInput(false);
  };

  return (
    <div className={style["header"]} id="Header">
      <div className={style["header-top"]}>
        <div className={style["switch-with-labels"]}>
          <h3>House</h3>
          <div className={style["switch-wrapper"]}>
            <label className={style["switch"]}>
              <input
                type="checkbox"
                defaultChecked={props.showFlatVersion}
                onClick={props.toggle}
              />
              <span className={style["slider"] + " " + style["round"]}></span>
            </label>
          </div>
          <h3>Flat</h3>
        </div>
        <div className={style["header-title"]}>Hounslow Recycling Hub</div>
        {isInput ? (
          <div className={style["header-search-input"]} onBlur={onBlur}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </div>
        ) : (
          <div className={style["header-search"]}>
            <SearchOutlined onClick={iconClick} />
          </div>
        )}
      </div>
      <div className={style["header-description"]}>
        Your go-to stop for all recycling things in the London Borough of
        Hounslow!
      </div>
      <div className={style["header-anchors"]}>
        <a href="#RecyclingAssistant">Recycling Assistant</a>
        <div className={style["header-dot"]}></div>
        {props.displayEvents ? (
          <>
            <a href="#Events">Events</a>
            <div className={style["header-dot"]}></div>
          </>
        ) : (
          ""
        )}
        <a href="#RecyclingServices">Recycling Services</a>
        <div className="header-dot"></div>
        <a href="#DumpedRubbish">Report Dumped Rubbish</a>
      </div>
    </div>
  );
}
