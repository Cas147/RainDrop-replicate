import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './styles/SubmitForm.css'
import Button from '@material-ui/core/Button';


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
      Button:{
        background:'#bd0033',
        padding: '10px',
        margin:'10px 0',
        borderRadius: '26px',
        fontSize: '1em',
        width:'12em',
        color:'white',
      },
      checked:{
          marginTop:"15px"
      }
}));

export default function SubmitForm (props){
    const convertToEvent = (name,value) =>({
        target: {
            name, value
        }
    });

    const classes = useStyles();
    return(
        <div className="submit-contianer">
        <h2>Sending your results</h2>
            <p className="p-gray">Once you have submitted your search, our team will find your pensions and contact you by email. By clicking submit you are agreeing to our  <Link className="link-Pform-container" to="#"> privacy policy.</Link></p>
        <TextField className={classes.formControl}
            id="outlined-basic"
            label=" Email"
            variant="outlined"
            name="email"
            type="email"
            value={props.values.email}
            autoComplete='off'
            onChange={props.onChange}
            error={props.errors.email}
            {...(props.errors.email &&{error:true,helperText:props.errors.email})}
            />

        <TextField className={classes.formControl}
            id="outlined-basic"
            label="password"
            variant="outlined"
            name="password"
            type="password"
            value={props.values.password}
            autoComplete='off'
            onChange={props.onChange}
            error={props.errors.password}
            {...(props.errors.password &&{error:true,helperText:props.errors.password})}
            />
            <div>
            <FormControl component="fieldset" className={classes.checked}>
                <FormControlLabel
                    value={props.values.transferingPension}
                    control={<Checkbox color="primary" />}
                    label="Would you consider transferring all of your pensions into one pot when found?"
                    labelPlacement="end"
                    onChange={e=>props.onChange(convertToEvent('transferingPension',e.target.checked))}
                    style ={{
                      color: "#71718f",
                    }}
                />
                <FormControlLabel
                    value={props.values.news}
                    control={<Checkbox color="primary" />}
                    label="I'd like to receive pension news from Raindrop."
                    labelPlacement="end"
                    onChange={e=>props.onChange(convertToEvent('news',e.target.checked))}
                    style ={{
                      color: "#71718f",
                    }}
                />
            </FormControl>
            <p > <b>By signing up to the Raindrop app you agree to our</b> <Link className="link-Pform-container" to="#"> privacy policy</Link> and <Link className="link-Pform-container" to="#">terms & conditions</Link>.</p>
            </div>


            <Button onClick={props.handleSubmit} className={classes.Button} variant="contained" >Submit</Button>
    </div>
    )
}