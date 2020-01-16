import React from 'react'
import person from './person'

function Namelist(){
    const names=['joe','mark','peter']
    const  persons= [
        {
          id:1,   
         fname:'shaik',
         lname:'Ahmed'
         },

        {
         id:2,   
        fname:'syed',
        lname:'pasha'
         },

        {
        id:3,   
        fname:'mohammed',
        lname:'khadri'
          }]
    
}
    const namelist=names.map(name =>    <h3 key={index} >{index} {name}</h3>
        return (
            <div>
                {namelist}
            </div>     

        );

 }

    export default Namelist ;