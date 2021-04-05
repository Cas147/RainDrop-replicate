import React, { useState } from "react";

import Header from "../components/Header";
import PrincipalForm from "../components/PrincipalForm";
import ProgressBar from "../components/ProgressBar";
import PensionForm from "../components/PensionForm";
import SubmitForm from "../components/SumbmitForm";
import Footer from "../components/footer";

import "./raindrop.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  datePicker: new Date("2014-08-18T21:11:54"),
  postCode: "",
  houseNumber: "",
  adressLineOne: "",
  adressLineTwo: "",
  city: "",
  insuranceNumber: "",
  password: "",
  transferingPension: false,
  news: false,
};

export default function Raindrop() {
  const [values, setValues] = useState(initialValues);

  values.firstName = "..";
  values.pensions = [
    {
      id: uuidv4(),
      pensionProvider: "",
      planNumber: "",
      employer: "",
      employementType: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    name = "pensions";
    value = updatedPensions;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="raindrop">
      <Header onChange={handleChange} values={values} errors={errors} />

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

      <PensionForm values={values} onChange={handleChange} />

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

      <Footer />
    </div>
  );
}
