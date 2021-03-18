import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import './styles/PensionSearcher.css'
import PensionForm from './PensionForm'
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function PensionSearcher(){

    const [radio, setRadio] = React.useState('workplace');

    const handleChange = (event) => {
    setRadio(event.target.value);
  };
    console.log(radio)
    const classes = useStyles();
    return(
        <div>
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
                <RadioGroup row aria-label="position" name="position" defaultValue="top" value={radio}  onChange={handleChange}>
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
                <PensionForm radio={radio}/>
        </div>
    )
}