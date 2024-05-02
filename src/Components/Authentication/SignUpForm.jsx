import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { blue } from '@mui/material/colors';
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { registerUser } from '../../Store/Auth/Action';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
});

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [{ value: 1, label: "January" },
{ value: 2, label: "February" },
{ value: 3, label: "March" },
{ value: 4, label: "April" },
{ value: 5, label: "May" },
{ value: 6, label: "June" },
{ value: 7, label: "July" },
{ value: 8, label: "August" },
{ value: 9, label: "September" },
{ value: 10, label: "October" },
{ value: 11, label: "November" },
{ value: 12, label: "December" },
];

const SignUpForm = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            birthDay: {
                day: "",
                month: "",
                year: ""
            }, 
            image:"https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3408.jpg",
            backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4ZHbSF2wip180aVmjT9l7ZycxgUfel4ZFg&usqp=CAU"           
        },
        validationSchema,
        onSubmit: (values) => {
            const { day, month, year } = values.birthDay
            const birthDay = `${year}-${month}-${day}`
            values.birthDay = birthDay;
            dispatch(registerUser(values));
            console.log("form value", values);
        }
    });

    const handleDateChange = (name) => (event) => {
        formik.setFieldValue("birthDay", {
            ...formik.values.birthDay,
            [name]: event.target.value
        })
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} >
                <Grid item xs={12}>

                    <TextField
                        fullWidth
                        required
                        label="Full Name"
                        name='fullName'
                        variant='outlined'
                        size='large'
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        helperText={formik.touched.fullname && formik.errors.fullname}

                    />

                </Grid>
                <Grid item xs={12}>

                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        variant='outlined'
                        size='large'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}

                    />

                </Grid>
                <Grid item xs={12}>

                    <TextField
                        fullWidth
                        label="Password"
                        name='password'
                        variant='outlined'
                        size='large'
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}

                    />

                </Grid>

                <Grid item xs={4}>

                    <InputLabel >Day</InputLabel>
                    <Select name="day" value={formik.values.birthDay.day}
                        fullWidth
                        onChange={handleDateChange("day")}
                        onBlur={formik.handleBlur}
                    >
                        {days.map((day) => 
                        <MenuItem key={day} value={day}>
                            {day}
                        </MenuItem>)}
                    </Select>

                </Grid>
                <Grid item xs={4}>

                    <InputLabel >Month</InputLabel>
                    <Select name="month" value={formik.values.birthDay.month}
                        fullWidth
                        onChange={handleDateChange("month")}
                        onBlur={formik.handleBlur}
                    >
                        {months.map((month) => 
                        <MenuItem key={month.value} value={month.value}>
                            {month.label}
                        </MenuItem>)}
                    </Select>

                </Grid>
                <Grid item xs={4}>

                    <InputLabel >Year</InputLabel>
                    <Select name="year" value={formik.values.birthDay.year}
                        fullWidth
                        onChange={handleDateChange("year")}
                        onBlur={formik.handleBlur}
                    >
                        {years.map((year) => 
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>)}
                    </Select>

                </Grid>

                <Grid item xs={12} className='mt-20'>

                    <Button fullWidth
                        size='large'
                        variant='contained'
                        type='submit'
                        sx={{
                            borderRadius: "29px", py: "15px", bgcolor: blue[500]
                        }}>signup</Button>

                </Grid>

            </Grid>
        </form>
    )
}

export default SignUpForm