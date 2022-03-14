import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails =(props) =>{
    return (
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg/1200px-Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg"
        alt="Paris"
        title="First Meetup"
        address="Paris 5th street"
        description="First meetup is in paris"
      />
    );
}

export async function getStaticPaths() {
  return {
    paths:[
      {
        params:{
          meetupId:'m1'
        }
      },
      {
        params:{
          meetupId:'m2'
        }
      }
    ],
    fallback:false
  }
}

export async function getStaticProps(context){

  let meetupId = context.params.meetupId
  console.log(meetupId)
  return {
    props:{
      meetupData:{
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg/1200px-Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg",
        alt:"Paris",
        title:"First Meetup",
        address:"Paris 5th street",
        description:"First meetup is in paris",
        id:meetupId
      }
    }
  }
}
export default MeetupDetails