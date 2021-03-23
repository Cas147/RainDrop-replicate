import React, {useState} from 'react'

import Header from "../components/Header"
import PrincipalForm from '../components/PrincipalForm'
import ProgressBar from '../components/ProgressBar'
import PensionSearcher from '../components/PensionSearcher'
import SubmitForm from '../components/SumbmitForm'
import PensionBar from  '../components/pensionBar'
import Footer from '../components/footer'


const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    datePicker:new Date(),
    postCode:'',
    houseNumber:'',
    adressLineOne:'',
    adressLineTwo:'',
    city:'',
    insuranceNumber:'',
    pensionSearch: {
        pensionProvider:'',
        planNumber:'',
        employer:'',
        employementType:'',
        startDate:new Date(),
        endDate:new Date(),},
    password:'',
}

export default function Raindrop(){

    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        console.log('event.target', event.target)

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
                pensionProvider={values.pensionSearch.pensionProvider}
                planNumber={values.pensionSearch.planNumber}
                email={values.email}
                password={values.password}
            />

            <PrincipalForm
                onChange={handleChange}
                values={values} />

            <PensionSearcher
             values={values}
             onChange={handleChange}
              />
            <PensionBar
                pensionProvider={values.pensionSearch.pensionProvider}
                planNumber={values.pensionSearch.planNumber}
                employementType={values.pensionSearch.employementType}
                employer={values.pensionSearch.employer}
            />
              <SubmitForm
                values={values}
                onChange={handleChange}
              />

              <Footer/>
        </div>

    )
}


