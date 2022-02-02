import { useState } from "react";
import {CallToApi} from "../../service/api-service";


const Contact = () => {
  const [apiData, setApiData] = useState([]);

  return (
    <div>
      <h2>Contact us component</h2>
      <button type="button" onClick={()=>CallToApi(setApiData)}>
        Get info
      </button>
      <div>
        {apiData.map((item) => (
          <div className="containerOfContact">
              {/* <img src={item.linkToMovie} /> */}
            <p>{item.movieName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
