import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import style from "@/styles/home/Home.module.css";

// Components
import Head from "next/head";
import Popup from "reactjs-popup";
import Navbar from "@/components/home/Navbar";
import Header from "@/components/home/Header";
import EngagingBox from "@/components/home/EngagingBox";
import Subheading from "@/components/home/Subheading";
import ImageRecognition from "@/components/home/ImageRecognition";
import DecisionTree from "@/components/home/DecisionTree";
import EventCardCarousel from "@/components/home/EventCardCarousel";
import RecyclingServiceAccordionGrid, {
  RecyclingServiceAccordionGridRef,
} from "@/components/home/RecyclingServiceAccordionGrid";
import DumpedRubbishSection from "@/components/home/DumpedRubbishSection";
import Footer from "@/components/Footer";

// API URL
import { api } from "@/config/api";

// Data and Data Types
import {
  houseRecyclingServices,
  flatRecyclingServices,
  RecyclingServices,
} from "@/data/RecyclingServices";
import { events, Events } from "@/data/Events";
import { dumpedRubbishInfo, DumpedRubbishInfo } from "@/data/DumpedRubbishInfo";

type Props = {
  events: Events[];
  houseRecyclingServices: RecyclingServices[];
  flatRecyclingServices: RecyclingServices[];
  dumpedRubbishInfo: DumpedRubbishInfo;
};

export default function Home(props: Props) {
  const [showFlatVersion, setShowFlatVersion] = useState<boolean>();
  const [showPopup, setShowPopup] = useState(false);

  const [headerRef, headerInView] = useInView();
  const [eventsRef, eventsInView] = useInView();
  const [recyclingAssistantRef, recyclingAssistantInView] = useInView();
  const [recyclingServicesRef, recyclingServicesInView] = useInView();
  const [reportDumpedRubbishRef, reportDumpedRubbishInView] = useInView();

  const recyclingServiceAccordionGridRef =
    useRef<RecyclingServiceAccordionGridRef>(null);

  // This hook is called when the page loads. It attempts to fetch
  // showFlatVersion from local storage. If it cannot be found, it sets it to
  // the default value of false and shows the popup.
  useEffect(() => {
    if (localStorage.getItem("showFlatVersion") == null) {
      setShowFlatVersion(false);
      setShowPopup(true);
    } else {
      setShowFlatVersion(JSON.parse(localStorage.getItem("showFlatVersion")!));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This hook is called whenever showFlatVersion changes. It saves it to local
  // storage.
  useEffect(() => {
    if (typeof showFlatVersion !== "undefined") {
      localStorage.setItem("showFlatVersion", JSON.stringify(showFlatVersion));
    }
  }, [showFlatVersion]);

  function handlePopupSelection(selected: boolean) {
    setShowFlatVersion(selected);
    setShowPopup(false);
  }

  function toggleVersion() {
    setShowFlatVersion(!showFlatVersion);
  }

  async function jumpToAccordion(
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) {
    event.stopPropagation();
    recyclingServiceAccordionGridRef.current?.openAccordion(id);
    await new Promise((r) => setTimeout(r, 250));
    document.getElementById(id + "-anchor")?.scrollIntoView();
  }

  return (
    <>
      <Head>
        <title>Hounslow Recycling Hub</title>
        <meta name="application-name" content="Hounslow Recycling Hub" />
        <meta
          name="description"
          content="Your go-to stop for all recycling things in the London Borough of Hounslow!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* To reset local storage, type localStorage.clear() into your web browser console. */}
      <Popup modal open={showPopup} className="home-popup">
        <button
          className="home-popup-close"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>
        <h1>What best describes your living situation?</h1>
        <button
          type="button"
          className="home-popup-button"
          onClick={() => handlePopupSelection(false)}
        >
          House
        </button>
        <button
          type="button"
          className="home-popup-button"
          onClick={() => handlePopupSelection(true)}
        >
          Flat
        </button>
      </Popup>

      <Navbar
        displayEvents={props.events.length > 0}
        showFlatVersion={showFlatVersion!}
        toggle={toggleVersion}
      />

      <Header ref={headerRef} />

      <div className={style["page-content"]}>
        <EngagingBox showFlatVersion={showFlatVersion!} />

        {props.events.length > 0 ? (
          <>
            <div
              className={
                eventsInView ? "animate__animated animate__fadeInLeft" : ""
              }
            >
              <Subheading title="Events" id="events" ref={eventsRef} />
            </div>
            <EventCardCarousel events={props.events} />
          </>
        ) : (
          ""
        )}

        <div
          className={
            recyclingAssistantInView
              ? "animate__animated animate__fadeInLeft"
              : ""
          }
        >
          <Subheading
            title="Recycling Assistant"
            id="recycling-assistant"
            ref={recyclingAssistantRef}
          />
        </div>
        <ImageRecognition
          showFlatVersion={showFlatVersion!}
          jumpToAccordion={jumpToAccordion}
        />
        <DecisionTree
          showFlatVersion={showFlatVersion!}
          jumpToAccordion={jumpToAccordion}
        />

        <div
          className={
            recyclingServicesInView
              ? "animate__animated animate__fadeInLeft"
              : ""
          }
        >
          <Subheading
            title="Recycling Services"
            id="recycling-services"
            ref={recyclingServicesRef}
          />
        </div>
        <RecyclingServiceAccordionGrid
          showFlatVersion={showFlatVersion!}
          houseRecyclingServices={props.houseRecyclingServices}
          flatRecyclingServices={props.flatRecyclingServices}
          ref={recyclingServiceAccordionGridRef}
        />

        <div
          className={
            reportDumpedRubbishInView
              ? "animate__animated animate__fadeInLeft"
              : ""
          }
        >
          <Subheading
            title="Report Dumped Rubbish"
            id="report-dumped-rubbish"
            ref={reportDumpedRubbishRef}
          />
        </div>
        <DumpedRubbishSection
          content={props.dumpedRubbishInfo.content}
          reportPublicForm={props.dumpedRubbishInfo.reportPublicForm}
          reportPrivateForm={props.dumpedRubbishInfo.reportPrivateForm}
          payPenaltyLink={props.dumpedRubbishInfo.payPenaltyLink}
        />
      </div>

      {!headerInView && (
        <a href="#">
          <button className="toTop">Top</button>
        </a>
      )}

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  /*  
  FETCHING DATA FROM BACKEND
  UNCOMMENT WHEN READY TO DEPLOY

  const resE = await fetch(`${api}/events`)
  const events = await resE.json()

  const resHRS = await fetch(`${api}/houserecyclingservices`)
  const houseRecyclingServices = await resHRS.json()

  const resFRS = await fetch(`${api}/flatrecyclingservices`)
  const flatRecyclingServices = await resFRS.json()

  */

  // Mock data from data folder
  const mockEvents = events;
  const mockHouseRecyclingServices = houseRecyclingServices;
  const mockFlatRecyclingServices = flatRecyclingServices;
  const mockDumpedRubbishInfo = dumpedRubbishInfo;

  return {
    props: {
      events: mockEvents,
      houseRecyclingServices: mockHouseRecyclingServices,
      flatRecyclingServices: mockFlatRecyclingServices,
      dumpedRubbishInfo: mockDumpedRubbishInfo,
    },
  };
};
