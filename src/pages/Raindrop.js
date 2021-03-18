import React, {useState} from 'react'

import Header from "../components/Header"
import PrincipalForm from '../components/PrincipalForm'
import ProgressBar from '../components/ProgressBar'
import useForm from '../components/useForm'

const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    datePiker:new Date('2014-08-18T21:11:54'),
    postCode:'',
    houseNumber:'',
    adressLineOne:'',
    adressLineTwo:'',
    city:'',
    insuranceNumber:'',
}

export default function Raindrop(){

    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        const {name, value}= event.target
        setValues({
            ...values,
            [name]:value
        })
    };

    return(
        <div>
            <Header
                onChange={handleChange}
                values={values}
            />
            {/* <ProgressBar/> */}
            <PrincipalForm
                onChange={handleChange}
                values={values} />
        </div>

    )
}


