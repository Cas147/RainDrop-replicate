import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns"
import Box from '@material-ui/core/Box';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './styles/PrincipalForm.css';

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
      },
}));


export default function PrincipalForm(dataInformation){

    const classes = useStyles();

    const [data, setData] = useState(dataInformation);

    const handleChange = (event) => {
        const {name, value}= event.target
        setData({
            ...data,
            [name]:value
        })
    };

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (event) => {
        setSelectedDate(event);
      };
    return(
        <form className="principla-form--container">
            <h2>Your Personal details</h2>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker className={classes.datePiker}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
            <h2>Your Address</h2>
            <Box
                display="flex"
                flexWrap="wrap">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Post Code</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={data.postCode}
                    onChange={handleChange}
                    label="Post Code"
                    name="postCode"
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
                    label="House Number"
                    variant="outlined"
                    name="houseNumber"
                    value={data.houseNumber}
                    onChange={handleChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Adress Line 1"
                    variant="outlined"
                    name="adressLineOne"
                    value={data.adressLineOne}
                    onChange={handleChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Adress Line 2"
                    variant="outlined"
                    name="adressLineTwo"
                    value={data.adressLineTwo}
                    onChange={handleChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="City/Town"
                    variant="outlined"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                />
            </Box>
            <h2>Set up your Pension Searches</h2>
            <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Narional Insurance Number"
                    variant="outlined"
                    name="insuranceNumber"
                    value={data.insuranceNumber}
                    onChange={handleChange}
                />
        </form>
    )
}