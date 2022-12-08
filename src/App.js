
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './routes/Home';
import DetailedNewsPage from './routes/DetailedNewsPage';
import NewPost from './routes/NewPost';
import BlogList from './components/BlogList';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/newpost' element={<NewPost/>}></Route>
  <Route path='/blogs' element={<BlogList/>}></Route>
  <Route path='/details' element={<DetailedNewsPage/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
