import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: 4
};

export default function SubscriptionModal({open, handleClose}) {

    const features =[
        "Prioritized ranking in conversations and search.",
        "See approximately twice as many Tweets between ads in your For you and Following timelines.",
        "Add bold and italic styles to your Tweets.",
        "Post longer videos and 1080p uploads.",
        "All the exsisting blue features, including Edit Tweets, Bookmark Folders and early access to new features."
    ];

    const [plan, setPlan] = React.useState("Annually");

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose} aria-label='delete'>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg'>
                                <h1 className='text-xl pr-5'>Blue subscribers with a verified phone number will get a blue checkmark once approved</h1>
                                <img  className='w-24 h-24' src='https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png'></img>
                            </div>

                            <div className='flex justify-between border rounded-full border-gray-500 px-5 py-3'>

                                <div >
                                    <span onClick={()=>setPlan("Annually")} className={'${plan==="Annually"?"text-black":"text-gray-400"}'}>Annually</span>
                                    <span className='text-sm text-green-500 ml-5'>SAVE 12%</span>
                                </div>
                                <p onClick={()=>setPlan("monthly")} className={'${plan==="monthly"?"text-black":"text-gray-400"}'}>
                                    Monthly
                                </p>

                            </div>

                            <div className='space-y-3'>
                                {features.map((item)=> <div className='flex items-center space-x-5'>

                                    <FiberManualRecordIcon sx={{width:"7px", height:"7px"}}/>
                                    <p className='text-xs'>
                                        {item}
                                    </p>
                                </div>
                                )}

                            </div>

                            <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-4 py-3'>
                                <span className='line-through italic'> ₹ 7,800.00</span>
                                <span className='px-5'> ₹ 6,800.00</span>
                            </div>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}