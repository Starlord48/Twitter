import React, { useState } from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Auth/Action';
import TweetModal from './TweetModal';
import SubscriptionModal from '../Profile/SubscriptionModel';

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {auth} = useSelector(store=>store);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const [openTweetModal, setOpenTweetModal] = useState(false);

    const handelOpenTweetModel = () => setOpenTweetModal(true);
    const handleCloseModal = () => setOpenTweetModal(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);

    const handleCloseSubModal = () => {setOpenSubscriptionModal(false)}
    const handleOpenSubModal = () => {setOpenSubscriptionModal(true)}

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        console.log("log out")
        handleClose()
        dispatch(logout());
    }

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <svg height={30} width={30} viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className='space-y-6'>
                            
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={() => navigate(navigationMenu[0].path)}>
                        {navigationMenu[0].icon}
                        <p className='text-x1'>{navigationMenu[0].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={() => navigate(navigationMenu[1].path)}>
                        {navigationMenu[1].icon}
                        <p className='text-x1'>{navigationMenu[1].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={() => navigate(navigationMenu[2].path)}>
                        {navigationMenu[2].icon}
                        <p className='text-x1'>{navigationMenu[2].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={() => navigate(navigationMenu[3].path)}>
                        {navigationMenu[3].icon}
                        <p className='text-x1'>{navigationMenu[3].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={() => navigate(navigationMenu[4].path)}>
                        {navigationMenu[4].icon}
                        <p className='text-x1'>{navigationMenu[4].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={() => navigate(navigationMenu[5].path)}>
                        {navigationMenu[5].icon}
                        <p className='text-x1'>{navigationMenu[5].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={handleOpenSubModal}>
                        {navigationMenu[6].icon}
                        <p className='text-x1'>{navigationMenu[6].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center'   onClick={ () => navigate(`/profile/${auth.user.id}`)}>
                        {navigationMenu[7].icon}
                        <p className='text-x1'>{navigationMenu[7].title}</p>
                    </div>
                    <div className='cursor-pointer flex space-x-3 
                        items-center' onClick={() => navigate(navigationMenu[8].path)}>
                        {navigationMenu[8].icon}
                        <p className='text-x1'>{navigationMenu[8].title}</p>
                    </div>

                </div>
                <div className='py-10'>
                    <Button
                        sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5" }}
                        variant='contained'
                        onClick={handelOpenTweetModel}
                    >
                        Tweet
                    </Button>
                </div>
            </div>

            <div className='flex item-center justify-between cursor-pointer' >
                <div className='flex item-center space-x-3'>
                    <Avatar
                        alt='username'
                        src={`${auth.user.image}`}
                        onClick={() => navigate(`/profile/${auth?.user?.id}`)}
                    />
                    <div
                    onClick={() => navigate(`/profile/${auth?.user?.id}`)}
                    >
                        <p className="block">{auth.user.fullName}</p>
                        <span className='opacity-70'>@{auth.user.fullName && auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
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
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                    </div>
                </div>

            </div>
            <section>
                <TweetModal handleClose={handleCloseModal} open={openTweetModal}/>
            </section>
            <section>
                <SubscriptionModal handleClose={handleCloseSubModal} open={openSubscriptionModal}/>
            </section>

        </div>
    )
}

export default Navigation