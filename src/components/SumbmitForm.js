import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
        width:'22em',
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
}));

export default function SubmitForm (props){

    const classes = useStyles();
    return(
        <div className="submit-contianer">
        <h2>Sending your results</h2>
            <p>Once you have submitted your search, our team will find your pensions and contact you by email. By clicking submit you are agreeing to our  <Link className="link-Pform-container" to="#"> privacy policy.</Link></p>
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
            <p>By signing up to the Raindrop app you agree to our  <Link className="link-Pform-container" to="#"> privacy policy</Link> and <Link className="link-Pform-container" to="#">terms & conditions</Link>.</p>
            </div>

            <Button onClick={props.handleSubmit} className={classes.Button} variant="contained" >Submit</Button>
    </div>
    )
}