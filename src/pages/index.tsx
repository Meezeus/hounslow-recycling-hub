import { useRef, useState, useEffect } from "react";

// Components
import Head from "next/head";
import Popup from "reactjs-popup";
import Header from "@/components/home/Header";
import EngagingBox from "@/components/home/EngagingBox";
import Subheading from "@/components/home/Subheading";
import DecisionTree from "@/components/home/DecisionTree";
import EventCardCarousel from "@/components/home/EventCardCarousel";
import RecyclingServiceAccordionGrid, {
  RecyclingServiceAccordionGridRef,
} from "@/components/home/RecyclingServiceAccordionGrid";
import DumpedRubbishSection from "@/components/home/DumpedRubbishSection";
import Footer from "@/components/Footer";

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

  const recyclingServiceAccordionGridRef =
    useRef<RecyclingServiceAccordionGridRef>(null);

  function openAccordion(id: string) {
    recyclingServiceAccordionGridRef.current?.openAccordion(id);
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

      <Header
        displayEvents={props.events.length > 0}
        showFlatVersion={showFlatVersion!}
        toggle={toggleVersion}
      />

      <EngagingBox showFlatVersion={showFlatVersion!} />

      <Subheading title="Recycling Assistant" id="DecisionTree" />
      <DecisionTree />

      {props.events.length > 0 ? (
        <>
          <Subheading title="Events" id="EventCardCarousel" />
          <EventCardCarousel events={props.events} />
        </>
      ) : (
        ""
      )}

      <Subheading
        title="Recycling Services"
        id="RecyclingServiceAccordionGrid"
      />
      <RecyclingServiceAccordionGrid
        showFlatVersion={showFlatVersion!}
        houseRecyclingServices={props.houseRecyclingServices}
        flatRecyclingServices={props.flatRecyclingServices}
        ref={recyclingServiceAccordionGridRef}
      />

      <Subheading title="Report Dumped Rubbish" id="DumpedRubbish" />
      <DumpedRubbishSection
        content={props.dumpedRubbishInfo.content}
        reportPublicForm={props.dumpedRubbishInfo.reportPublicForm}
        reportPrivateForm={props.dumpedRubbishInfo.reportPrivateForm}
        payPenaltyLink={props.dumpedRubbishInfo.payPenaltyLink}
      />

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  
  // FETCHING DATA FROM BACKEND
  // UNCOMMENT WHEN READY TO DEPLOY

  // const resE = await fetch(`/api`)
  // const events = await resE.json()

  // const resHRS = await fetch(`api/houserecyclingservices"`)
  // const houseRecyclingServices = await resHRS.json()

  // const resFRS = await fetch(`api/flatrecyclingservices`)
  // const flatRecyclingServices = await resFRS.json()

  

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
