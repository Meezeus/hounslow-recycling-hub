import style from "@/styles/home/Subheading.module.css";
import React, { Ref, useState } from "react";

type SubheadingProps = {
  title: string;
  id: string;
  ref: Ref<HTMLDivElement>;
};

export default React.forwardRef<HTMLDivElement, SubheadingProps>(
  function Subheading(props, ref) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        ref={ref}
        className={style["subheading-container-wrapper"]}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a className={style["subheading-anchor"]} id={props.id}></a>
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
);
