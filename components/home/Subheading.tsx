import style from "@/styles/home/Subheading.module.css";
import { useState } from "react";

type SubheadingProps = {
  title: string;
  id: string;
};

export default function Subheading(props: SubheadingProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={style["subheading-container-wrapper"]}
      id={props.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style["subheading-container"]}>
        <div className={style["subheading-anchors"]}></div>
        <h3
          className={`${style["subheading-text"]} ${
            isHovered ? style["subheading-text-hover"] : ""
          }`}
        >
          {props.title}
        </h3>
        <div className={style["subheading-anchors"]}></div>
      </div>
      <hr className={style["subheading-separator"]} />
    </div>
  );
}
