import React from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './styles/SubmitForm.css'
import Button from '@material-ui/core/Button';


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
    const handleSubmit= (event) => {
        event.preventDefault();
        console.log('form was submited')
        console.log(props.values)
    }
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
             onChange={props.onChange}
            />

        <TextField className={classes.formControl}
            id="outlined-basic"
            label="password"
            variant="outlined"
            name="password"
            type="password"
            value={props.values.password}
            onChange={props.onChange}
            />
            <div>
            <p>By signing up to the Raindrop app you agree to our  <Link className="link-Pform-container" to="#"> privacy policy</Link> and <Link className="link-Pform-container" to="#">terms & conditions</Link>.</p>
            </div>

            <Button onClick={handleSubmit} className={classes.Button} variant="contained" >Submit</Button>
    </div>
    )
}