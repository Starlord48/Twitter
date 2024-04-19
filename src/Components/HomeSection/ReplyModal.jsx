import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 4
};

export default function ReplyModal({handleClose, open}) {
    const navigate = useNavigate();
    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectImage, setSelectedImage] = React.useState(null);

    const handleSubmit = (values) => {
        console.log("handel submit", values);
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            twitId: 4
        },
        onSubmit: handleSubmit
    })

    const handelSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setUploadingImage(false);
        setSelectedImage(imgUrl);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex space-x-5'>
                        <Avatar
                            onClick={() => navigate("/profile/${6}")}
                            className='cursor-pointer'
                            alt='username'
                            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
                        />
                        <div className='w-full'>
                            <div className="flex justify-between items-center">
                                <div className='flex cursor-pointer items-center space-x-2'>

                                    <span className='font-semibold'>Shepherd</span>
                                    <span className='text-gray-600'>@shepherd_han .2m</span>
                                    <VerifiedIcon fontSize='small' sx={{ color: "#1e88e5" }} />
                                </div>


                            </div>

                            <div className='mt-2'>
                                <div onClick={() => navigate('/twit/${3}')} className='cursor-pointer'>
                                    <p className='mb-2 p-0'>This is a twitter  full stack clone with react and spring boot.</p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <section className={'py-10'}>
                            <div className='flex space-x-5'>
                                <Avatar
                                    alt="username"
                                    src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
                                />
                                <div className='w-full'>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div>
                                            <input type='text' name='content' placeholder='What is happening'
                                                className={'border-none outline-none text-xl bg-transparent'}
                                                {...formik.getFieldProps("content")}
                                            />
                                            {formik.errors.content && formik.touched.content && (
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
                                                    <FmdGoodIcon className='text-[#1d9bf0]' />
                                                    <TagFacesIcon className='text-[#1d9bf0]' />
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

                                </div>
                            </div>
                        </section>
                </Box>
            </Modal>
        </div>
    );
}
