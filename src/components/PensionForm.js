import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';

import PensionBar from './pensionBar';


const useStyles = makeStyles((theme) => ({
    datePiker:{
        background:'#efeff2',
        height: '3em',
        width:'22em'
    },
    formControl: {
        margin: theme.spacing(),
        minWidth: 120,
        background:'#efeff2',
        height: '3em',
        width:'22em',
        marginRight:'30px'
      },
}));

export default function PensionForm(props){
    const classes = useStyles();

    const [data, setData] = useState('');

    const handleChange = (event) => {
        const {name, value}= event.target
        setData({
            ...data,
            [name]:value
        })
    };
    console.log(props.radio)
    if(props.radio==='workplace'){
    return(
        <div>
            <Box
                display="flex"
                flexWrap="wrap">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Pension Provider</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={data.pensionProvider}
                    onChange={handleChange}
                    label="Pension Provider"
                    name="pensionProvider"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={111111}>111111</MenuItem>
                    <MenuItem value={222222}>222222</MenuItem>
                    <MenuItem value={333333}>333333</MenuItem>
                    </Select>
                </FormControl>

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Plan Number (Not compulsory)"
                    variant="outlined"
                    name="houseNumber"
                    value={data.planNumber}
                    onChange={handleChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Employer"
                    variant="outlined"
                    name="Employer"
                    value={data.employer}
                    onChange={handleChange}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Employement type (Not compulsory)</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={data.EmployementType}
                    onChange={handleChange}
                    label="Employement type (Not compulsory)"
                    name="EmployementType"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={111111}>111111</MenuItem>
                    <MenuItem value={222222}>222222</MenuItem>
                    <MenuItem value={333333}>333333</MenuItem>
                    </Select>
                </FormControl>

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="City/Town"
                    variant="outlined"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Narional Insurance Number"
                    variant="outlined"
                    name="insuranceNumber"
                    value={data.insuranceNumber}
                    onChange={handleChange}
                />
            </Box>
            <p>The more information you give us, the greater the likelihood of finding the pension (see strength below)</p>
            <PensionBar/>
        </div>
    )}
    if(props.radio==='personal'){
        return(
            <div>
                <Box
                display="flex"
                flexWrap="wrap">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Pension Provider</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={data.pensionProvider}
                    onChange={handleChange}
                    label="Pension Provider"
                    name="pensionProvider"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={111111}>111111</MenuItem>
                    <MenuItem value={222222}>222222</MenuItem>
                    <MenuItem value={333333}>333333</MenuItem>
                    </Select>
                </FormControl>

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Plan Number (Not compulsory)"
                    variant="outlined"
                    name="houseNumber"
                    value={data.planNumber}
                    onChange={handleChange}
                />
            </Box>
            </div>
        )
    }
}