import React from 'react'

function Button() {
    let count=0;
    function Count(){
      count++;
      alert('Hey!!! You Clicked:'+count)

    }
  return (
    <div>
        <button onClick={Count}>Click</button>
    </div>
  )
}

export default Button