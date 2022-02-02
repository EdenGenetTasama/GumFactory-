
   export const CallToApi = (setApiData) => {
    fetch("https://moviesmern.herokuapp.com/movies/all")
      .then((respond) => respond.json())
      // .then(jasonData => console.log(jasonData))
      .then((jasonData) => setApiData(jasonData.data))
      .catch((error) => console.log("error", error));
  };




//"https://moviesmern.herokuapp.com/movies/all"