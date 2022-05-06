import React, { useState } from 'react';
import Proptypes from 'prop-types';
import '../styles/search-btn.css';

export const SearchBtn = ( { setCategories } ) => {
  
    const [inputValue, setInputValue] = useState('')

    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue !== '' ) {
            
            setCategories(cats => [ inputValue, ...cats ]);
            setInputValue('')
        }
    }
    

    
    return (
            
            <form  onSubmit={handleSubmit}>

                <input 
                    type="text" 
                    name="newCategory"
                    value={inputValue}
                    onChange={ handleInputChange } 
                    autoComplete="off"
                    placeholder='Search...'
                />
            </form>
        
    )
}

SearchBtn.propTypes = {

    setCategories: Proptypes.func.isRequired
}