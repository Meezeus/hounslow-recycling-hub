import React from "react";
import { Button } from "antd";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import style from "@/styles/home/DumpedRubbishSection.module.css";
import { DumpedRubbishInfo } from "@/data/DumpedRubbishInfo";

export default function dumpedRubbishSection(props: DumpedRubbishInfo) {
  return (
    <div className={style["dumped-rubbish-container"]}>
      <div>
        <div className={style["dumped-rubbish-text"]}>
          <ReactMarkdown>{props.content}</ReactMarkdown>
        </div>
        <div className={style["dumped-rubbish-report"]}>
          <h3>Report Dumped Rubbish</h3>
          <a href={props.reportPublicForm}>
            <Button className={style["dumped-rubbish-button"]} size="large">
              On public land
            </Button>
          </a>
          <a href={props.reportPrivateForm}>
            <Button className={style["dumped-rubbish-button"]} size="large">
              On private land
            </Button>
          </a>
        </div>
        <div className={style["dumped-rubbish-pay"]}>
          <h3>Pay Penalty Notice</h3>
          <p>If you have fixed penalty notice for fly tipping:</p>
          <a href={props.payPenaltyLink}>
            <Button className={style["dumped-rubbish-button"]} size="large">
              Pay Here
            </Button>
          </a>
        </div>
      </div>
      <div className={style["dumped-rubbish-image-div"]}>
        <img
          className={style["dumped-rubbish-image"]}
          src="./dumped_rubbish.png"
          alt=""
        />
      </div>
    </div>
  );
}
