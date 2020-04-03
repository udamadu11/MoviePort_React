import React from 'react';
import spinner from './spinner.gif';

function Spinner(){
    return(
        <div>
            <img
                src={spinner}
                style={{width: '200px',margin: 'auto', display: 'block'}}
                alt="Loding..."
            />
        </div>
    )
}
export default Spinner;