import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import {auth} from '../firebase-config'
import { signOut } from 'firebase/auth';
import Router from 'next/router';
import GIF from './gif';
const Homepage = () => {
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    console.log(authToken)
    if (authToken) {
        Router.replace('/home')
    }

    if (!authToken) {
        Router.replace('/login')
    }
}, [])
  const [gifdata,setgifdata]=useState([]);
  const [textdata,settextdata]=useState(" ");

 

  function getData() {
    console.log(textdata)
    var API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=" +
      API_KEY +
      "&q=" +
      textdata +
      "&limit=25&offset=0&rating=g&lang=en"; 
    fetch(url)
      .then((response) => response.json())
      .then((data) => setgifdata(data.data))
      .catch((e) => {
        console.log(e);
      });
  }
  function getinstantdata(inpu){
    var API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=" +
      API_KEY +
      "&q=" +
      inpu +
      "&limit=25&offset=0&rating=g&lang=en"; 
    fetch(url)
      .then((response) => response.json())
      .then((data) => setgifdata(data.data))
      .catch((e) => {
        console.log(e);
      });
  }
  function settext(e){
    let value=e.target.value;
    settextdata(value)
   
    getinstantdata(value);

    
    
  }
  const logout=async()=>{
   await signOut(auth);
   
    Router.replace('/')
  }
  return (
    
    <div className="container">
      <div className='logfav'>
     <span className='logout'> <button className='btn' onClick={logout}>logout</button> </span>
      <span className='fav'><Link href="/favourite">Favourites</Link> </span>
      </div>
      <h1>GIF Search engine</h1>
      <div className="inputfiled">
        <input onChange={settext}
          type="text"
          className="input userinput"
          placeholder="Enter something"
          value={textdata}
        />
        <button onClick={getData} className="go">GO !</button>
      </div>

      <div className="output">

      {gifdata && gifdata.map((datas)=>(
       <GIF data={datas}/>
        
      ))}

      </div>
    </div>
  )
}

export default Homepage
