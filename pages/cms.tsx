import { useState } from "react";

import Head from "next/head";
import Header from "@/components/cms/Header";
import CMSTabs from "@/components/cms/CMSTabs";
import Footer from "@/components/Footer";
import style from "@/styles/cms/CMS.module.css";

// Data Types
import { Fact, facts } from "@/data/Facts";
import { Question, quiz } from "@/data/Quiz";
import { Event, events } from "@/data/Events";
import {
  RecyclingService,
  recyclingServices,
  service_order,
} from "@/data/RecyclingServices";
import { dumpedRubbishInfo, DumpedRubbishInfo } from "@/data/DumpedRubbishInfo";

type Props = {
  data: {
    facts: Fact[];
    quiz: Question[];
    events: Event[];
    recyclingServices: RecyclingService[];
    dumpedRubbishInfo: DumpedRubbishInfo;
  };
};

export default function CMS({ data }: Props) {
  const [facts, setFacts] = useState(data.facts);
  const [quiz, setQuiz] = useState(data.quiz);
  const [events, setEvents] = useState(
    data.events.sort(
      (eventA, eventB) =>
        new Date(eventA.startDate).getTime() -
        new Date(eventB.startDate).getTime()
    )
  );
  const [houseRecyclingServices, setHouseRecyclingServices] = useState(
    data.recyclingServices
      .filter((recyclingService) => !recyclingService.forFlats)
      .sort(
        (serviceA, serviceB) =>
          service_order.indexOf(serviceA.id) -
          service_order.indexOf(serviceB.id)
      )
  );
  const [flatRecyclingServices, setFlatRecyclingServices] = useState(
    data.recyclingServices
      .filter((recyclingService) => recyclingService.forFlats)
      .sort(
        (serviceA, serviceB) =>
          service_order.indexOf(serviceA.id) -
          service_order.indexOf(serviceB.id)
      )
  );
  const [dumpedRubbishInfo, setDumpedRubbishInfo] = useState(
    data.dumpedRubbishInfo
  );

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

      <div className={style["page-content"]}>
        <CMSTabs
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
}

export const getServerSideProps = async () => {
  return {
    props: {
      data: {
        facts: facts,
        quiz: quiz,
        events: events,
        recyclingServices: recyclingServices,
        dumpedRubbishInfo: dumpedRubbishInfo,
      },
    },
  };
};
