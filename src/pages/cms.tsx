import { useState } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
// Amplify.configure(awsconfig);
import { withAuthenticator } from "@aws-amplify/ui-react";

import Head from "next/head";
import Header from "@/components/cms/Header";
import UserHeader from "@/components/cms/UserHeader";
import CMSTabs from "@/components/cms/CMSTabs";
import Footer from "@/components/Footer";
import style from "@/styles/cms/CMS.module.css";

// Data Types
import { facts, Fact } from "@/data/Facts";
import { quiz, Question } from "@/data/Quiz";
import { events, Event } from "@/data/Events";
import {
  houseRecyclingServices,
  flatRecyclingServices,
  RecyclingService,
} from "@/data/RecyclingServices";
import { dumpedRubbishInfo, DumpedRubbishInfo } from "@/data/DumpedRubbishInfo";

type Props = {
  facts: Fact[];
  quiz: Question[];
  events: Event[];
  houseRecyclingServices: RecyclingService[];
  flatRecyclingServices: RecyclingService[];
  dumpedRubbishInfo: DumpedRubbishInfo;
};

export default /*withAuthenticator(*/ function CMS(
  /*{ signOut, user }, */ props: Props
) {
  const [facts, setFacts] = useState(props.facts);
  const [quiz, setQuiz] = useState(props.quiz);
  const [events, setEvents] = useState(props.events);
  const [houseRecyclingServices, setHouseRecyclingServices] = useState(
    props.houseRecyclingServices
  );
  const [flatRecyclingServices, setFlatRecyclingServices] = useState(
    props.flatRecyclingServices
  );
  const [dumpedRubbishInfo, setDumpedRubbishInfo] = useState(
    props.dumpedRubbishInfo
  );

  // const token = user?.getSignInUserSession()?.getIdToken().getJwtToken();
  // const authToken = token !== undefined ? token : "";

  return (
    <>
      <Head>
        <title>HRH - CMS</title>
        <meta name="application-name" content="HRH - CMS" />
        <meta name="description" content="CMS for HRH." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <UserHeader signOut={signOut} user={user} /> */}

      <div className={style["page-content"]}>
        <CMSTabs
          /*authToken={authToken}*/
          facts={facts}
          setFacts={setFacts}
          quiz={quiz}
          setQuiz={setQuiz}
          events={events}
          setEvents={setEvents}
          houseRecyclingServices={houseRecyclingServices}
          setHouseRecyclingServices={setHouseRecyclingServices}
          flatRecyclingServices={flatRecyclingServices}
          setFlatRecyclingServices={setFlatRecyclingServices}
          dumpedRubbishInfo={dumpedRubbishInfo}
          setDumpedRubbishInfo={setDumpedRubbishInfo}
        />
      </div>

      <Footer />
    </>
  );
} /*)*/

export const getServerSideProps = async () => {
  // const resFacts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/facts`);
  // const facts = await resFacts.json();

  const mockFacts = facts;
  const mockQuiz = quiz;
  const mockEvents = events;
  const mockHouseRecyclingServices = houseRecyclingServices;
  const mockFlatRecyclingServices = flatRecyclingServices;
  const mockDumpedRubbishInfo = dumpedRubbishInfo;

  return {
    props: {
      facts: mockFacts,
      quiz: mockQuiz,
      events: mockEvents,
      houseRecyclingServices: mockHouseRecyclingServices,
      flatRecyclingServices: mockFlatRecyclingServices,
      dumpedRubbishInfo: mockDumpedRubbishInfo,
    },
  };
};
