import { useState } from "react";
import style from "@/styles/home/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [navList] = useState([
    {
      label: "Recycling Assistant",
      target: "RecyclingAssistant",
    },
    {
      label: "Events",
      target: "Events",
    },
    {
      label: "Recycling Services",
      target: "RecyclingServices",
    },
    {
      label: "Report Dumped Rubbish",
      target: "DumpedRubbish",
    },
  ]);

  return (
    <div
      className={style["navbar"] + " " + "animate__animated animate__fadeIn"}
    >
      <div className={style["navbar-contents"]}>
        <Link href="/" className={style["navbar-logo-title-box"]}>
          <img className={style["navbar-logo"]} src="/logo.svg" alt="" />
          <div className={style["navbar-title"]}>Hounslow Recycling Hub</div>
        </Link>
        <div className={style["navbar-anchor-box"]}>
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
      </div>
    </div>
  );
}
