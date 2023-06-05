import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

import styles from './App.module.css';

function App(props) {
  const [list, setList] = useState([]);
  
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res)=> {return (setList(res.data.results))
    }).catch((error) => console.log('error 1'))
  },[])

  

  return (
    <Fragment>
      <h1 className={styles.app}>Lista de Pokemons</h1>
      {list.map(item => {
    return (<Pokemon key={item.name} data={item}/>)})}
    </Fragment>
  );
}


export default App;
