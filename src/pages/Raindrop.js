import React, {useState} from 'react'

import Header from "../components/Header"
import PrincipalForm from '../components/PrincipalForm'
import ProgressBar from '../components/ProgressBar'
import PensionSearcher from '../components/PensionSearcher'


const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    datePiker:new Date(),
    postCode:'',
    houseNumber:'',
    adressLineOne:'',
    adressLineTwo:'',
    city:'',
    insuranceNumber:'',
    pensionProvider:'',
    planNumber:'',
    houseNumber:'',
    Employer:'',
    EmployementType:'',
    startDate:new Date(),
    endDate:new Date(),
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

            <ProgressBar
                postCode={values.postCode}
                houseNumber={values.houseNumber}
                adressLineOne={values.adressLineOne}
                adressLineTwo={values.adressLineTwo}
                city={values.city}
                insuranceNumber={values.insuranceNumber}
                pensionProvider={values.pensionProvider}
                planNumber={values.planNumber}
            />

            <PrincipalForm
                onChange={handleChange}
                values={values} />

            <PensionSearcher
             values={values}
             onChange={handleChange}
              />
        </div>

    )
}


