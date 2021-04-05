import React, {useState} from 'react'

import Header from "../components/Header"
import PrincipalForm from '../components/PrincipalForm'
import ProgressBar from '../components/ProgressBar'
import PensionForm from '../components/PensionForm'
import SubmitForm from '../components/SumbmitForm'
import Footer from '../components/footer'

import './raindrop.css'

const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    datePicker:new Date('2014-08-18T21:11:54'),
    postCode:'',
    houseNumber:'',
    adressLineOne:'',
    adressLineTwo:'',
    city:'',
    insuranceNumber:'',
    password:'',
    transferingPension:false,
    news:false,
}

export default function Raindrop(){

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {

        const {name, value}= event.target
        setValues({
            ...values,
            [name]:value
        })
    };

    const validate = () => {
        let temp={}
            temp.firstName= values.firstName ? "": "this field is required."
            temp.lastName= values.lastName ? "": "this field is required."
            temp.email= (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ).test(values.email) ? "": "email is not valid."
            temp.postCode= values.postCode ? "": "this field is required."
            temp.houseNumber= values.houseNumber ? "": "this field is required."
            temp.adressLineOne= values.adressLineOne ? "": "this field is required."
            temp.adressLineTwo= values.adressLineTwo ? "": "this field is required."
            temp.city= values.city ? "": "this field is required."
            temp.insuranceNumber= (/^(?!BG|GB|NK|KN|TN|NT|ZZ)[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z](?:\s*\d{2}){3}\s*[A-D]$/).test(values.insuranceNumber) ? "": "Please enter a valid NI number. This is 2 letters, followed by 6 digits followed by a final letter. For example AA123456C."
            temp.password = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/).test(values.password) ?"": "Password should be between 8 and 50 chars and should contain 1 uppercase, 1 lowercase and 1 number"
            setErrors({
                ...temp
            })

            return Object.values(temp).every(x => x == "");

    }
    const handleSubmit= (event) => {
        event.preventDefault()
        console.log(errors)
        if(validate())
            window.alert('testing...');
            console.log(values);
    }
    return(
        <div className="raindrop">
            <Header
                onChange={handleChange}
                values={values}
                errors={errors}
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
                values={values}
                handleSubmit={handleSubmit}
                errors={errors}
                />

            <PensionForm
              />
{/*             <PensionBar
                pensionProvider={values.pensionSearch.pensionProvider}
                planNumber={values.pensionSearch.planNumber}
                employementType={values.pensionSearch.employementType}
                employer={values.pensionSearch.employer}
            /> */}

              <SubmitForm
                values={values}
                onChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
              />

              <Footer/>
        </div>

    )
}


