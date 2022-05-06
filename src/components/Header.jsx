import React from 'react';
import { SearchBtn } from './SearchBtn';
import logo from '../gifLogo.png';
import '../styles/header.css';

export const Header = ({ setCategories, setHelperNumber }) => {
    
    return (
        <header>
            <div className="img-container">
                <img 
                    src={logo} 
                    alt="gifLog"
                />
                <h3>GifApp</h3>
            </div>
            <SearchBtn 
                setCategories={setCategories}
                setHelperNumber={setHelperNumber}
            />
        </header>
    )
}
