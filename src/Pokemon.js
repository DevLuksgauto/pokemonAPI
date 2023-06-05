/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState, useEffect } from "react";
import axios from "axios";


const Pokemon = ( {data} ) => {
    const [details, setDetails] = useState(null);
  
    
    useEffect(()=> {
      axios.get(data.url)
      .then((res) => setDetails(res.data))
      .catch((error) => console.log("Error 2"))
    },[])
  
    if (details === null){
      return (
        <Fragment>Carregando...</Fragment>
      )
    }
  
    return (
      <Fragment>
        <img src={details.sprites.front_default} alt="Figura do Pokémon"/>
        <h2>Name</h2><p>{details.name} - {details.base_experience}</p><hr></hr>
      </Fragment>
    )
  }

export default Pokemon;