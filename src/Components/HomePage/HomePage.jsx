import React, { useState } from "react";
import { Grid, Hidden } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import TwitDetails from "../TwitDetails/TwitDetails";
import { navigationMenu } from "../Navigation/NavigationMenu";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <Grid container className="px-0 sm:px-24 justify-between">
      {/* First item for medium and larger screens */}
      <Grid item xs={0} md={2} lg={2} className="hidden lg:block w-full relative">
        <Navigation />
      </Grid>
      
      {/* Second item for all screen sizes */}
      <Grid item xs={12} md={5} lg={5} className="p-0 sm:px-9 w-full relative">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/tweet/:id" element={<TwitDetails />} />
        </Routes>
        <div
          className=" fixed flex justify-around bg-white w-full bottom-0 right-0 z-500 px-4 py-4 border-t border-r-2 cursor-pointer md:hidden"
          >
              <div className='cursor-pointer flex space-x-3 
              items-center' onClick={() => navigate(navigationMenu[0].path)}>
              {navigationMenu[0].icon}
          </div>
              <div className='cursor-pointer flex space-x-3 
                  items-center' onClick={() => navigate(navigationMenu[1].path)}>
                  {navigationMenu[1].icon}
              </div>
              <div className='cursor-pointer flex space-x-3 
                  items-center' onClick={() => navigate(navigationMenu[2].path)}>
                  {navigationMenu[2].icon}
              </div>
              <div className='cursor-pointer flex space-x-3 
                  items-center' onClick={() => navigate(navigationMenu[3].path)}>
                  {navigationMenu[3].icon}
              </div>
              <div className='cursor-pointer flex space-x-3 
                  items-center' onClick={() => navigate(navigationMenu[4].path)}>
                  {navigationMenu[4].icon}
              </div>
            </div>
      </Grid>
      
      {/* Third item for medium and larger screens */}
      <Grid item xs={0} md={3} lg={3} className="hidden lg:block w-full relative">
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;

// return (
    
//   <Grid container className="px-5 lg:px-36 justify-between">

//     <Grid item xs={0} md={2.5} lg={2.5} className="hidden lg:block w-full relative">
//       <Navigation />
//     </Grid>
//     <Grid
//       item
//       xs={12}
//       md={6}
//       lg={6}
//       className="px-5 lg:px-9 hidden  lg:block w-full relative"
//     >
//       <Routes>
//         <Route path="/" element={<HomeSection />}></Route>
//         <Route path="/home" element={<HomeSection />}></Route>
//         <Route path="/profile/:id" element={<Profile />}></Route>
//         <Route path="/twit/:id" element={<TwitDetails />}></Route>
//       </Routes>
//     </Grid>
//     <Grid item xs={0} md={3} lg={3} className="hidden lg:block w-full relative">
//       <RightPart />
//     </Grid>
//   </Grid>
// );
