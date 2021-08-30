import React from 'react'
import "./inputoption.css"
const InputOption = ({Icon, title, color}) => {
    return (
        <div className="inputOption">
           <Icon style={{color: color}}/>
          <h5 className="inputOption_title">{title}</h5> 
        </div>
    )
}

export default InputOption
