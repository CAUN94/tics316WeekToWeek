import React, {useState,useEffect} from 'react';

function ListaSecreta({datos}){
    const [items,setItems] = useState(datos);
    const [selectedItem,setSelectedItem] = useState(null);

    const toggleItem = (item) => {
        if(selectedItem == item){
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
        }  
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSelectedItem(null);
        },3000)
    },[selectedItem])

    return(
        <ul>
            {
                items.map((item,index) => (
                    <li
                        key = {index}
                        onClick={() => toggleItem(item)}
                    >
                        {selectedItem == item ? item : 'Palabra Secreta'}
                    </li>
                ))
            }
        </ul>
    );
}

export default ListaSecreta;