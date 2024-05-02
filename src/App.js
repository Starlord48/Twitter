import { useEffect } from 'react';
import './App.css';
import Authentication from './Components/Authentication/Authentication';
import HomePage from './Components/HomePage/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from './Store/Auth/Action';

function App() {

  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{

    console.log(auth);
    
    if(jwt) {
      dispatch(getUserProfile(jwt));
      navigate("/")
    }

  }, [auth.jwt])

  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element = {auth.user?<HomePage />:<Authentication />} />
      </Routes>

    </div>
  );
}

export default App;
