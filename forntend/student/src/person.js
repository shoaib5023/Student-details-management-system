import React from 'react'
function person(person,key){

    return(
        <div>

            <h3>my id is {key}.my name is {person.fname} and my last name is {person.lname}</h3>
        </div>

    )
}
export default person