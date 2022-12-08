import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import BlogDataService from '../services/Blog'
import '../css_files/newpost.css';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import '../css_files/intro.css'
import BlogList from '../components/BlogList';

const NewPost = () => {

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [desc,setDesc] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(title==="" || author===""){
            alert('Error')
        }
        else{
            const newBlog = {
                title,
                author,
                desc
            }

            console.log(newBlog);

            try{
                await BlogDataService.addBlogs(newBlog);
                alert("Book added successfully");
            }
            catch(err){
                alert("Error in uploading book");
            }
        }
    };
  return (
   <div className='new-post'>
   <Navbar/>
   <div className='intro input-heading'>
        <h1>Create Your Post Here</h1>
    </div>
  
   <div className='new-post-container'> 

   
   <div className='left-input-div'>
    <div className='new-post-form'>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Author</label>
        <input onChange={(e)=>setAuthor(e.target.value)} type='text' placeholder='author'></input>
        </div>

<div>
<label>Title</label>
        <input onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='title'/>
</div>

<div>
<label>Post Description</label>
        <input onChange={(e)=>setDesc(e.target.value)} type='text-area' cols="50" rows="4" placeholder = "Description"/>
</div>

<input type='submit' value='ADD POST' className='submit-btn'></input>

        </form>
   </div>
   </div>

   <div className='right-div-post'>
    <div className='refresh'>    
        <h2>Your Post Will Show Here</h2>
    <h4>#hit refresh to get your post</h4>
    </div>

    <BlogList/>
   </div>
 
    
    </div>
    <Footer/>
    </div>
  )
}

export default NewPost;