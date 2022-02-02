import { useState } from "react";


const Contact=()=>{
const [apiData , setApiData] = useState([]);
    const CallToApi=()=>{
        fetch("https://moviesmern.herokuapp.com/movies/all")
        .then(respond=>respond.json())
        // .then(jasonData => console.log(jasonData))
        .then(jasonData => setApiData(jasonData.data))
        .catch(error => console.log("error", error));

    }

    return(<div>
        <h2>Contact us component</h2>
        <button type="button" onClick={CallToApi}>Get info</button>
        {apiData.map((item)=>
            <p>{item.movieName}</p>
        )}
        </div>)
}

export default Contact;