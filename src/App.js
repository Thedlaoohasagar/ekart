import logo from './logo.svg';
import './App.css';
import {useState,useEffect}from 'react';

const  App = () => {
const [data,setData] = useState([]);
const [filteredData,setFilteredData] = useState([]);
const [search,setSearch] = useState('');
const [srt,setSrt] = useState('original');


useEffect(()=>{
  response();

},[])

const btn = () =>{
      const searchData = data.filter((e)=>e.name.includes(search));
      setFilteredData(searchData);
}

const sortbtn = () =>{
       if(srt === 'original'){
        setSrt('ASC')
        const sorted = [...data].sort((a,b)=> a.name.localeCompare(b.name))
        setFilteredData(sorted)
       }
       else if (srt === 'ASC'){
        setSrt('DSC')
        const sorted2 = [...data].sort((a,b)=>a.name.localeCompare(b.name)).reverse();
        setFilteredData(sorted2)           
       }
       else{
        // if(srt === 'DSC'){
          setSrt('original')
         setFilteredData(data);
        // }
       }
      }

const response = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  setData(data);
  setFilteredData(data);

}

  return (
    <>
    <div className='names'>
    <div  className="name">
    {filteredData.map((e)=>{
       return <p>{e.name}</p>
      })}
    </div>
  
 <p><input type = 'text'  onChange={(e)=>setSearch(e.target.value)}/></p>
  <p><button onClick={btn}>submit</button></p> 
  <p><button onClick={sortbtn}>sort</button></p> 

    </div>
  
   

    </>
  );
}

export default App;
