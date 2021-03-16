import React from 'react'

import Header from "../components/Header"

class Raindrop extends React.Component{
    state={
        error:null,
        firstName:"",
        lastNamer:"",
        email:""
    }
    render(){
        return(
            <Header/>
        )
    }
}

export default Raindrop;