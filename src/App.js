import { useEffect, useState} from 'react';
import './App.css';
import GridCharacters from './components/characters/GridCharacters';
import FilterData from './components/ul/FilterCharacter';
import Header from './components/ul/Header';

const urlAPI = "https://breakingbadapi.com/api/characters?name="

function App() {

  const [characters, setCharacters] =useState([])
  const [search, setSearch] = useState("")
 
   useEffect(()=>{
    fechingTheAPI()
  },[search]) 


  const fechingTheAPI = async()=>{
      try{
    const request = await fetch(urlAPI+search)
    const data = await request.json()
    setCharacters(data)
      }catch(err){
        console.log(err)
      }
  }

  return (
   <div className='container'>
      <Header />
      <FilterData filtereddata ={(value)=> setSearch(value)} />
      <GridCharacters characters={characters}/>
   </div>
  );
}

export default App;
