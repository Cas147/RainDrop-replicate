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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { v4 as uuidv4 } from 'uuid';

import './styles/PensionSearcher.css'



const useStyles = makeStyles((theme) => ({
    datePicker:{
        height: '3em',
        width:'22em'
    },
    formControl: {
        margin: theme.spacing(),
        minWidth: 120,
        height: '3em',
        width:'20em',
        marginRight:'30px'
      },
    button:{
        padding:'10px 28px',
        borderRadius:'30px',
    },
    deleteButton:{
        borderRadius:"40%",
        border:"1px solid #bd0033",
        marginRight:'30px'
    },
}));

export default function PensionForm(){
    const classes = useStyles();
    const [count, setCount] = useState(1);
    const   [inputFields, setInputFields] = useState([
        {id: uuidv4(), pensionProvider:'', planNumber:'', employer:'',employementType:'', startDate:new Date(),endDate:new Date(),},
    ])

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        setInputFields(newInputFields);
      }

    const handleAdd = () => {
        setInputFields([...inputFields,{ id: uuidv4(),pensionProvider:'', planNumber:'', employer:'',EmployementType:'', startDate:new Date(),endDate:new Date()}]);
        setCount(count+1)
    }
    const handleDelete = id =>{
        if(inputFields.length >=2){
            const values=[...inputFields];
            values.splice(values.findIndex(value => value.id === id), 1);
            setInputFields(values);
    }
    }
    const [radio, setRadio] = useState('workplace');

    const handleChange = (event) => {
      setRadio(event.target.value);
    };
    console.log(inputFields)
    if(radio==='workplace'){

    return(
        <div className="pensionForm-container">

        { inputFields.map(inputField => (
            <div key={inputField.id}>
                <h2>Set up your Pension Searches</h2>
                <h3>Pension search {inputFields.length}</h3>
            <Box display="flex">
                <div className="title-container">
                    <Box display="flex">
                    </Box>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top" value={radio}         onChange={handleChange}>
                        <FormControlLabel
                        value="workplace"
                        control={<Radio color="primary" />}
                        label=" Workplace" />

                        <FormControlLabel
                        value="personal"
                        control={<Radio color="primary" />}
                        label=" Personal" />
                    </RadioGroup>
                    </div>
                <div display="flex" justifyContent="flex-end">
                        <Button className={classes.deleteButton}
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
                    value={inputField.pensionProvider}
                    onChange={event => handleChangeInput(inputField.id, event)}
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
                    value={inputField.planNumber}
                    onChange={event => handleChangeInput(inputField.id, event)}
                />

                <TextField className={classes.formControl}
                    id="outlined-basic"
                    label="Employer"
                    variant="outlined"
                    name="employer"
                    value={inputField.employer}
                    onChange={event => handleChangeInput(inputField.id, event)}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Employement type (Not compulsory)</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={inputField.employementType}
                    onChange={event => handleChangeInput(inputField.id, event)}
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
                    value={inputField.startDate}
                    onChange={event => handleChangeInput(inputField.id, event)}
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
                    value={inputField.endDate}
                    onChange={event => handleChangeInput(inputField.id, event)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>
            </Box>
            </div>

            ))}

            <p className="p-gray">The more information you give us, the greater the likelihood of finding the pension (see strength below)</p>
            <div className="button-container">
                <Button className={classes.button} onClick={handleAdd} variant="outlined" color="secondary" >+ Another search</Button>
            </div>
        </div>
    )}
    if(radio==='personal'){
        return(
            <div className="pensionForm-container">
             <div>

            { inputFields.map(inputField => (
                <div key={inputField.id}>
                    <h2>Set up your Pension Searches</h2>
                    <h3>Pension search {inputFields.length}</h3>
                <Box display="flex">
                    <div className="title-container">
                        <Box display="flex">
                        </Box>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top" value={radio}         onChange={handleChange}>
                            <FormControlLabel
                            value="workplace"
                            control={<Radio color="primary" />}
                            label=" Workplace" />

                            <FormControlLabel
                            value="personal"
                            control={<Radio color="primary" />}
                            label=" Personal" />
                        </RadioGroup>
                        </div>
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
                        value={inputField.pensionProvider}
                        onChange={event => handleChangeInput(inputField.id, event)}
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
                        value={inputField.planNumber}
                        onChange={event => handleChangeInput(inputField.id, event)}
                    />
                </Box>
                </div>

                ))}

                <p className="p-gray">The more information you give us, the greater the likelihood of finding the pension (see strength below)</p>
                <div className="button-container">
                <Button className={classes.button} onClick={handleAdd} variant="outlined" color="secondary" >+ Another search</Button>
            </div>
            </div>
            </div>
        )
    }
}