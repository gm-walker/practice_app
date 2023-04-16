import React from 'react'
import react from 'react'

const Hello = () => 
{
    // return (
    //     <div>
    //         <h1>Hello, Gee Walker!</h1>
    //     </div>
    // )
    return React.createElement('div', {id: 'hello', class: 'dummyClass'},<h1>Hello, Walker!!</h1>)
}

export default Hello