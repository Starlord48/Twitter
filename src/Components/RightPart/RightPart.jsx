import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../Profile/SubscriptionModel';

const RightPart = () => {
    const [openSubcriptionModal, setOpenSubcriptionModal] = React.useState(false);
    const handleOpenSubcriptionModal = ()=> setOpenSubcriptionModal(true);
    const handleCloseSubcriptionModal = ()=> setOpenSubcriptionModal(false);

    const handleChangeTheme = () => {
        console.log("handel change theme")
    }

  return (
    <div className='py-5 sticky top'>
        <div className='relative flex items-center'>

            <input type="text" className='py-3 rounded-full text-green-500 w-full pl-12' />

            {/* <div className='absolute top-0 left-0 pl-3 pt-3'> */}
            <div className="absolute ">
                <input 
                    type="text"
                    // placeholder="Search"

                    className="pl-10 rounded-md py-2 px-4 border focus:outline-none"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            </div>
            <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme}/>

        </div>

        <section className='my-5'>

            <h1 className='text-xl font-bold'>Get Verified</h1>
            <h1 className='text-sm font-bold my-2'>Subscribe to unlock new features</h1>
            <Button
                sx={{  borderRadius: "25px", py: "10px",px:"20px", bgcolor: "#1e88e5" }}
                variant='contained'
                onClick={handleOpenSubcriptionModal}
            >
                Get Verified
            </Button>

        </section>

        <section className='mt-7 space-y-5'>
            <h1 className='font-bold text-xl py-1'>What's happening</h1>

            <div>
                <p className='font-bold'>WWE Speed</p>
                <p className='text-sm'>Wrestling | Every Wednesday·Last night</p>
            </div>
            {[1,1,1,1,1].map((item) => <div className='flex justify-between w-full'>
                <div>
                    <p >Entertainment · Trending</p>
                    <p className='font-bold'>#Ghilli</p>
                    <p>31.7K posts</p>
                </div>
                <MoreHorizIcon />
            </div>
            )}

        </section>
        <section>
            <SubscriptionModal open={openSubcriptionModal} handleClose={handleCloseSubcriptionModal}/>
        </section>

    </div>
  )
}

export default RightPart