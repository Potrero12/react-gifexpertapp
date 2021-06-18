import React, { useState } from 'react'
import propTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {

        setinputValue(e.target.value)
    }

    const handleSubtmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            //llamar  setcategories
            setCategories( cats => [inputValue, ...cats] );
        }
    }

    return (
        <form onSubmit={ handleSubtmit }>
            <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}


export default AddCategory;
