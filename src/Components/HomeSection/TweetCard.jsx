import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReplyModal from './ReplyModal';
import { useDispatch } from 'react-redux';
import { createReTweet, likeTweet } from '../../Store/Tweet/Action/Action';

const TweetCard = ({ item }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openReplyModal, setOpenReplyModal] = useState(false);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);
    const dispatch = useDispatch();
    console.log(item);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweets = () => {
        console.log("delete tweet")
        handleClose();
    }

    const handleCreateRetweets = () => {
        dispatch(createReTweet(item?.id));
        console.log("create retweet")
    }

    const handleLiketweets = () => {
        dispatch(likeTweet(item?.id))
        console.log("like tweets")
    }

    return (
        <React.Fragment>

            {/* <div className='flex items-center font-semibold text-grey-700 py-2'>
            <RepeatIcon />
            <p>You Retweet</p>
        </div> */}

            <div className='flex space-x-5 p-9 border-b'>
                <Avatar
                    onClick={() => navigate(`/profile/${item?.user?.id}`)}
                    className='cursor-pointer'
                    alt='username'
                    src={`${item?.user.image}`}
                />
                <div className='w-full'>
                    <div className="flex justify-between items-center">
                        <div className='flex cursor-pointer items-center space-x-2'
                            onClick={() => navigate(`/profile/${item?.user?.id}`)}

                        >
                            <span className='font-semibold'>{item?.user?.fullName}</span>
                            <span className='text-gray-600'>@{item?.user?.fullName.split(" ").join("_").toLowerCase()}</span>
                            <VerifiedIcon fontSize='small' sx={{ color: "#1e88e5" }} />
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweets}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweets}>Edit</MenuItem>
                            </Menu>
                        </div>

                    </div>

                    <div className='mt-2'>
                        <div onClick={() => navigate(`/tweet/${item?.id}`)} className='cursor-pointer'>
                            <p className='mb-2 p-0'>{item?.content}</p>
                            {item?.image && 
                                <img
                                    className='w-[28rem] border border-gray-400 p-5 rounded-md'
                                    src={item?.image}
                                />
                            }
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className={"space-x-3 flex items-center text-gray-600"}>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                                <p>{item?.totalReplies}</p>
                            </div>
                            <div className={`space-x-3 flex items-center ${item?.reTweet ? "text-pink-600" : "text-gray-600"}`}>

                                <RepeatIcon
                                    onClick={handleCreateRetweets}
                                    className={`cursor-pointer `}
                                />
                                <p>{item?.totalReTweets}</p>

                            </div>
                            <div className={' space-x-3 flex items-center '}>

                                {item?.liked ? <FavoriteIcon
                                    onClick={handleLiketweets}
                                    className='cursor-pointer text-pink-600'
                                /> : <FavoriteBorderIcon
                                    onClick={handleLiketweets}
                                    className='cursor-pointer text-grey-600'
                                />}
                                <p>{item?.totalLikes}</p>

                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                                <p>4503</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <section>
                <ReplyModal item={item} open={openReplyModal} handleClose={handleCloseReplyModal} />
            </section>

        </React.Fragment>
    )
}

export default TweetCard