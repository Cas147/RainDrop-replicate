import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
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
                    radio={radio}
                    data={props.values}
                />
                </div>
        </div>
    )
}