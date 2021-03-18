import React,{useState, useEffect} from  'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './styles/header.css'
import Logo from '../images/raindroplogo_0.png'


const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
      width: '100%',
  },
  TextField:{
      background:'#efeff2',
      borderRadius: 5,
      margin:5,
      borderColor: 'none',
  },
  Button:{
    background:'#bd0033',
    padding: '10px',
    margin:'10px 0',
    borderRadius: '26px',
    fontSize: '1em',
  },
}));



export default function Header(initialValues){

    const classes = useStyles();

    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        const {name, value}= event.target
        setValues({
            ...values,
            [name]:value
        })
    };

    const handleSubmit= (event) => {
        event.preventDefault();
        console.log('form was submited')
        console.log(values)
    }
    return(
        <div>
            <div className="header-container">
                <div className="header-form--container">
                    <div className="top-form--container">
                        <h3>Pension Hunter</h3>
                        <div className="top2-form--container">
                            <p>by</p>
                            <img className="logo-form--container" src={Logo} alt="logo"></img>
                        </div>
                    </div>
                    <h2 >Don’t miss out on lost pensions.</h2>
                    <p className="text-form--container">Our <b>free</b> Pension Hunter service will search for your missing pension money sitting in previous companies or personal plans so you can put it to good use.</p>
                    <p className="text-form--container">Using the service does not lock you into any new pension schemes, at the end you will be asked to provide an email and password to securely track the results of your pension finding request. Read more about our data policy by <Link className="link-form-container" to="#">clicking here. </Link> </p>
                    <p className="textcolored-form--container">Make sure you have your <b>National Insurance number</b> handy to help us identify any lost pensions.</p>
                    <form className={classes.root}>
                        <Grid container >
                                <Grid item xs={6}>
                                    <TextField className={classes.TextField}
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField className={classes.TextField}
                                    id="outlined-basic"
                                    label="Last Name"
                                    name="lastName"
                                    variant="outlined"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classes.TextField}
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    />
                                </Grid>
                        </Grid>
                        <Button onClick={handleSubmit} className={classes.Button} variant="contained" >Start Now</Button>
                    </form>
                </div>
            </div>
        </div>
        )
    }


