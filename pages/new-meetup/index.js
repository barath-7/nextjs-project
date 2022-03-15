//import Layout from "../../components/layout/Layout"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import{useRouter} from 'next/router'


const NewMeetupPage = () =>{
    let router = useRouter()
    const addMeetupHandler = async (enteredMeetupData) =>{
        
        const res = fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json()).then(data=>console.log('data--->',data))
        
        router.push('/')

        // let data = await res.json()
        // console.log('data--->',data)
        // console.log(enteredMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    
}


export default NewMeetupPage