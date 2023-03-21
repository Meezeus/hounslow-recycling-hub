import { useState } from "react";
import style from "@/styles/home/Navbar.module.css";
import Link from "next/link";

type NavbarProps = {
  displayEvents: boolean;
  showFlatVersion: boolean;
  toggle(): void;
};

export default function Navbar(props: NavbarProps) {
  const event_anchor = {
    label: "Events",
    target: "Events",
  };

  const anchors = [
    {
      label: "Recycling Assistant",
      target: "RecyclingAssistant",
    },
    {
      label: "Recycling Services",
      target: "RecyclingServices",
    },
    {
      label: "Report Dumped Rubbish",
      target: "DumpedRubbish",
    },
  ];

  const [navList] = useState(
    props.displayEvents ? [event_anchor].concat(anchors) : anchors
  );

  return (
    <div className={style["navbar"]}>
      <div className={style["navbar-contents"]}>
        <Link
          href="/"
          className={
            style["navbar-logo-title-box"] +
            " " +
            "animate__animated animate__fadeIn"
          }
        >
          <img className={style["navbar-logo"]} src="/logo.svg" alt="" />
          <div className={style["navbar-title"]}>Hounslow Recycling Hub</div>
        </Link>
        <div
          className={
            style["navbar-anchor-box"] +
            " " +
            "animate__animated animate__fadeIn"
          }
        >
          {navList.map((navItem, navItemIndex) => {
            return (
              <a
                key={navItemIndex}
                className={style["navbar-anchor"]}
                href={`#${navItem.target}`}
              >
                {navItem.label}
              </a>
            );
          })}
        </div>
        <div
          className={
            style["switch-with-labels"] +
            " " +
            "animate__animated animate__fadeIn"
          }
        >
          <div className={style["switch-label"]}>
            <p>House</p>
          </div>
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
          <div className={style["switch-label"]}>
            <p>Flat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
