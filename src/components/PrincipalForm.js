import React from 'react';

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
import PensionSearcher from './PensionSearcher'

const useStyles = makeStyles((theme) => ({
    datePicker:{
        width:'22em'
    },
    formControl: {
        margin: theme.spacing(),
        width:'22em',
      },
}));


export default function PrincipalForm(props){
    const classes = useStyles();


    const convertToEvent = (name,value) =>({
        target: {
            name, value
        }
    });
    console.log('here')
    return(
        <form className="principla-form--container">
            <h2>Your Personal details</h2>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker className={classes.datePicker}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    name="datePicker"
                    value={props.values.datePicker}
                    onChange={date => props.onChange(convertToEvent('datePicker', date))}
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
                    value={props.values.postCode}
                    onChange={props.onChange}
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
                    value={props.values.houseNumber}
                    onChange={props.onChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Adress Line 1"
                    variant="outlined"
                    name="adressLineOne"
                    value={props.values.adressLineOne}
                    onChange={props.onChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Adress Line 2"
                    variant="outlined"
                    name="adressLineTwo"
                    value={props.values.adressLineTwo}
                    onChange={props.onChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="City/Town"
                    variant="outlined"
                    name="city"
                    value={props.values.city}
                    onChange={props.onChange}
                />
            </Box>
            <h2>Your National Insurance Number</h2>
            <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Narional Insurance Number"
                    variant="outlined"
                    name="insuranceNumber"
                    value={props.values.insuranceNumber}
                    onChange={props.onChange}
                />
        </form>
    )
}