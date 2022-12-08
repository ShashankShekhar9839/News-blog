import {db} from '../firebase-config';

import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc } from 'firebase/firestore';


const blogCollectionRef = collection(db,"Blogs")
class BlogDataService {
    addBlogs=(newBlog) =>{
        return addDoc(blogCollectionRef,newBlog);
    }

  getAllBlogs = () =>{
    return getDocs(blogCollectionRef);
  }
}


export default new BlogDataService();