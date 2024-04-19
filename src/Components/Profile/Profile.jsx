import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { TabContext, TabList, TabPanel  } from '@mui/lab';
import { Tab, Avatar, Button, Box } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModel';


const Profile = () => {

    const[tabValue, setTabValue] = useState("1");

    const [openProfileModal, setOpenProfileModal] = useState(false);
    const handleOpenProfileModal = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);
 
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)

        if(newValue === 4) {
            console.log("like twits")
        } else if(newValue === 1) {
            console.log("users twits")
        }
    }

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);


    const handelFollowUser = () => {
        console.log("handel follow")
    }

    return (
        <div>
            <section className='bg-white z-50 flex items-center sticky top-0 bg-opacity-95'>

                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

                <h1 className='py-5 text-x1 font-bold placeholder-opacity-90 ml-5'>Raftira</h1>

            </section>

            <section>
                <img src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg' className='w-[100%] h-[15rem] object-cover'></img>
            </section>

            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar alt='Raftira'
                        src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
                        sx={{ width: "10rem", height: '10rem', border: "4px solid white" }}
                        className='transform -translate-y-24'
                    />

                    {true ?
                        <Button
                            onClick={handleOpenProfileModal} sx={{ borderRadius: "20px", bgcolor: "#1e88e5" }}
                            variant='contained'  >Edit Profile</Button>
                        :
                        <Button
                            onClick={handelFollowUser}
                            sx={{ borderRadius: "20px", bgcolor: "#1e88e5" }}
                            variant='contained'>{true ? "Follow" : "Unfollow"}</Button>}


                </div>

                <div>
                    <div>
                        <div className='flex items-center'>
                            <h1 className='font-bold text-lg'>Raftira</h1>
                            {true && <VerifiedIcon className='pl-1' fontSize='medium' sx={{ color: "#1e88e5" }} />}
                        </div>
                        <h1 className='text-gray-500'>@angel.raf</h1>
                    </div>
                    <div className='mt-2 space-y-3'>

                        <p>Hello, this is a full stack project bio, with react and spring boot</p>
                        <div className='py-1 flex space-x-5'>
                            <div className='flex items-center text-gray-500'>
                                <BusinessCenterIcon />
                                <p className='ml-2'>Education</p>
                            </div>
                            <div className='flex items-center text-gray-500'>
                                <LocationOnIcon />
                                <p className='ml-2'>Indian</p>
                            </div>
                            <div className='flex items-center text-gray-500'>
                                <CalendarMonthIcon />
                                <p className='ml-2'>Joined jul 2019</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                                
                                <span>185</span>
                                <span className='text-gray-500'>Following</span>

                            </div>
                            <div className='flex items-center space-x-1 font-semibold'>
                                
                                <span>587</span>
                                <span className='text-gray-500'>Followers</span>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab label="Tweets" value="1" />
                            <Tab label="Replies" value="2" />
                            <Tab label="Media" value="3" />
                            <Tab label="Likes" value="4" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,1,1,1].map((item) => <TweetCard />)}
                        </TabPanel>
                        <TabPanel value="2">users replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal}/>
            </section>
        </div>
    )
}

export default Profile