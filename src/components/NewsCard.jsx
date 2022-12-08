import React from 'react'
import '../css_files/newscard.css'
import Card from './Card'

const NewsCard = (props) => {
    
  return (
    <div className='news-card'>
        <Card 
        data = {props.news}/>

        {/* {
            props.news.articles ? (
                props.news.articles.map((item)=>{
                    return(
                        <div className='card'>
                            {
                                item.title ? (  <h3>{item.title}</h3>) : null
                            }
                        <img src={item.urlToImage} alt='/'/>
                        <h4>Author : {item.author}</h4>
                        <p>{item.content}</p>
                        <p>{item.description}</p>
                        <p>Published Date : {new Date(item.publishedAt).toDateString()}</p>
                        </div>
                    )
                }) 
            ): null
       
        } */}

    </div>
  )
}

export default NewsCard;