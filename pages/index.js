//import Layout from '../components/layout/Layout';
import { Fragment, useEffect,useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'
const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First Meetup",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg/1200px-Paris_Opera_full_frontal_architecture%2C_May_2009_%28cropped%29.jpg',
    address: "Paris 53",
    description: "This is the first meetup - Paris",
  },

  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/London_Parliament_2007-1.jpg/1920px-London_Parliament_2007-1.jpg",
    address: "London 63",
    description: "This is the second meetup - UK",
  },
];

const HomePage =(props) =>{
//  // const [loading, setloading] = useState(true)
//   const [loadedMeetups, setLoadedMeetups] = useState([])
//   useEffect(()=>{
//     // setTimeout(()=>{
//     //   setLoadedMeetups(DUMMY_MEETUP)
//     //   setloading(false)
//     // },5000)
    
//     setLoadedMeetups(DUMMY_MEETUP)
//   },[])

//   // return <Fragment>
//   //   {loading && (<h1>Loading...</h1>)}
//   //   <MeetupList meetups={loadedMeetups} />
//   // </Fragment>
    return <MeetupList meetups={props.meetups} />
    
}

export async function getStaticProps() {
  return {
    props:{
      meetups:DUMMY_MEETUP
    }
  }
}
export default HomePage;