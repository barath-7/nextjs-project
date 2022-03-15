import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails =(props) =>{
    return (
      <MeetupDetail
        image={props.meetupData.image}
        alt="Paris"
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.DB_URI);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  let meetups =await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close()
  return {
    paths:meetups.map((meetup)=>({
      params:{meetupId:meetup._id.toString()}
    })),
    fallback:false
  }
}

export async function getStaticProps(context){

  let meetupId = context.params.meetupId

  const client = await MongoClient.connect(process.env.DB_URI);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  let selecedMeetup =await  meetupCollection.findOne({_id:ObjectId(meetupId)})

  return {
    props:{
      meetupData:{
        id:selecedMeetup._id.toString(),
        title:selecedMeetup.title,
        image:selecedMeetup.image,
        description:selecedMeetup.description,
        address:selecedMeetup.address
      }
    }
  }
}
export default MeetupDetails