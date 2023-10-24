import React, {useState,useEffect} from 'react';

function Example(){ 
    const [value,setValue] = useState('Chao');

    return(
        <div>{value}</div>
    );
}

export default Example;