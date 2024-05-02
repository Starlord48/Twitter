import { Avatar, Button, Fab, Menu, MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';
import { useDispatch, useSelector } from 'react-redux';
import { createTweet, getAllTweets } from '../../Store/Tweet/Action/Action';
import { uploadToCloudinary } from './Utils/UploadToCloudinary';
import SettingsIcon from '@mui/icons-material/Settings';
import TweetModal from '../Navigation/TweetModal';
import AddIcon from '@mui/icons-material/Add';
import { navigationMenu } from '../Navigation/NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Store/Auth/Action';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

    const [openTweetModal, setOpenTweetModal] = useState(false);

    const handelOpenTweetModel = () => setOpenTweetModal(true);
    const handleCloseModal = () => setOpenTweetModal(false);

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const{tweet} = useSelector(store=>store);
    const {auth} = useSelector(store=>store);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    console.log(tweet)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        console.log("log out")
        handleClose()
        dispatch(logout());
    }
    
    const handelSubmit = (values, actions) => {
        dispatch(createTweet(values))
        setSelectedImage(null)
        actions.resetForm()
        console.log("values", values)
    }

    useEffect(()=>{
        dispatch(getAllTweets());
    },[tweet.like, tweet.retweet])

    const formik = useFormik({
        initialValues: {
            user:auth.user,
            content: "",
            image: ""
        },
        onSubmit:handelSubmit,
        validationSchema,
    })

    const handelSelectImage = async (event) => {
        setUploadingImage(true);
        const imgUrl = await uploadToCloudinary(event.target.files[0])
        formik.setFieldValue("image", imgUrl);
        setUploadingImage(false);
        setSelectedImage(imgUrl);
    }

    return (            
            <div className='space-y-5' >
                <div
                className=" fixed bottom-12 right-3 z-50 px-5 py-5 cursor-pointer md:hidden"
                >
                    <Fab 
                        className=''
                        sx={{ padding:"4px", fontSize:"1.8rem", borderRadius: "50%", color:"white", bgcolor: "#1e88e5" }}
                        variant='contained'
                        onClick={handelOpenTweetModel}
                    >
                        <AddIcon />
                    </Fab>
                </div>
                    
                    <section className='hidden md:block p-9 py-0 '>
                        <h1 className='hidden md:block py-5 text-xl font-bold opacity-90 '>Home</h1>
                    </section>
                    
                    <div className='flex w-full justify-between border-b pb-3 px-2 md:hidden'>
                        <Avatar
                            alt="username"
                            src={`${auth.user.image}`}
                        />
                        <div>
                            <svg 
                                height="40"
                                width="40"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk">
                                <g>
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className='cursor-pointer'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        >
                            <SettingsIcon sx={{ fontSize: 40 }}/>
                        </div>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                        
                    </div>
                    <section className={'hidden sm:block p-9 pb-0 pt-0' }>
                        <div className='flex space-x-5 '>
                            <Avatar
                                alt="username"
                                src={`${auth.user.image}`}
                            />
                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type='text' name='content' placeholder='What is happening'
                                            className={'border-none outline-none text-xl bg-transparent'}
                                            {...formik.getFieldProps("content")}
                                        /><br/>
                                        {formik.errors.content && formik.touched.content &&(
                                            <span className='text-red-500'>{formik.errors.content}</span>
                                        )}
                                    </div>
                                    <div>
                                        {/* <div>
                                        <img src='' alt=''></img>
                                    </div> */}
                                        <div className='flex justify-between items-center mt-5'>
                                            <div className='flex space-x-5 items-center'>
                                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageIcon className='text-[#1d9bf0]' />
                                                <input type='file' name='imageFile' className='hidden' onChange={handelSelectImage} />
                                            </label>
                                            <FmdGoodIcon className='text-[#1d9bf0]'/>
                                            <TagFacesIcon className='text-[#1d9bf0]'/>
                                            </div>
                                            <div>
                                                <Button
                                                sx={{ width: "100%", borderRadius: "20px", paddingX: "20px", paddingY: "8px", bgcolor: "#1e88e5" }}
                                                variant='contained'
                                                type="submit"
                                                >
                                                    Tweet
                                                </Button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </form>
                                <div className='pt-5'>
                                    { selectImage &&   <img src={selectImage}></img>}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        {tweet.tweets.map((item) => <TweetCard item={item} />)}
                    </section>
                    <section>
                        <TweetModal handleClose={handleCloseModal} open={openTweetModal}/>
                    </section>
                    
                
            </div>
  
    )
}

export default HomeSection