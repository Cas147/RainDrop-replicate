import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"

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

    const convertToEvent = (name,value) =>({
        target: {
            name, value
        }
    });

    console.log(props.radio)
    if(props.values==='workplace'){
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
                    value={props.values.pensionProvider}
                    onChange={props.onChange}
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
                    value={props.values.planNumber}
                    onChange={props.onChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Employer"
                    variant="outlined"
                    name="Employer"
                    value={props.values.employer}
                    onChange={props.onChange}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Employement type (Not compulsory)</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.values.EmployementType}
                    onChange={props.onChange}
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

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker className={classes.formControl}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Aproximate start date (Not compulsory)"
                    format="MM/yyyy"
                    name="startDate"
                    value={props.values.selectedDate}
                    onChange={date => props.onChange(convertToEvent(props.values.startDate,date))}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker className={classes.formControl}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Aproximate start date (Not compulsory)"
                    format="MM/yyyy"
                    name="endDate"
                    value={props.values.selectedDate}
                    onChange={date => props.onChange(convertToEvent(props.values.endDate,date))}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>
            </Box>
            <p>The more information you give us, the greater the likelihood of finding the pension (see strength below)</p>
            <PensionBar/>
        </div>
    )}
    if(props.values==='personal'){
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
                    value={props.values.pensionProvider}
                    onChange={props.onChange}
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
                    value={props.values.planNumber}
                    onChange={props.onChange}
                />
            </Box>
            </div>
        )
    }
}