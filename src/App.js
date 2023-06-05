import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';


function App(props) {
  const [list, setList] = useState([]);
  
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res)=> {return (setList(res.data.results))
    }).catch((error) => console.log('error 1'))
  },[])

  

  return (
    <Fragment>
      <h1>Lista de Pokemons</h1>
      {list.map(item => {
    return (<Pokemon key={item.name} data={item}/>)})}
    </Fragment>
  );
}


export default App;
