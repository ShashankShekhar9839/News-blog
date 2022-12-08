import React from 'react'

import { useEffect, useState } from 'react';
import '../App.css'
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import RecentCard from '../components/RecentCard';




const Home = () => {

    const [news,setNews] = useState([]);

    useEffect(()=>{
     fetchData();
    },[])
   
    console.log(news);
    const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=49ca76d59c184ab6b44f4749b05dae45';
   
    let fetchData = async ()=>{
     let response =await fetch(url);
     let data = await response.json();
     let modifiedData = {
       articles:data.articles
     }
     setNews(modifiedData);
    }

  return (
    <div className='App'>
    <div>
    <Navbar/>
    </div>

   
    <div className='intro-home'>
    <Intro/>
    </div>

 
  <div className="container">
   
    <div className='left-side'>
    <NewsCard
        news={news}
        />
    </div>
    <div className='right-side'>
      <h3>Recent Articles</h3>
      <RecentCard recentnews={news}/>
    </div>
    
  </div>
  <Footer/>
  </div>
  )
}

export default Home;