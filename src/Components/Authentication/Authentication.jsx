import { Button, Grid } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import AuthModal from './AuthModel'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handelOpenAuthModal = ()=>setOpenAuthModal(true);;
  const handelCloseAuthmodal = ()=> {
    setOpenAuthModal(false);
    navigate("/");
  };
  const navigate = useNavigate();

  const handleNavigate=(path) => () => {
    navigate(path);
    handelOpenAuthModal();
}

  return (
    <div>
      <Grid className='overflow-y-hidden' container>
        <Grid className='hidden lg:block' item lg={7}>

          <img className='w-full h-screen' alt='' src='https://images.pexels.com/photos/1843716/pexels-photo-1843716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className='absolute top-[26%] left-[19%]'>
            <svg 
            height="300"
            width="300"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>

        </Grid>

        <Grid item className='px-10' lg={5} xs={12}>
          <div>
            <div className=' w-10 mx-auto mt-7 md:hidden'>
              <svg 
              height="60"
              width="60"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </div>
            <h1 className='hidden md:block mt-10 font-bold text-7xl'>Happening now</h1>
            <h1 className='mx-auto w-80 md:w-full font-bold text-3xl py-16'>Join Twitter Today</h1>

            <div className='w-full md:w-[60%]'>

              <div className='w-full'>
                  <GoogleLogin width={330}/>
                  <p className='w-3 mx-auto py-5 text-center'>OR</p>
                <Button fullWidth variant='contained' 
                onClick={handleNavigate("signup")}
                size='large' sx={{
                  width:"330px",
                  borderRadius:"29px",
                  py:"7px",

                }}>Create Account</Button>
                <p className='text-sm mt-2'>By signing up, you agree to the Terms of Service and Privacy 
                Policy, including Cookie use.</p>

              </div>

              <div className='mt-10'>
                <h1 className='font-bold text-xl mb-5'>Already have Account ?</h1>
                <Button onClick={handelOpenAuthModal} fullWidth variant='outlined' size='large' sx={{
                  width:"330px",
                  borderRadius:"29px",
                  py:"7px",

                }}>Login</Button>
              </div>

            </div>

          </div>

        </Grid>
      </Grid>
      <AuthModal open={openAuthModal} handleClose={handelCloseAuthmodal}/>
    </div>
  )
}

export default Authentication