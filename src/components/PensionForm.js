import React,{useState} from 'react';

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
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
    datePicker:{
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
    const [count, setCount] = useState(1);
    const [formList, setFormList] = useState([
        {pensionProvider:'', planNumber:'', employer:'',employementType:'', startDate:new Date(),endDate:new Date(),}
    ])

    const convertToEvent = (name,value) =>({
        target: {
            name, value
        }
    });
    const handleChange = (index, event) =>{
        const formList=[...formList];
        formList[index][event.target.name] = event.target.value;
        setFormList(formList)

    }

    const handleAdd = () => {
        setFormList([...formList,{pensionProvider:'', planNumber:'', employer:'',EmployementType:'', startDate:new Date(),endDate:new Date()}]);
        setCount(count+1)
    }
    const handleDelete = (index) =>{
        const list=[...formList];
        list.splice(index, 1);
        setFormList(list)
    }
    console.log(props.radio)
    if(props.radio==='workplace'){
    return(
        <div>

            {formList.map((formValue, index)=>(
            <div key={index}>
            <Box display="flex">
                <h3>Pension search {count}</h3>
                <div display="flex" justifyContent="flex-end">
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            onClick={handleDelete}
                            >
                        </Button>
                </div>
            </Box>
            <Box
                display="flex"
                flexWrap="wrap">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Pension Provider</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.data.pensionProvider}
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
                    name="planNumber"
                    value={props.data.planNumber}
                    onChange={handleChange}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Employer"
                    variant="outlined"
                    name="employer"
                    value={props.data.employer}
                    onChange={handleChange}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Employement type (Not compulsory)</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.data.pensionSearch.employementType}
                    onChange={handleChange}
                    label="Employement type (Not compulsory)"
                    name="employementType"
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
                    value={props.data.startDate}
                    onChange={date => handleChange(convertToEvent(props.data.startDate,date))}
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
                    value={props.data.endDate}
                    onChange={date => handleChange(convertToEvent(props.data.endDate,date))}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>
            </Box>
            </div>

            ))}

            <p>The more information you give us, the greater the likelihood of finding the pension (see strength below)</p>
            <Button onClick={handleAdd} variant="outlined" color="secondary" >+ Another search</Button>
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
                    value={props.data.pensionProvider}
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
                    name="planNumber"
                    value={props.data.planNumber}
                    onChange={props.onChange}
                />
            </Box>
            <p>The more information you give us, the greater the likelihood of finding the pension (see strength below)</p>
            </div>
        )
    }
}