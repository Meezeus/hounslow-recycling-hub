import Head from "next/head";
import Header from "@/components/cms/Header";
import CMSTabs from "@/components/cms/CMSTabs";
import Footer from "@/components/Footer";

import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);
import { withAuthenticator } from "@aws-amplify/ui-react";

// Data Types
import { Facts } from "@/data/Facts";
import UserHeader from "@/components/cms/UserHeader";

type Props = {
  facts: Facts[];
};

export default withAuthenticator(function CMS({ signOut, user }, props: Props) {
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

      <CMSTabs facts={props.facts} />

      <Footer />
    </>
  );
});

export const getServerSideProps = async () => {
  const resFacts = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/facts`);
  const facts = await resFacts.json();

  return {
    props: {
      facts: facts,
    },
  };
};
