import React, { Ref, useState } from "react";
import style from "@/styles/home/Subheading.module.css";
import homeStyle from "@/styles/home/Home.module.css";

type SubheadingProps = {
  title: string;
  id: string;
  ref: Ref<HTMLDivElement>;
};

export default React.forwardRef<HTMLDivElement, SubheadingProps>(
  function Subheading(props, ref) {
    return (
      <div ref={ref} className={style["subheading-container-wrapper"]}>
        <a className={homeStyle["anchor"]} id={props.id + "-anchor"}></a>
        <div className={style["subheading-container"]}>
          <div className={style["subheading-anchors"]}></div>
          <h3 className={`${style["subheading-text"]}`}>{props.title}</h3>
          <div className={style["subheading-anchors"]}></div>
        </div>
        <hr className={style["subheading-separator"]} />
      </div>
    );
  }
);
