import React, { useEffect, useState } from 'react'
import BlogDataService from '../services/Blog'
import '../css_files/bloglist.css'
const BlogList = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        getBlogs();
    },[])

    const getBlogs = async ()=>{
        const data = await BlogDataService.getAllBlogs();
        console.log(data.docs);
        setBlogs(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    };
  return (
    <div>
    {blogs.map((item)=>{
        return(
            <div className='blog-list'>
                <p>Author: {item.author}</p>
                <h3>Title: {item.title}</h3>
                <p>Post: {item.desc}</p>
                <br></br>
               
            </div>
        )
    })}
    </div>
  )
}

export default BlogList;