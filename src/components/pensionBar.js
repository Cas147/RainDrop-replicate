import React  from 'react';


import './styles/PensionBar.css'

export default function ProgressBar(props){
    let pensionProviderCount = 0;
    let planNumberCount= 0;
    let employerCount= 0;
    let employementTypeCount=0
    if(props.pensionProvider!==''){
        pensionProviderCount=2;
    }else{
        pensionProviderCount=0;
    }
    if(props.planNumber!==''){
        planNumberCount=3;
    }else{
        planNumberCount=0;
    }
    if(props.employer!==''){
        employerCount=2;
    }else{
        employerCount=0;
    }
    if(props.employementType!==''){
        employementTypeCount=1;
    }else{
        employementTypeCount=0;
    }
    let totalCount=pensionProviderCount+planNumberCount+employerCount+employementTypeCount;
    return(
        <div className="progressPension-container">
            <div className={`progress ${totalCount >=1 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=2 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=3 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=4 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=5 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=6 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=7 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=8 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=9 && 'progressTwo'}`}></div>
            <div className={`progress ${totalCount >=10 && 'progressTwo'}`}></div>
        </div>
    )
}