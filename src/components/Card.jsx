import React from 'react'
import '../css_files/card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  
   return(
    props.data.articles ? (
        props.data.articles.map((item)=>{
            return (
               <a href={item.url}>
                {console.log(item.url)}
                <div className='card'>
                    <div className='img-div'>
                    <img src={item.urlToImage}  alt = '/'></img>
                    <div className='card-details'>
                    <h2>{item.title}</h2>
                    <p className='card-des'>{item.description}...</p>
                    </div>
             
                    </div>

                <p className='md'>Author : {item.author}</p>
                <p className='md'>Date:{new Date(item.publishedAt).toDateString()}</p>
              
             </div>
             </a>
           
            )
        }) 
    ) : null   
   )
}

export default Card;