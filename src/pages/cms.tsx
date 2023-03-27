import { useState } from "react";
import { Amplify } from 'aws-amplify';

import Head from "next/head";
import Header from "@/components/cms/Header";
import UserHeader from "@/components/cms/UserHeader";
import CMSTabs from "@/components/cms/CMSTabs";
import Footer from "@/components/Footer";
import style from "@/styles/cms/CMS.module.css";

import { withAuthenticator,
  WithAuthenticatorProps, } from '@aws-amplify/ui-react';


import awsExports from '../aws-exports';
Amplify.configure(awsExports);

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

interface Props extends WithAuthenticatorProps {
  data: {
    facts: Fact[];
    quiz: Question[];
    events: Event[];
    houseRecyclingServices: RecyclingService[];
    flatRecyclingServices: RecyclingService[];
    dumpedRubbishInfo: DumpedRubbishInfo[];
  }
};

export default withAuthenticator( function CMS({data, signOut, user} :Props) {
  const [facts, setFacts] = useState(data.facts);
  const [quiz, setQuiz] = useState(data.quiz);
  const [events, setEvents] = useState(data.events);
  const [houseRecyclingServices, setHouseRecyclingServices] = useState(
    data.houseRecyclingServices
  );
  const [flatRecyclingServices, setFlatRecyclingServices] = useState(
    data.flatRecyclingServices
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
} )


export const getServerSideProps = async () => {

  const headers = {
    "content-type": "application/json",
    "x-api-key": `${process.env.FRONTEND_APIKEY}`,
  }
  
  const cats = ["facts", "quiz", "events", "houseRecyclingServices", "flatRecyclingServices", "dumpedRubbishInfo"]
  const data = Object.fromEntries(cats.map(cat => [cat, ""]))

  for (let i = 0; i < cats.length; i++) {
    const resapi = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/${cats[i]}`, {
      method: "GET",
      headers: headers,
    });
    data[cats[i]] = await resapi.json()
  }

  return {
    props: {
      data: {
        facts: Object.keys(data.facts).length !== 0 ? data.facts : [],
        quiz: Object.keys(data.quiz).length !== 0 ? data.quiz : [],
        events: Object.keys(data.events).length !== 0 ? data.events : [],
        houseRecyclingServices: Object.keys(data.houseRecyclingServices).length !== 0 ? data.houseRecyclingServices : [],
        flatRecyclingServices: Object.keys(data.flatRecyclingServices).length !== 0 ? data.flatRecyclingServices : [],
        dumpedRubbishInfo: Object.keys(data.dumpedRubbishInfo).length !== 0 ? data.dumpedRubbishInfo : [],
      }
    },
  }

};