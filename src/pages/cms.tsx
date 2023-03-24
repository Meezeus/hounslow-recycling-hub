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
import { facts, Facts } from "@/data/Facts";

type Props = {
  facts: Facts[];
};

export default /*withAuthenticator(*/ function CMS(
  /*{ signOut, user }, */ props: Props
) {
  const [facts, setFacts] = useState(props.facts);
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
        <CMSTabs /*authToken={authToken}*/ facts={facts} setFacts={setFacts} />
      </div>

      <Footer />
    </>
  );
} /*)*/

export const getServerSideProps = async () => {
  // const resFacts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/facts`);
  // const facts = await resFacts.json();

  const mockFacts = facts;

  return {
    props: {
      facts: mockFacts,
    },
  };
};
