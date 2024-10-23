import React from 'react'

function Calculator() {

    const addition () > {
        var a = 10;
        var b = 10;
        var c = a+b;
        console.log('addition is : '+c);
    }
    
  return (
    <div>
        <h1>Calculator</h1><br></br>
        <input type="text" placeholder="Enter number 1 "></input><br></br><br></br>
        <input type="text" placeholder="Enter number 2 "></input><br></br><br></br>
        <input type="submit" value="Add"></input>
    </div>
  )
}

export default Calculator