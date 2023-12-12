import React, { useState } from 'react';
import { Button, TextField, Autocomplete, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';




const AddSurvey = () => {


    const submitSurvey = async () => {
        try {
            // Replace 'http://localhost:3001' with your actual backend URL
            const response = await axios.post('http://localhost:3000/api/surveys', formValues);
            console.log(response.data);  // Log the response from the backend

            // Add any additional logic here, e.g., show a success message, redirect, etc.
        } catch (error) {
            console.error('Error submitting survey:', error);
            // Handle errors as needed
        }
    };
    
    const topSkills = [
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JS' },
        { label: 'React Js' },
    ];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [formValues, setFormValues] = useState({
        name: '',
        graduation: false,
        postGraduation: false,
        phD: false,
        skills: null,
        gender: '',
        phone: '',
        email: '',
    });

    const resetValues = () => {
        setFormValues({
            name: '',
            graduation: false,
            postGraduation: false,
            phD: false,
            skills: null,
            gender: '',
            phone: '',
            email: '',
        });
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form className='mt-3' style={{ width: '70%' }}>

                <h1 style={{ marginTop: '10px' }}>Survey Form</h1>

                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                />

                <div style={{ marginTop: '10px' }}>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginTop: '10px' }}>Education Level</FormLabel>
                    <Grid container spacing={2}>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="Graduation"
                                checked={formValues.graduation}
                                onChange={(e) => setFormValues({ ...formValues, graduation: e.target.checked })}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="Post Graduation"
                                checked={formValues.postGraduation}
                                onChange={(e) => setFormValues({ ...formValues, postGraduation: e.target.checked })}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox {...label} />}
                                label="PhD"
                                checked={formValues.phD}
                                onChange={(e) => setFormValues({ ...formValues, phD: e.target.checked })}
                            />
                        </Grid>
                    </Grid>
                </div>

                <Autocomplete
                    disablePortal
                    options={topSkills}
                    sx={{ width: '100%', marginTop: '10px' }}
                    renderInput={(params) => (
                        <TextField {...params} label="Skills" />
                    )}
                    value={formValues.skills}
                    onChange={(e, newValue) => setFormValues({ ...formValues, skills: newValue })}
                />

                <FormControl style={{ marginTop: '10px' }}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={formValues.gender}
                        onChange={(e) => setFormValues({ ...formValues, gender: e.target.value })}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    fullWidth
                    className='mt-2'
                    label="Phone Number"
                    variant="outlined"
                    required
                    style={{ marginTop: '10px' }}
                    value={formValues.phone}
                    onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                />

                <TextField
                    fullWidth
                    className='mt-2 mb-3'
                    label="Email ID"
                    variant="outlined"
                    required
                    style={{ marginTop: '10px' }}
                    value={formValues.email}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                />

                <Stack direction="row" spacing={2} className='mt-5'>
                    <Button type='button' onClick={submitSurvey} variant="contained" style={{ height: '50px', width: '200px' }} className='bg-success'>Submit</Button>
                    <Button type='button' onClick={resetValues} variant="contained" style={{ height: '50px', width: '200px', color: "blue" }} className='bg-light'>Reset</Button>
                </Stack>
            </form>
        </div>
    );
};

export default AddSurvey;
