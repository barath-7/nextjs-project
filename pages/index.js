//import Layout from '../components/layout/Layout';
import { MongoClient } from "mongodb";
import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="meetup" content='Meetup react page' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  let client = await MongoClient.connect(process.env.DB_URI);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  let meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      //meetups:DUMMY_MEETUP
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
          id: meetup._id.toString(),
          image: meetup.image,
        };
      }),
    },
  };
}
export default HomePage;
