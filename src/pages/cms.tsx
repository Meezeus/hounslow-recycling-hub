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
import { dumpedRubbishInfo, DumpedRubbishInfo } from "@/data/DumpedRubbishInfo";

type Props = {
  facts: Fact[];
  quiz: Question[];
  dumpedRubbishInfo: DumpedRubbishInfo;
};

export default /*withAuthenticator(*/ function CMS(
  /*{ signOut, user }, */ props: Props
) {
  const [facts, setFacts] = useState(props.facts);
  const [quiz, setQuiz] = useState(props.quiz);
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
  const mockDumpedRubbishInfo = dumpedRubbishInfo;

  return {
    props: {
      facts: mockFacts,
      quiz: mockQuiz,
      dumpedRubbishInfo: mockDumpedRubbishInfo,
    },
  };
};
