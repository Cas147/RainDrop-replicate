import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns"
import 'date-fns';
import {
    MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import './styles/PrincipalForm.css';


const useStyles = makeStyles((theme) => ({
    datePicker:{
        width:'22em'
    },
    formControl: {
        margin: theme.spacing(),
        width:'90%',
        marginRight:'5px',
      },
      insurance:{
        width:'21em'
    },
}));


export default function PrincipalForm(props){
    const classes = useStyles();


    const convertToEvent = (name,value) =>({
        target: {
            name, value
        }
    });
    return(
        <form className="principla-form--container">
            <h2>Your Personal details</h2>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker className={classes.datePicker}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date of birth"
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
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Post Code</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.values.postCode}
                        onChange={props.onChange}
                        label="Post Code"
                        name="postCode"
                        error={props.errors.postCode}
                        {...(props.errors.postCode &&{error:true,helperText:props.errors.postCode})}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={111111}>111111</MenuItem>
                        <MenuItem value={222222}>222222</MenuItem>
                        <MenuItem value={333333}>333333</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField className={classes.formControl}
                        id="outlined-basic"
                        label="House Number"
                        variant="outlined"
                        name="houseNumber"
                        value={props.values.houseNumber}
                        autoComplete='off'
                        onChange={props.onChange}
                        error={props.errors.houseNumber}
                        {...(props.errors.houseNumber &&{error:true,helperText:props.errors.houseNumber})}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField className={classes.formControl}
                        id="outlined-basic"
                        label="Adress Line 1"
                        variant="outlined"
                        name="adressLineOne"
                        value={props.values.adressLineOne}
                        autoComplete='off'
                        onChange={props.onChange}
                        error={props.errors.adressLineOne}
                        {...(props.errors.adressLineOne &&{error:true,helperText:props.errors.adressLineOne})}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField className={classes.formControl}
                        id="outlined-basic"
                        label="Adress Line 2"
                        variant="outlined"
                        name="adressLineTwo"
                        value={props.values.adressLineTwo}
                        autoComplete='off'
                        onChange={props.onChange}
                        error={props.errors.adressLineTwo}
                        {...(props.errors.adressLineTwo &&{error:true,helperText:props.errors.adressLineTwo})}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField className={classes.formControl}
                        id="outlined-basic"
                        label="City/Town"
                        variant="outlined"
                        name="city"
                        value={props.values.city}
                        autoComplete='off'
                        onChange={props.onChange}
                        error={props.errors.city}
                        {...(props.errors.city &&{error:true,helperText:props.errors.city})}
                    />
                </Grid>
            </Grid>
            <h2>Your National Insurance Number</h2>
            <TextField className={classes.insurance}
                    id="outlined-basic"
                    label="Narional Insurance Number"
                    variant="outlined"
                    name="insuranceNumber"
                    value={props.values.insuranceNumber}
                    autoComplete='off'
                    onChange={props.onChange}
                    error={props.errors.insuranceNumber}
                    {...(props.errors.insuranceNumber &&{error:true,helperText:props.errors.insuranceNumber})}
                />
        </form>
    )
}