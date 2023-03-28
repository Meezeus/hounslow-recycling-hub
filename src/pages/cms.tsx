import { useState } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";

import Head from "next/head";
import Header from "@/components/cms/Header";
import UserHeader from "@/components/cms/UserHeader";
import CMSTabs from "@/components/cms/CMSTabs";
import Footer from "@/components/Footer";
import style from "@/styles/cms/CMS.module.css";

// Data Types
import { Fact } from "@/data/Facts";
import { Question } from "@/data/Quiz";
import { Event } from "@/data/Events";
import { RecyclingService } from "@/data/RecyclingServices";
import { DumpedRubbishInfo } from "@/data/DumpedRubbishInfo";

interface Props extends WithAuthenticatorProps {
  data: {
    facts: Fact[];
    quiz: Question[];
    events: Event[];
    recyclingServices: RecyclingService[];
    dumpedRubbishInfo: DumpedRubbishInfo[];
  };
}

export default withAuthenticator(function CMS({ data, signOut, user }: Props) {
  const [facts, setFacts] = useState(data.facts);
  const [quiz, setQuiz] = useState(data.quiz);
  const [events, setEvents] = useState(data.events);
  const [houseRecyclingServices, setHouseRecyclingServices] = useState(
    data.recyclingServices.filter(
      (recyclingService) => !recyclingService.forFlats
    )
  );
  const [flatRecyclingServices, setFlatRecyclingServices] = useState(
    data.recyclingServices.filter(
      (recyclingService) => recyclingService.forFlats
    )
  );
  const [dumpedRubbishInfo, setDumpedRubbishInfo] = useState(
    data.dumpedRubbishInfo[0]
  );

  const token = user?.getSignInUserSession()?.getIdToken().getJwtToken();
  const authToken = token !== undefined ? token : "";

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

      <UserHeader signOut={signOut} user={user} />

      <div className={style["page-content"]}>
        <CMSTabs
          authToken={authToken}
          facts={facts}
          setFacts={setFacts}
          quiz={quiz}
          setQuiz={setQuiz}
          events={events}
          setEvents={setEvents}
          recyclingServices={recyclingServices}
          setRecyclingServices={setRecyclingServices}
          dumpedRubbishInfo={dumpedRubbishInfo}
          setDumpedRubbishInfo={setDumpedRubbishInfo}
        />
      </div>

      <Footer />
    </>
  );
});

export const getServerSideProps = async () => {
  const headers = {
    "content-type": "application/json",
    "x-api-key": `${process.env.FRONTEND_APIKEY}`,

  };

  const cats = [
    "facts",
    "quiz",
    "events",
    "recyclingServices",
    "dumpedRubbishInfo",
  ];
  const data = Object.fromEntries(cats.map((cat) => [cat, ""]));

  for (let i = 0; i < cats.length; i++) {
    const resapi = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/api/${cats[i]}`,
      {
        method: "GET",
        headers: headers,
      }
    );
    data[cats[i]] = await resapi.json();
  }

  return {
    props: {
      data: {
        facts: Object.keys(data.facts).length !== 0 ? data.facts : [],
        quiz: Object.keys(data.quiz).length !== 0 ? data.quiz : [],
        events: Object.keys(data.events).length !== 0 ? data.events : [],
        recyclingServices:
          Object.keys(data.recyclingServices).length !== 0
            ? data.recyclingServices
            : [],
        dumpedRubbishInfo:
          Object.keys(data.dumpedRubbishInfo).length !== 0
            ? data.dumpedRubbishInfo
            : [],
      },
    },
  };
};
