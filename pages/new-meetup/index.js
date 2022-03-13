//import Layout from "../../components/layout/Layout"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"


const NewMeetupPage = () =>{

    const addMeetupHandler =(enteredMeetupData) =>{
        console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    
}


export default NewMeetupPage