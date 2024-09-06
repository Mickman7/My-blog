import UserAuthForm from './components/UserAuthForm';
import { Routes,Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useAuthContext } from './hooks/useAuthContext';
import Blogs from './pages/Blogs';
import AddBlogPage from './pages/AddBlogPage';
import OpenBlog from './pages/OpenBlog';



function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}>
            <Route path='blogs/:id' element={<OpenBlog />}/>
          </Route>
          <Route path='/signup' element={!user ? <UserAuthForm type="sign-up" /> : <Navigate to='/'/>}/>
          <Route path='/signin' element={!user ? <UserAuthForm type="sign-in" /> : <Navigate to='/'/>}/>
          <Route path='/add' element={user && <AddBlogPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
