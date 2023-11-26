import axios from "axios";
import React,{useState,useEffect} from 'react';
import Apidata from "./movie";
import Tmdb from "./Tmbd.module.css" 
 
 function Tmbd  ()  {
    let[searchValue,setSearchValue]=useState("")
    let [storeData,setStoreData]=useState([])
    useEffect(()=>{
        apiDatas()
    },[])
    
    async function apiDatas(){
        let recentApi=await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`)
        setStoreData(recentApi.data.results)
        console.log(recentApi)
    }
    async function appiContent(){
        if(searchValue.trim()==="")
        {
            Apidata()
        }
        else{
        let apiData=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=79de2bebc364d4d586b86be7a5990f7a`)
        setStoreData(apiData.data.results)
        console.log(apiData)
        }
    }
   let inputsearch=({target:{value}})=>{
    setSearchValue(value)
   }
   let onsubmitInput=(e)=>{
    e.preventDefault()
    onSearch()
   }
   let onSearch=()=>{
    appiContent()
   }
   let image =` https://image.tmdb.org/t/p/w1280`;
    return (
     <section>
        <div className={Tmdb.total}>
        <div className={Tmdb.heading}>
        <h1>movie app</h1>
        </div>
        <div>
            <form onSubmit={onsubmitInput}>
            <div className={Tmdb.bar}>
                <input type="search" onChange={inputsearch} value={searchValue} placeholder="search here..." />
                <i type="submit" onClick={onSearch} class="bi bi-search" id=''></i>
            </div>
            </form>
        </div>
        </div>
        <div className={Tmdb.content}>
           {storeData.map(({poster_path,id,title,overview,vote_average})=>{
            return(
                <div className={Tmdb.card}>
                    <div className={Tmdb.board}>
                    <img src={image+poster_path} alt="" width={"200px"} height={"200px"} />
                    </div>
                    
                   <div className={Tmdb.display}>
                   <h4>{title}</h4>
                    <div className={Tmdb.back}>
                        <h3>{Math.round(vote_average)}</h3>
                        <i class="bi bi-star-fill"></i>
                </div>
                   </div>
                 
                    <div className={Tmdb.box}>
                        <div>
                        <p>overview:</p>{overview}
                        </div>
                        
                   
                   </div>
                    
                </div>
                
            )
           })}
        </div>
     </section>
    );
 }
 
 export default Tmbd;
 
