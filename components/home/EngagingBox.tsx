// This file contains the box which displays either a quiz question or a fun fact
import React, { useState, useEffect } from "react";
import Fact from "./Fact";
import Quiz from "./Quiz";
import style from "@/styles/home/EngagingBox.module.css";

type EngagingBoxProps = {
  showFlatVersion: boolean;
};

export default function EngagingBox(props: EngagingBoxProps) {
  const [randNum, setRandNum] = useState<number>();

  useEffect(() => {
    if (props.showFlatVersion) {
      setRandNum(0);
    } else {
      setRandNum(Math.floor(Math.random() * 2));
    }
  }, [props.showFlatVersion]);

  return (
    <div className={style["engaging-box-wrapper"]}>
      {randNum == 0 && <Fact />}
      {randNum == 1 && <Quiz />}
    </div>
  );
}
