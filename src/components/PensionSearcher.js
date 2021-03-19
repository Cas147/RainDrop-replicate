import React,{useState} from 'react';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import PensionForm from './PensionForm'
import './styles/PensionSearcher.css'
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function PensionSearcher(props){

    const [radio, setRadio] = useState('workplace');

    const handleChange = (event) => {
      setRadio(event.target.value);
    };

    console.log(props.values.radio)
    const classes = useStyles();
    return(
        <div className="pensionSearcher-container">
            <h2>Set up your Pension Searches</h2>
            <div className="title-container">
                <Box display="flex">
                    <Box display="flex" justifyContent="flex-start">
                        <h3>Pension search 1</h3>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<DeleteIcon />}
                                >
                            </Button>
                    </Box>
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
                <div>
                <PensionForm
                    onChange={props.onChange}
                    values={radio}
                />
                </div>
            <h2>Sending your results</h2>
            <p>Once you have submitted your search, our team will find your pensions and contact you by email. By clicking submit you are agreeing to our  <Link className="link-Pform-container" to="#"> privacy policy.</Link></p>
        </div>
    )
}