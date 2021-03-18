import React from 'react';

import './styles/ProgressBar.css'
import checked from '../images/600px-White_check.svg.png'

export default function ProgressBar(dataInformation){
    return(
        <div className="principal">
            <div className="container">
                <div className="details-container size">
                    <div className="progress-container">
                        <div className="circle">
                            <img src={checked} alt="checked icon"/>
                        </div>
                        <div className="bars"></div>
                    </div>
                    <p className="step">Step 1</p>
                    <h5>Your detail</h5>
                </div>

                <div className="adress-container size">
                <div className="progress-container">
                        <div className="circle">
                            <img src={checked} alt="checked icon"/>
                        </div>
                        <div className="bars"></div>
                    </div>
                    <p className="step">Step 2</p>
                    <h5>Address</h5>
                </div>

                <div className="insurance-container size">
                <div className="progress-container">
                        <div className="circle">
                            <img src={checked} alt="checked icon"/>
                        </div>
                        <div className="bars"></div>
                    </div>
                    <p className="step">Step 3</p>
                    <h5>National Insurance</h5>
                </div>

                <div className="pension-container size">
                <div className="progress-container">
                        <div className="circle">
                            <img src={checked} alt="checked icon"/>
                        </div>
                        <div className="bars"></div>
                    </div>
                    <p className="step">Step 4</p>
                    <h5>Pension searches</h5>
                </div>

                <div className="submit-container size">
                    <div className="circle">
                        <img src={checked} alt="checked icon"/>
                    </div>
                    <p className="step">Step 5</p>
                    <h5>Submit</h5>
                </div>
            </div>
        </div>
    )
}