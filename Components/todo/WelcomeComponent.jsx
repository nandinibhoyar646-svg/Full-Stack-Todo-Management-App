
import { useParams, Link} from "react-router-dom"
import { useState } from "react"
import { retrieveHelloWorldPthVariable } from "./api/HelloWorldApiService";
import { AuthContext, useAuth } from "./security/AuthContext";


function WelcomeComponent(){

    const {username}=useParams()

    const authContext=useAuth()

   const [message,setMessage]= useState(null)

    function callHelloWorldRestApi(){
        console.log('called');
       
    }

    retrieveHelloWorldPthVariable('nandini',authContext.token)
            .then((response) =>successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally (()=> console.log('cleanup'))



    function successfulResponse(response){
        console.log(response)
       // setMessage(response.data)
       setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="WelcomeComponen">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos- <Link to ="/todos">Go here</Link>
            </div>
            <div>
                <button className= "btn btn-success m-5" onClick= {callHelloWorldRestApi}>
                   call Hello world 
                    </button>
            </div>
    
        <div className="text-info">{message}</div>
        </div>
    )
}
export default  WelcomeComponent;