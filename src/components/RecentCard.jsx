import React from 'react'
import '../css_files/recentcard.css'

const RecentCard = (props) => {
  return (
  props.recentnews.articles ? (
    props.recentnews.articles.map((item)=>{
        return(
            <div className='recent-card'>
                <img src = {item.urlToImage} alt = '/'/>
                <p>{item.title}</p>
            </div>
        )
    })
  ) : null

  )

    
}

export default RecentCard;